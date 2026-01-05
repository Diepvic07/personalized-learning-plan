/**
 * CONFIGURATION
 */
// Default Fallback ID (only used if no link is found in the form)
const FALLBACK_TEMPLATE_ID = '1dK-Jdg7bYp6KW4SKJ8ELZ-_6twzZFDwggTXKWkfOY9Q';
const DESTINATION_FOLDER_ID = '1UCDaJyrM6wZVthvFQRRPIjsKq6SbUH7k';

/**
 * FIELD CONFIGURATION
 * IDs matches the Entry IDs in your config.js
 */
const FIELD_IDS = {
    currentLevel: "20025655",
    goal: "1726224099",
    targetDate: "152926486",
    dailyTime: "492776784",     // Contains "0.75 (Required: 400h)"
    planDocLink: "63991647",    // The Critical Field for the User's Plan
    email: "1439263172"
};

// MAPPING: Tag Name (in Doc) -> [List of possible Form IDs or Titles]
const TAG_MAP = {
    "CurrentLevel": [FIELD_IDS.currentLevel, "Current English Level"],
    "DesiredLevel": [FIELD_IDS.goal, "Main Objective"],
    "TargetDate": [FIELD_IDS.targetDate, "Target Date"],
    "requiredHours": [FIELD_IDS.dailyTime, "Daily dedicated learning time"],
    "TotalHours": [FIELD_IDS.dailyTime] // duplicate just in case
};

const EMAIL_KEYWORD = "email";

/**
 * Setup Trigger (Run once)
 */
function installTrigger() {
    const triggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < triggers.length; i++) {
        if (triggers[i].getHandlerFunction() === 'onFormSubmit') {
            console.log("Trigger already exists.");
            return;
        }
    }
    ScriptApp.newTrigger('onFormSubmit')
        .forForm(FormApp.getActiveForm())
        .onFormSubmit()
        .create();
    console.log("Trigger installed.");
}

/**
 * Helper: Extract ID from Google Doc URL
 */
function getIdFromUrl(url) {
    if (!url) return null;
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
}

/**
 * Main Event Handler
 */
function onFormSubmit(e) {
    console.log("--- START: onFormSubmit ---");

    try {
        if (!e || !e.response) {
            console.error("No event data. Ensure this is run via Trigger.");
            return;
        }

        const formResponse = e.response;
        const itemResponses = formResponse.getItemResponses();
        let userEmail = formResponse.getRespondentEmail();

        // 1. Prepare Data Object & Find Template
        const replacements = {};
        let selectedTemplateId = null;

        // Initialize tags
        Object.keys(TAG_MAP).forEach(tag => replacements[tag] = " ");

        // 2. Extract Responses
        for (let i = 0; i < itemResponses.length; i++) {
            const itemResponse = itemResponses[i];
            const item = itemResponse.getItem();
            const id = item.getId().toString();
            const title = item.getTitle().toLowerCase();
            let answer = itemResponse.getResponse();

            // Handle Arrays
            if (Array.isArray(answer)) answer = answer.join(", ");

            console.log(`Response: [${id}] "${item.getTitle()}" = "${answer}"`);

            // Check for Template Link (Plan Doc Link)
            if (id === FIELD_IDS.planDocLink || title.includes("plan doc") || title.includes("plandoc")) {
                console.log("Found Plan Doc Link:", answer);
                const extractedId = getIdFromUrl(answer);
                if (extractedId) {
                    selectedTemplateId = extractedId;
                    console.log("Extracted Template ID:", selectedTemplateId);
                }
            }

            // Match against TAG_MAP
            for (const [tagName, identifiers] of Object.entries(TAG_MAP)) {
                const isMatch = identifiers.some(identifier =>
                    id === identifier || title.includes(identifier.toLowerCase())
                );
                if (isMatch) {
                    replacements[tagName] = answer;
                }
            }

            // Fallback Email
            if (!userEmail && (id === FIELD_IDS.email || title === "email" || title === "email address")) {
                userEmail = answer;
            }
        }

        if (!userEmail) {
            console.error("ABORT: No email found.");
            return;
        }

        // 3. Determine Final Template
        const finalTemplateId = selectedTemplateId || FALLBACK_TEMPLATE_ID;
        console.log(`Using Template ID: ${finalTemplateId}`);

        // Validate Template Availability
        let templateFile;
        try {
            templateFile = DriveApp.getFileById(finalTemplateId);
        } catch (e) {
            console.error(`Error accessing template ${finalTemplateId}: ${e.message}`);
            // Try fallback if primary failed and wasn't fallback
            if (finalTemplateId !== FALLBACK_TEMPLATE_ID) {
                console.log("Reverting to fallback template.");
                templateFile = DriveApp.getFileById(FALLBACK_TEMPLATE_ID);
            } else {
                throw e;
            }
        }

        // 4. Duplicate Template
        const targetFolder = DriveApp.getFolderById(DESTINATION_FOLDER_ID);
        const newFileName = `Learning Plan - ${userEmail} - ${new Date().toISOString().split('T')[0]}`;
        const newFile = templateFile.makeCopy(newFileName, targetFolder);
        const newDoc = DocumentApp.openById(newFile.getId());

        // 5. Execute Replacements
        const body = newDoc.getBody();
        Object.keys(replacements).forEach(tag => {
            const val = String(replacements[tag]);
            const pattern = "\\{\\{" + tag + "\\}\\}";
            try {
                body.replaceText(pattern, val);
            } catch (e) {
                console.warn(`Regex error for ${tag}: ${e.message}`);
            }
        });

        newDoc.saveAndClose();
        console.log(`Document Generated: ${newFile.getUrl()}`);

        // 6. Share & Email
        try {
            newFile.addEditor(userEmail);
        } catch (e) {
            console.warn("Could not add editor (maybe not a Google account): " + e.message);
            newFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        }

        GmailApp.sendEmail(userEmail, "Your Personalized Learning Plan",
            `Hello,\n\nYour English Learning Plan is ready.\n\nAccess it here: ${newFile.getUrl()}\n\nBest,\nEnglishPlan Team`);

    } catch (err) {
        console.error("FATAL ERROR: " + err.toString());
    }
}
