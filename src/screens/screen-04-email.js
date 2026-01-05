/**
 * SCREEN 04: EMAIL SUBMISSION
 * Collects contact information and submits to Google Forms
 */

function renderEmailSubmission() {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const isCustomPlan = userData.isCustomPlan || false;
  const content = translations.dataSubmission;

  const headerTitle = isCustomPlan ?
    Utils.t(content.waitingEmail.title, lang) :
    Utils.t(content.title, lang);
  const headerSubtitle = isCustomPlan ?
    Utils.t(content.waitingEmail.message, lang) :
    Utils.t(content.subtitle, lang);

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">${headerTitle}</h1>
          <p class="text-gray-600">${headerSubtitle}</p>
        </div>
        
        <!-- Form -->
        <form id="emailForm" class="space-y-6" onsubmit="handleEmailFormSubmit(event)">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              ${Utils.t(content.fields.name.label, lang)} *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="${Utils.t(content.fields.name.placeholder, lang)}"
            />
          </div>
          
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              ${Utils.t(content.fields.email.label, lang)} *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="${Utils.t(content.fields.email.placeholder, lang)}"
            />
          </div>
          
          <!-- Phone Field -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              ${Utils.t(content.fields.phone.label, lang)}
              <span class="text-gray-500 font-normal">${Utils.t(content.fields.phone.note, lang)}</span>
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="${Utils.t(content.fields.phone.placeholder, lang)}"
            />
          </div>
          
          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-primary text-white rounded-xl py-4 font-semibold hover:scale-105 transition-transform shadow-lg">
            ${Utils.t(content.button, lang)}
          </button>
        </form>
        
        <!-- Error Message Container -->
        <div id="errorMessage" class="mt-4 text-red-600 text-sm text-center hidden"></div>
      </div>
    </div>
  `;
}

window.handleEmailFormSubmit = async function (event) {
  event.preventDefault();

  const userData = Storage.getUserData();
  const lang = userData.language || 'en';

  // Collect contact info
  const contactData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone')?.value.trim() || ''
  };

  // Validate
  const validation = UserDataModel.validateContact(contactData);
  if (!validation.valid) {
    showEmailError(validation.errors.map(e => e.message).join('\n'));
    return;
  }

  // Show loading
  showLoading(lang === 'vi' ? 'Đang gửi...' : lang === 'es' ? 'Enviando...' : 'Submitting...');

  // Calculate plan document link based on user's plan and language
  const planId = userData.selectedPlanId || 'no-match';
  let planDocLink = '';
  let firstLessonLink = '';

  // Better language detection for Doc selection
  // If UI language is English but Native is Vietnamese, prefer Vietnamese doc
  const nativeLang = (contactData.nativeLanguage || userData.nativeLanguage || '').toLowerCase();
  const isVietnamese = nativeLang.includes('vietnamese') || nativeLang.includes('tiếng việt') || nativeLang === 'vi' || lang === 'vi' || lang === 'vn';
  const docLang = isVietnamese ? 'vi' : (lang || 'en');

  if (planId !== 'no-match' && PLANS && PLANS[planId]) {
    const plan = PLANS[planId];
    // Get the appropriate doc ID based on language
    const docId = (docLang === 'vi') ? plan.doc_vn : plan.doc_en;
    if (docId) {
      planDocLink = `https://docs.google.com/document/d/${docId}/edit`;
    }
  }

  // Calculate first lesson link based on video habit and plan
  const formData = userData.formData || {};
  const hasVideoHabit =
    (formData.habits || []).some(h => h.includes('YouTube') || h.includes('movies')) ||
    (formData.methods || []).some(m => m.includes('YouTube') || m.includes('movies'));
  const isCommunicationIntermediate = planId === 2 || planId === 4;

  if (hasVideoHabit && isCommunicationIntermediate) {
    firstLessonLink = 'https://ejo.bz/first-lesson-2';
  } else {
    firstLessonLink = 'https://ejo.bz/first-lesson-1';
  }

  // Calculate Feasibility / Required Hours for Backend
  const feasibility = Utils.calculateFeasibility(formData);
  const requiredHours = Math.round(feasibility.details.requiredHours || 0);

  // 1. Call Apps Script to Generate Plan and Email
  // This ensures the link in the form matches the email link
  let generatedDocLink = null;

  if (CONFIG.googleForm.scriptUrl) {
    showLoading(lang === 'vi' ? 'Đang tạo kế hoạch...' : lang === 'es' ? 'Creando plan...' : 'Creating plan...');
    generatedDocLink = await GoogleForms.generatePersonalPlan({
      name: contactData.name,
      email: contactData.email,
      planId: planId,
      nativeLanguage: contactData.nativeLanguage || userData.nativeLanguage
    });
  }

  // Fallback if script fails or not configured (use template link)
  // Note: If usage of script is mandatory, we might want to show error instead.
  // For now, consistent with legacy behavior, we use the template link if generation fails.
  const finalPlanDocLink = generatedDocLink || planDocLink;

  // Prepare complete submission data
  const submissionData = {
    ...userData.formData,
    ...contactData,
    nativeLanguage: userData.nativeLanguage,
    planId: planId,
    planDocLink: finalPlanDocLink, // Use the generated link!
    firstLessonLink: firstLessonLink,
    dailyTime: `${userData.formData.dailyTime} (Required: ${requiredHours}h)`,
    requiredHours: requiredHours
  };

  // Submit to Google Forms
  showLoading(lang === 'vi' ? 'Đang gửi...' : lang === 'es' ? 'Enviando...' : 'Submitting...');
  const success = await GoogleForms.submit(submissionData);

  if (success) {
    // Save contact data
    Storage.updateUserData({ contactData });

    // Navigate to confirmation
    navigateTo('screen-05');
  } else {
    showEmailError(lang === 'vi' ? 'Có lỗi xảy ra. Vui lòng thử lại.' :
      lang === 'es' ? 'Ocurrió un error. Por favor, inténtalo de nuevo.' :
        'An error occurred. Please try again.');
  }
};

function showEmailError(message) {
  const errorDiv = document.getElementById('errorMessage');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');

    setTimeout(() => {
      errorDiv.classList.add('hidden');
    }, 5000);
  }
}
