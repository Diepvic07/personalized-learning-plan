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
// Web App Deployment
// 1. Click "Deploy" > "New deployment"
// 2. Select type: "Web app"
// 3. Description: "Plan Generator v1"
// 4. Execute as: "Me" (your account)
// 5. Who has access: "Anyone" (or "Anyone with Google account")

const CONFIG = {
    FOLDER_ID: "1b84zOJb4JaHDR2OziQOq4dTEj3Vf2l2k", // Folder to save generated plans
    TEMPLATE_ID: "1UFR2una3soX22P_BYrZK0QLJ42CTocMSEJkqkPB9U0c", // Main Template
    FALLBACK_TEMPLATE_ID: "1UFR2una3soX22P_BYrZK0QLJ42CTocMSEJkqkPB9U0c" // Fallback
};

// Plan Titles Mapping (Same as before)
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
        subject: "Your Personalized English Learning Plan is Ready!",
        textBody: (name, link) => `Hi ${name},\n\n` +
            `Congratulations on prioritizing your personal growth! Your commitment to learning is the first step toward future success.\n\n` +
            `Your Personalized Plan\n` +
            `Based on your responses, here is the study plan we've crafted for you:\n` +
            `Link to Google Doc: Your Learning Plan: ${link}\n\n` +
            `What's Next?\n` +
            `To help you start strong, an eJOY team member will contact you shortly to guide you through the onboarding process and answer any questions.\n\n` +
            `We're excited to support your journey.\n\n` +
            `Happy Learning!\n` +
            `The eJOY Team`,
        htmlBody: (name, link) => `<p>Hi ${name},</p>` +
            `<p>Congratulations on prioritizing your personal growth! Your commitment to learning is the first step toward future success.</p>` +
            `<h3>Your Personalized Plan</h3>` +
            `<p>Based on your responses, here is the study plan we've crafted for you:</p>` +
            `<p><strong><a href="${link}">Link to Google Doc: Your Learning Plan</a></strong></p>` +
            `<h3>What's Next?</h3>` +
            `<p>To help you start strong, <strong>an eJOY team member will contact you shortly</strong> to guide you through the onboarding process and answer any questions.</p>` +
            `<p>We're excited to support your journey.</p>` +
            `<p><strong>Happy Learning!</strong><br>` +
            `<em>The eJOY Team</em></p>`
    },
    vi: {
        subject: "Kế hoạch học tiếng Anh cá nhân hóa của bạn đã sẵn sàng!",
        textBody: (name, link) => `Chào ${name},\n\n` +
            `Chúc mừng bạn đã ưu tiên sự phát triển bản thân! Cam kết học tập của bạn là bước đầu tiên hướng tới thành công trong tương lai.\n\n` +
            `Kế hoạch cá nhân hóa của bạn\n` +
            `Dựa trên câu trả lời của bạn, đây là lộ trình học tập chúng tôi đã xây dựng cho bạn:\n` +
            `Link Google Doc: Kế hoạch học tập của bạn: ${link}\n\n` +
            `Bước tiếp theo là gì?\n` +
            `Để giúp bạn khởi đầu thuận lợi, một thành viên của đội ngũ eJOY sẽ sớm liên hệ với bạn để hướng dẫn quy trình giới thiệu và giải đáp mọi thắc mắc.\n\n` +
            `Chúng tôi rất hào hứng được đồng hành cùng bạn.\n\n` +
            `Chúc bạn học thật vui và hiệu quả!\n` +
            `Đội ngũ eJOY`,
        htmlBody: (name, link) => `<p>Chào ${name},</p>` +
            `<p>Chúc mừng bạn đã ưu tiên sự phát triển bản thân! Cam kết học tập của bạn là bước đầu tiên hướng tới thành công trong tương lai.</p>` +
            `<h3>Kế hoạch cá nhân hóa của bạn</h3>` +
            `<p>Dựa trên câu trả lời của bạn, đây là lộ trình học tập chúng tôi đã xây dựng cho bạn:</p>` +
            `<p><strong><a href="${link}">Link Google Doc: Kế hoạch học tập của bạn</a></strong></p>` +
            `<h3>Bước tiếp theo là gì?</h3>` +
            `<p>Để giúp bạn khởi đầu thuận lợi, <strong>một thành viên của đội ngũ eJOY sẽ sớm liên hệ với bạn</strong> để hướng dẫn quy trình giới thiệu và giải đáp mọi thắc mắc.</p>` +
            `<p>Chúng tôi rất hào hứng được đồng hành cùng bạn.</p>` +
            `<p><strong>Chúc bạn học thật vui và hiệu quả!</strong><br>` +
            `<em>Đội ngũ eJOY</em></p>`
    },
    es: {
        subject: "¡Tu plan de aprendizaje de inglés personalizado está listo!",
        textBody: (name, link) => `Hola ${name},\n\n` +
            `¡Felicitaciones por priorizar tu crecimiento personal! Tu compromiso con el aprendizaje es el primer paso hacia el éxito futuro.\n\n` +
            `Tu plan personalizado\n` +
            `Basado en tus respuestas, aquí tienes el plan de estudio que hemos elaborado para ti:\n` +
            `Enlace a Google Doc: Tu plan de aprendizaje: ${link}\n\n` +
            `¿Qué sigue?\n` +
            `Para ayudarte a comenzar con fuerza, un miembro del equipo de eJOY te contactará en breve para guiarte a través del proceso de incorporación y responder cualquier pregunta.\n\n` +
            `Estamos emocionados de apoyar tu viaje.\n\n` +
            `¡Feliz aprendizaje!\n` +
            `El equipo de eJOY`,
        htmlBody: (name, link) => `<p>Hola ${name},</p>` +
            `<p>¡Felicitaciones por priorizar tu crecimiento personal! Tu compromiso con el aprendizaje es el primer paso hacia el éxito futuro.</p>` +
            `<h3>Tu plan personalizado</h3>` +
            `<p>Basado en tus respuestas, aquí tienes el plan de estudio que hemos elaborado para ti:</p>` +
            `<p><strong><a href="${link}">Enlace a Google Doc: Tu plan de aprendizaje</a></strong></p>` +
            `<h3>¿Qué sigue?</h3>` +
            `<p>Para ayudarte a comenzar con fuerza, <strong>un miembro del equipo de eJOY te contactará en breve</strong> para guiarte a través del proceso de incorporación y responder cualquier pregunta.</p>` +
            `<p>Estamos emocionados de apoyar tu viaje.</p>` +
            `<p><strong>¡Feliz aprendizaje!</strong><br>` +
            `<em>El equipo de eJOY</em></p>`
    }
};

