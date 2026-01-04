/**
 * SCREEN 03: STUDY PLAN
 * Displays personalized learning plan based on user profile
 */

function renderStudyPlan() {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const formData = userData.formData || {};
  const content = translations.studyPlan;

  // Determine persona
  const planId = determinePersona(formData);

  // Store plan ID
  Storage.updateUserData({ selectedPlanId: planId, isCustomPlan: planId === null });

  if (planId === null) {
    renderNoMatchScreen();
    return;
  }

  // Get plan data
  const plan = PLANS[planId];
  const docId = (lang === 'vi') ? plan.doc_vn : plan.doc_en;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">${Utils.t(content.header.title, lang)}</h1>
          <p class="text-lg text-gray-600">${Utils.t(content.header.subtitle, lang)}</p>
        </div>
        
        <!-- Plan Card -->
        <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">${plan.title}</h2>
          
          <!-- Phases -->
          <div class="space-y-8">
            ${plan.phases.map((phase, index) => `
              <div class="border-l-4 border-primary pl-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">
                  ${Utils.t(content.phase, lang)} ${index + 1}: ${phase.name}
                </h3>
                <p class="text-sm text-gray-600 mb-3">${Utils.t(content.tasks, lang)}:</p>
                <ul class="space-y-2">
                  ${phase.tasks.map(task => `
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-gray-700">${task}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Action Button -->
        <div class="text-center">
          <button onclick="navigateTo('screen-04')" class="bg-primary text-white rounded-xl px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
            ${Utils.t(content.button, lang)}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderNoMatchScreen() {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const content = translations.studyPlan.noMatch;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        <div class="mb-6">
          <span class="material-symbols-outlined text-primary text-6xl">description</span>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">${Utils.t(content.title, lang)}</h2>
        <p class="text-gray-600 mb-8">${Utils.t(content.message, lang)}</p>
        <button onclick="navigateTo('screen-04')" class="w-full bg-primary text-white rounded-xl p-4 hover:scale-105 transition-transform">
          ${Utils.t(translations.studyPlan.button, lang)}
        </button>
      </div>
    </div>
  `;
}
