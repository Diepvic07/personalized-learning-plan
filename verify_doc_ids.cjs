
const fs = require('fs');
const https = require('https');
const path = require('path');

// Read the study plans file content manually since it's an ES module and we want to run this in CKS/Node easily without complex setup
const studyPlansPath = path.join(__dirname, 'src/models/study-plans.js');
const fileContent = fs.readFileSync(studyPlansPath, 'utf8');

// Extract the PLANS object using regex or simple evaluation if safe
// Since the file structure is simple `const PLANS = { ... };`, we can extract the object part.
// However, evaluating code is risky. Let's use regex to find all doc_en and doc_vn.

const docIdRegex = /["']doc_(?:en|vn)["']\s*:\s*["']([^"']+)["']/g;
const planIdRegex = /^\s*(\d+)\s*:\s*{/gm;

// We will parse the file line by line to keep track of which plan we are in
const lines = fileContent.split('\n');
let currentPlanId = null;
const docs = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for Plan ID
    const planMatch = /^\s*(\d+)\s*:\s*{/.exec(line);
    if (planMatch) {
        currentPlanId = planMatch[1];
    }

    // Check for doc_en
    const docEnMatch = /doc_en\s*:\s*["']([^"']+)["']/.exec(line);
    if (docEnMatch && currentPlanId) {
        docs.push({ planId: currentPlanId, type: 'en', id: docEnMatch[1] });
    }

    // Check for doc_vn
    const docVnMatch = /doc_vn\s*:\s*["']([^"']+)["']/.exec(line);
    if (docVnMatch && currentPlanId) {
        docs.push({ planId: currentPlanId, type: 'vn', id: docVnMatch[1] });
    }
}

console.log(`Found ${docs.length} Google Docs to verify.`);

function checkDoc(docInfo) {
    return new Promise((resolve) => {
        const url = `https://docs.google.com/document/d/${docInfo.id}/mobilebasic`;

        const req = https.get(url, (res) => {
            // Google Docs returns 200 for valid docs, or sometimes redirects for auth
            // If it's 404, it definitely doesn't exist/is deleted.
            // If it's 302/303 to a login page, it exists but is private (which might be okay or not depending on requirements, but usually implies the ID is "valid" in format).
            // However, for public access, we usually expect 200.

            if (res.statusCode === 200) {
                resolve({ ...docInfo, status: 'VALID', code: res.statusCode });
            } else if (res.statusCode === 404) {
                resolve({ ...docInfo, status: 'INVALID (404)', code: res.statusCode });
            } else {
                // Treat redirects as potentially valid or requiring auth, but flag them
                resolve({ ...docInfo, status: `WARNING (${res.statusCode})`, code: res.statusCode });
            }
        });

        req.on('error', (e) => {
            resolve({ ...docInfo, status: `ERROR (${e.message})`, code: 0 });
        });
    });
}

async function run() {
    console.log('Starting verification...');
    console.log('----------------------------------------');

    let invalidCount = 0;

    for (const doc of docs) {
        const result = await checkDoc(doc);
        if (result.status.startsWith('INVALID')) {
            console.error(`[FAIL] Plan ${result.planId} (${result.type}): ${result.id} -> ${result.status}`);
            invalidCount++;
        } else if (result.status.startsWith('WARNING')) {
            console.warn(`[WARN] Plan ${result.planId} (${result.type}): ${result.id} -> ${result.status}`);
        } else {
            console.log(`[PASS] Plan ${result.planId} (${result.type}): ${result.id}`);
        }
    }

    console.log('----------------------------------------');
    console.log(`Verification Complete. ${invalidCount} invalid docs found.`);

    if (invalidCount > 0) {
        process.exit(1);
    }
}

run();
