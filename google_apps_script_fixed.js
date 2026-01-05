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
    FOLDER_ID: "1S-p6I2i95QvVewCqC-V2_OqOX20Vcy-y", // Folder to save generated plans
    TEMPLATE_ID: "1BaPRUBfuRnlj8jP6rxprpEgGzaah1oTULNr2giXNxJ8", // Main Template
    FALLBACK_TEMPLATE_ID: "1BaPRUBfuRnlj8jP6rxprpEgGzaah1oTULNr2giXNxJ8" // Fallback
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
        subject: "Your Personalized English Learning Plan is Ready! \uD83D\uDE80",
        body: (name, link) => `Hi ${name},\n\n` +
            `Congratulations on prioritizing your personal growth! \uD83C\uDF1F Your commitment to learning is the first step toward future success.\n\n` +
            `### \uD83D\uDCD8 Your Personalized Plan\n` +
            `Based on your responses, here is the study plan we've crafted for you:\n` +
            `**[Link to Google Doc: Your Learning Plan](${link})**\n\n` +
            `### \uD83E\uDD1D What's Next?\n` +
            `To help you start strong, **an eJOY team member will contact you shortly** to guide you through the onboarding process and answer any questions.\n\n` +
            `We're excited to support your journey.\n\n` +
            `**Happy Learning!** \uD83C\uDF88\n` +
            `*The eJOY Team*`
    },
    vi: {
        subject: "Kế hoạch học tiếng Anh cá nhân hóa của bạn đã sẵn sàng! \uD83D\uDE80",
        body: (name, link) => `Chào ${name},\n\n` +
            `Chúc mừng bạn đã ưu tiên sự phát triển bản thân! \uD83C\uDF1F Cam kết học tập của bạn là bước đầu tiên hướng tới thành công trong tương lai.\n\n` +
            `### \uD83D\uDCD8 Kế hoạch cá nhân hóa của bạn\n` +
            `Dựa trên câu trả lời của bạn, đây là lộ trình học tập chúng tôi đã xây dựng cho bạn:\n` +
            `**[Link Google Doc: Kế hoạch học tập của bạn](${link})**\n\n` +
            `### \uD83E\uDD1D Bước tiếp theo là gì?\n` +
            `Để giúp bạn khởi đầu thuận lợi, **một thành viên của đội ngũ eJOY sẽ sớm liên hệ với bạn** để hướng dẫn quy trình giới thiệu và giải đáp mọi thắc mắc.\n\n` +
            `Chúng tôi rất hào hứng được đồng hành cùng bạn.\n\n` +
            `**Chúc bạn học tốt!** \uD83C\uDF88\n` +
            `*Đội ngũ eJOY*`
    },
    es: {
        subject: "¡Tu plan de aprendizaje de inglés personalizado está listo! \uD83D\uDE80",
        body: (name, link) => `Hola ${name},\n\n` +
            `¡Felicitaciones por priorizar tu crecimiento personal! \uD83C\uDF1F Tu compromiso con el aprendizaje es el primer paso hacia el éxito futuro.\n\n` +
            `### \uD83D\uDCD8 Tu plan personalizado\n` +
            `Basado en tus respuestas, aquí tienes el plan de estudio que hemos elaborado para ti:\n` +
            `**[Enlace a Google Doc: Tu plan de aprendizaje](${link})**\n\n` +
            `### \uD83E\uDD1D ¿Qué sigue?\n` +
            `Para ayudarte a comenzar con fuerza, **un miembro del equipo de eJOY te contactará en breve** para guiarte a través del proceso de incorporación y responder cualquier pregunta.\n\n` +
            `Estamos emocionados de apoyar tu viaje.\n\n` +
            `**¡Feliz aprendizaje!** \uD83C\uDF88\n` +
            `*El equipo de eJOY*`
    }
};

/**
 * Handle GET Requests (Web App)
 * Parameters: name, email, planId, nativeLanguage, templateId (optional)
 */
function doGet(e) {
    console.log("--- START: doGet ---");

    try {
        const params = e.parameter;
        const userName = params.name || "User";
        const userEmail = params.email;
        const planId = params.planId;
        const nativeLanguage = params.nativeLanguage || "en";
        const templateId = params.templateId || CONFIG.TEMPLATE_ID;
        const requiredHours = params.requiredHours || "";

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
        const emailBody = template.body(displayName, docUrl);

        GmailApp.sendEmail(userEmail, emailSubject, emailBody);

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