/**
 * Handle GET Requests (Web App)
 * Parameters: name, email, planId, nativeLanguage, templateId (optional)
 */
function doGet(e) {
    console.log("--- START: doGet ---");

    try {
        // Validation for Manual Runs (Debugging)
        if (!e || !e.parameter) {
            return ContentService.createTextOutput(JSON.stringify({
                status: "error",
                message: "No parameters found. Are you running this manually? Use testDoGet() for debugging."
            })).setMimeType(ContentService.MimeType.JSON);
        }

        const params = e.parameter;
        const userName = params.name || "User";
        const userEmail = params.email;
        const planId = params.planId;
        const nativeLanguage = params.nativeLanguage || "en";
        const templateId = params.templateId || CONFIG.TEMPLATE_ID;
        const requiredHours = params.requiredHours || "";

        // New Parameters for Document Replacement
        const currentLevel = params.currentLevel || "";
        const targetLevel = params.targetLevel || "";
        const targetDate = params.targetDate || "";

        // Validation
        if (!userEmail) {
            return ContentService.createTextOutput(JSON.stringify({
                status: "error",
                message: "Email is required"
            })).setMimeType(ContentService.MimeType.JSON);
        }

        // 1. Get Template File
        let templateFile;
        try {
            templateFile = DriveApp.getFileById(templateId);
        } catch (err) {
            console.error(`Error accessing template ${templateId}: ${err.message}`);
            templateFile = DriveApp.getFileById(CONFIG.FALLBACK_TEMPLATE_ID);
        }

        // 2. Resolve Plan Title & Filename
        const planTitle = (planId && PLAN_TITLES[planId]) ? PLAN_TITLES[planId] : "Personalized Learning Plan";
        const today = new Date().toISOString().split('T')[0];
        const newFileName = `${userName} - ${planTitle} - ${today}`;

        // 3. Duplicate Template
        const targetFolder = DriveApp.getFolderById(CONFIG.FOLDER_ID);
        const newFile = templateFile.makeCopy(newFileName, targetFolder);

        // 4. Perform Replacements (Simple version - Frontend handles logic, Doc handles display)
        // Note: If you have placeholders like {{Name}} in the doc, do them here.
        // For now, we assume the doc content is static or pre-formatted, 
        // as the requirement focus is on "Same Link in Email and Form".
        const newDoc = DocumentApp.openById(newFile.getId());
        const body = newDoc.getBody();

        // Basic Replacements if they exist in your template
        body.replaceText("{{Name}}", userName);
        body.replaceText("{{Date}}", today);
        body.replaceText("{{PlanTitle}}", planTitle);
        body.replaceText("{{requiredHours}}", requiredHours + "h"); // Add 'h' suffix if needed
        body.replaceText("{{TotalHours}}", requiredHours + "h"); // Handle legacy tag

        // Replaces additional tags
        body.replaceText("{{CurrentLevel}}", currentLevel);
        body.replaceText("{{DesiredLevel}}", targetLevel);
        body.replaceText("{{TargetDate}}", targetDate);

        // Add more replacements if your template uses them

        newDoc.saveAndClose();

        // 5. Share
        newFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        // Try adding editor if Google account, but suppress error if not
        try { newFile.addEditor(userEmail); } catch (e) { }

        const docUrl = newFile.getUrl();

        // 6. Send Email
        const langCode = String(nativeLanguage).toLowerCase().substr(0, 2); // en, vi, es
        const template = EMAIL_TEMPLATES[langCode] || EMAIL_TEMPLATES['en'];

        const displayName = userName || (langCode === 'vi' ? 'bạn' : (langCode === 'es' ? 'usuario' : 'there'));
        const emailSubject = template.subject;
        const textBody = template.textBody(displayName, docUrl);
        const htmlBody = template.htmlBody(displayName, docUrl);

        GmailApp.sendEmail(userEmail, emailSubject, textBody, {
            htmlBody: htmlBody,
            name: "Diep Bui, eJOY Learning"
        });

        // 7. Return Result
        return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            url: docUrl,
            message: "Plan generated and email sent."
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        console.error("FATAL ERROR: " + error.toString());
        return ContentService.createTextOutput(JSON.stringify({
            status: "error",
            message: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * TEST FUNCTION: Run this manually in the Editor to test the script
 * Mimics a request from the frontend
 */
function testDoGet() {
    const mockAndEvent = {
        parameter: {
            name: "Test User",
            email: "diepvic@gmail.com", //  EMAIL FOR TESTING
            planId: "5",
            nativeLanguage: "vi",
            templateId: "1BaPRUBfuRnlj8jP6rxprpEgGzaah1oTULNr2giXNxJ8", // Example Template ID
            requiredHours: "100"
        }
    };

    console.log("Running Test...");
    const result = doGet(mockAndEvent);
    console.log("Result content:", result.getContent());
}
