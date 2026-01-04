/**
 * SCREEN 01: LANGUAGE SELECTION
 * First screen - allows user to select their native language
 */

function renderLanguageSelection() {
  const userData = Storage.getUserData();
  const currentLang = userData.language || CONFIG.app.defaultLanguage;
  const content = translations.languageSelection;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      <!-- Header -->
      <div class="flex w-full items-center justify-center pt-8 pb-1">
        <h1 class="font-display text-2xl font-bold tracking-tight text-[#1da1f2]">eJOY English</h1>
      </div>
      
      <!-- Progress Bar -->
      <div class="flex items-center justify-between px-4 py-2">
        <button class="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" onclick="window.history.back()">
          <span class="material-symbols-outlined text-[#111418] dark:text-white">arrow_back</span>
        </button>
        <div class="flex flex-row items-center justify-center gap-2">
          <div class="h-2 w-8 rounded-full bg-primary"></div>
          <div class="h-2 w-2 rounded-full bg-[#dbe0e6] dark:bg-gray-700"></div>
          <div class="h-2 w-2 rounded-full bg-[#dbe0e6] dark:bg-gray-700"></div>
          <div class="h-2 w-2 rounded-full bg-[#dbe0e6] dark:bg-gray-700"></div>
          <div class="h-2 w-2 rounded-full bg-[#dbe0e6] dark:bg-gray-700"></div>
        </div>
        <button class="text-sm font-medium text-[#111418] dark:text-white opacity-60 hover:opacity-100 px-2" onclick="handleLanguageSelection('other')">
          ${Utils.t(content.skip, currentLang)}
        </button>
      </div>
      
      <!-- Main Content -->
      <div class="flex flex-col flex-1 px-5 pt-4 pb-20 overflow-y-auto">
        <h1 class="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left mb-3">
          ${Utils.t(content.title, currentLang)}
        </h1>
        <p class="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal mb-8 opacity-80">
          ${Utils.t(content.description, currentLang)}
        </p>
        
        <!-- Language Options -->
        <div class="flex flex-col gap-4">
          <!-- Vietnamese -->
          <div class="relative group cursor-pointer" onclick="selectLanguageOption('vietnamese')">
            <div class="flex items-center justify-between gap-4 rounded-xl border-2 ${userData.nativeLanguage === 'vietnamese' ? 'border-primary bg-primary/5' : 'border-transparent bg-white dark:bg-[#1a2632]'} p-4 shadow-sm transition-all duration-200" id="lang-vietnamese">
              <div class="flex items-center gap-4">
                <div class="h-10 w-14 rounded bg-center bg-cover shadow-sm flex-shrink-0" style='background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 20\'%3E%3Crect fill=\'%23da251d\' width=\'30\' height=\'20\'/%3E%3Cpolygon fill=\'%23ff0\' points=\'15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85\'/%3E%3C/svg%3E");'></div>
                <p class="text-[#111418] dark:text-white text-lg font-bold leading-tight">${Utils.t(content.options.vietnamese, currentLang)}</p>
              </div>
              <span class="material-symbols-outlined text-primary text-2xl font-bold ${userData.nativeLanguage === 'vietnamese' ? '' : 'hidden'}" id="check-vietnamese">check_circle</span>
              <div class="h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-600 ${userData.nativeLanguage === 'vietnamese' ? 'hidden' : ''}" id="circle-vietnamese"></div>
            </div>
          </div>
          
          <!-- Spanish -->
          <div class="relative group cursor-pointer" onclick="selectLanguageOption('spanish')">
            <div class="flex items-center justify-between gap-4 rounded-xl border-2 ${userData.nativeLanguage === 'spanish' ? 'border-primary bg-primary/5' : 'border-transparent bg-white dark:bg-[#1a2632]'} p-4 shadow-sm transition-all duration-200" id="lang-spanish">
              <div class="flex items-center gap-4">
                <div class="h-10 w-14 rounded bg-center bg-cover shadow-sm flex-shrink-0" style='background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 750 500\'%3E%3Crect fill=\'%23c60b1e\' width=\'750\' height=\'500\'/%3E%3Crect fill=\'%23ffc400\' y=\'125\' width=\'750\' height=\'250\'/%3E%3C/svg%3E");'></div>
                <p class="text-[#111418] dark:text-white text-lg font-medium leading-tight">${Utils.t(content.options.spanish, currentLang)}</p>
              </div>
              <span class="material-symbols-outlined text-primary text-2xl font-bold ${userData.nativeLanguage === 'spanish' ? '' : 'hidden'}" id="check-spanish">check_circle</span>
              <div class="h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-600 ${userData.nativeLanguage === 'spanish' ? 'hidden' : ''}" id="circle-spanish"></div>
            </div>
          </div>
          
          <!-- Other -->
          <div class="relative group cursor-pointer" onclick="selectLanguageOption('other')">
            <div class="flex items-center justify-between gap-4 rounded-xl border-2 ${userData.nativeLanguage === 'other' ? 'border-primary bg-primary/5' : 'border-transparent bg-white dark:bg-[#1a2632]'} p-4 shadow-sm transition-all duration-200" id="lang-other">
              <div class="flex items-center gap-4">
                <div class="h-10 w-14 rounded bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <span class="material-symbols-outlined text-[28px]">public</span>
                </div>
                <p class="text-[#111418] dark:text-white text-lg font-medium leading-tight">${Utils.t(content.options.other, currentLang)}</p>
              </div>
              <span class="material-symbols-outlined text-primary text-2xl font-bold ${userData.nativeLanguage === 'other' ? '' : 'hidden'}" id="check-other">check_circle</span>
              <div class="h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-600 ${userData.nativeLanguage === 'other' ? 'hidden' : ''}" id="circle-other"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Continue Button -->
      <div class="w-full bg-background-light dark:bg-background-dark p-4 border-t border-gray-100 dark:border-gray-800 sticky bottom-0 z-10">
        <button 
          onclick="proceedFromLanguageSelection()" 
          class="w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-blue-600 transition-colors focus:ring-4 focus:ring-primary/20">
          ${Utils.t(content.continue, currentLang)}
        </button>
      </div>
    </div>
  `;
}

// Global functions for language selection
let selectedNativeLanguage = Storage.getUserData().nativeLanguage || 'other';

window.selectLanguageOption = function (option) {
  selectedNativeLanguage = option;

  // Update visual state
  ['vietnamese', 'spanish', 'other'].forEach(lang => {
    const card = document.getElementById(`lang-${lang}`);
    const check = document.getElementById(`check-${lang}`);
    const circle = document.getElementById(`circle-${lang}`);

    if (lang === option) {
      card.className = 'flex items-center justify-between gap-4 rounded-xl border-2 border-primary bg-primary/5 p-4 shadow-sm transition-all duration-200';
      check.classList.remove('hidden');
      circle.classList.add('hidden');
    } else {
      card.className = 'flex items-center justify-between gap-4 rounded-xl border-2 border-transparent bg-white dark:bg-[#1a2632] p-4 shadow-sm transition-all duration-200';
      check.classList.add('hidden');
      circle.classList.remove('hidden');
    }
  });
};

window.handleLanguageSelection = function (selection) {
  let appLanguage;

  switch (selection) {
    case 'vietnamese':
      appLanguage = 'vi';
      break;
    case 'spanish':
      appLanguage = 'es';
      break;
    case 'other':
    default:
      appLanguage = 'en';
      break;
  }

  // Update storage
  Storage.updateUserData({
    nativeLanguage: selection,
    language: appLanguage
  });

  window.currentLanguage = appLanguage;

  // Navigate to questionnaire
  navigateTo('screen-02');
};

window.proceedFromLanguageSelection = function () {
  handleLanguageSelection(selectedNativeLanguage);
};
