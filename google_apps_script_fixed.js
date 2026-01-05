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
    email: "1439263172",
    name: "1409835656",         // Added Name Field
    planId: "271858445",        // Added Plan ID Field
    nativeLanguage: "1104628968" // Added Native Language Field
};

// MAPPING: Tag Name (in Doc) -> [List of possible Form IDs or Titles]
const TAG_MAP = {
    "CurrentLevel": [FIELD_IDS.currentLevel, "Current English Level"],
    "DesiredLevel": [FIELD_IDS.goal, "Main Objective"],
    "TargetDate": [FIELD_IDS.targetDate, "Target Date"],
    "requiredHours": [FIELD_IDS.dailyTime, "Daily dedicated learning time"],
    "TotalHours": [FIELD_IDS.dailyTime] // duplicate just in case
};

// Plan Titles Mapping
const PLAN_TITLES = {
    1: "Beginner Communication Plan (Mobile-Optimized)",
    2: "Intermediate Communication Plan (Mobile-Optimized)",
    3: "Beginner Communication Plan (Laptop-Optimized)",
    4: "Intermediate Communication Plan (Laptop-Optimized)",
    5: "IELTS Preparation - Beginner Level (Mobile)",
    6: "IELTS Preparation - Intermediate Level (Mobile)",
    7: "IELTS Preparation - Beginner Level (Laptop)",
    8: "IELTS Preparation - Intermediate Level (Laptop)",
    9: "TOEIC Preparation - Beginner Level (Mobile)",
    10: "TOEIC Preparation - Intermediate Level (Mobile)",
    11: "TOEIC Preparation - Beginner Level (Laptop)",
    12: "TOEIC Preparation - Intermediate Level (Laptop)"
};

const EMAIL_TEMPLATES = {
    en: {
        subject: "Your Personalized English Learning Plan is Ready! 🚀",
        body: (name, link) => `Hi ${name},\n\n` +
            `Congratulations on prioritizing your personal growth! 🌟 Your commitment to learning is the first step toward future success.\n\n` +
            `### 📘 Your Personalized Plan\n` +
            `Based on your responses, here is the study plan we've crafted for you:\n` +
            `**[Link to Google Doc: Your Learning Plan](${link})**\n\n` +
            `### 🤝 What's Next?\n` +
            `To help you start strong, **an eJOY team member will contact you shortly** to guide you through the onboarding process and answer any questions.\n\n` +
            `We're excited to support your journey.\n\n` +
            `**Happy Learning!** 🎈\n` +
            `*The eJOY Team*`
    },
    vi: {
        subject: "Kế hoạch học tiếng Anh cá nhân hóa của bạn đã sẵn sàng! 🚀",
        body: (name, link) => `Chào ${name},\n\n` +
            `Chúc mừng bạn đã ưu tiên sự phát triển bản thân! 🌟 Cam kết học tập của bạn là bước đầu tiên hướng tới thành công trong tương lai.\n\n` +
            `### 📘 Kế hoạch cá nhân hóa của bạn\n` +
            `Dựa trên câu trả lời của bạn, đây là lộ trình học tập chúng tôi đã xây dựng cho bạn:\n` +
            `**[Link Google Doc: Kế hoạch học tập của bạn](${link})**\n\n` +
            `### 🤝 Bước tiếp theo là gì?\n` +
            `Để giúp bạn khởi đầu thuận lợi, **một thành viên của đội ngũ eJOY sẽ sớm liên hệ với bạn** để hướng dẫn quy trình giới thiệu và giải đáp mọi thắc mắc.\n\n` +
            `Chúng tôi rất hào hứng được đồng hành cùng bạn.\n\n` +
            `**Chúc bạn học tốt!** 🎈\n` +
            `*Đội ngũ eJOY*`
    },
    es: {
        subject: "¡Tu plan de aprendizaje de inglés personalizado está listo! 🚀",
        body: (name, link) => `Hola ${name},\n\n` +
            `¡Felicitaciones por priorizar tu crecimiento personal! 🌟 Tu compromiso con el aprendizaje es el primer paso hacia el éxito futuro.\n\n` +
            `### 📘 Tu plan personalizado\n` +
            `Basado en tus respuestas, aquí tienes el plan de estudio que hemos elaborado para ti:\n` +
            `**[Enlace a Google Doc: Tu plan de aprendizaje](${link})**\n\n` +
            `### 🤝 ¿Qué sigue?\n` +
            `Para ayudarte a comenzar con fuerza, **un miembro del equipo de eJOY te contactará en breve** para guiarte a través del proceso de incorporación y responder cualquier pregunta.\n\n` +
            `Estamos emocionados de apoyar tu viaje.\n\n` +
            `**¡Feliz aprendizaje!** 🎈\n` +
            `*El equipo de eJOY*`
    }
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
        let userName = ""; // Initialize userName
        let planId = "";   // Initialize planId
        let nativeLanguage = "en"; // Default to English

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

            // Extract Name
            if (id === FIELD_IDS.name || title === "name" || title === "full name" || title.includes("full name")) {
                userName = answer;
            }

            // Extract Plan ID
            if (id === FIELD_IDS.planId || title === "planid" || title === "plan id") {
                planId = answer;
            }

            // Extract Native Language
            if (id === FIELD_IDS.nativeLanguage || title === "native language" || title === "language") {
                // Map common responses to codes if necessary, or assume form sends codes/names
                const lang = String(answer).toLowerCase();
                if (lang.includes("vietnamese") || lang === "vi") nativeLanguage = "vi";
                else if (lang.includes("spanish") || lang === "es") nativeLanguage = "es";
                // else keep default "en"
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

        // Resolve Plan Title
        const planTitle = (planId && PLAN_TITLES[planId]) ? PLAN_TITLES[planId] : "Personalized Learning Plan";

        // 4. Duplicate Template
        const targetFolder = DriveApp.getFolderById(DESTINATION_FOLDER_ID);
        // Format: UserName - PlanTitle - YYYY-MM-DD
        const newFileName = `${userName || 'User'} - ${planTitle} - ${new Date().toISOString().split('T')[0]}`;
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

        // Prepare Email Body
        // Select Template
        const template = EMAIL_TEMPLATES[nativeLanguage] || EMAIL_TEMPLATES['en'];
        const displayName = userName || (nativeLanguage === 'vi' ? 'bạn' : (nativeLanguage === 'es' ? 'usuario' : 'there'));

        const emailSubject = template.subject;
        const emailBody = template.body(displayName, newFile.getUrl());

        GmailApp.sendEmail(userEmail, emailSubject, emailBody);

    } catch (err) {
        console.error("FATAL ERROR: " + err.toString());
    }
}
