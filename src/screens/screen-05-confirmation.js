/**
 * SCREEN 05: CONFIRMATION
 * Shows confirmation message after email submission
 */

function renderConfirmation() {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const isCustomPlan = userData.isCustomPlan || false;

  // Use appropriate content based on custom plan status
  const content = isCustomPlan ? translations.customEnd : translations.confirmation;

  const app = document.getElementById('app');

  if (isCustomPlan) {
    // End flow here for custom plans
    app.innerHTML = `
      <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
          <div class="mb-6 text-6xl">🎉</div>
          <h1 class="text-3xl font-bold text-gray-800 mb-4">${Utils.t(content.title, lang)}</h1>
          <p class="text-gray-600 mb-4">${Utils.t(content.message, lang)}</p>
          <p class="text-sm text-gray-500">${Utils.t(content.note, lang)}</p>
        </div>
      </div>
    `;
  } else {
    // Standard flow - continue to commitment
    app.innerHTML = `
      <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
          <div class="mb-6 text-6xl">📧</div>
          <h1 class="text-3xl font-bold text-gray-800 mb-4">${Utils.t(content.title, lang)}</h1>
          <p class="text-gray-600 mb-4">${Utils.t(content.message, lang)}</p>
          <p class="text-lg font-medium text-gray-700 mb-8">${Utils.t(content.subtitle, lang)}</p>
          <button 
            onclick="navigateTo('screen-06')" 
            class="w-full bg-primary text-white rounded-xl py-4 px-6 text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
            ${Utils.t(content.button, lang)}
          </button>
        </div>
      </div>
    `;
  }
}
