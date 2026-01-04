/**
 * SCREEN 07: FIRST LESSON
 * Shows first lesson (YouTube video or AI roleplay based on user profile)
 */

function renderFirstLesson() {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const formData = userData.formData || {};

  // Determine lesson type
  const hasVideoHabit =
    (formData.habits || []).some(h => h.includes('YouTube') || h.includes('movies')) ||
    (formData.methods || []).some(m => m.includes('YouTube') || m.includes('movies'));

  const planId = userData.selectedPlanId;
  // Only Plan 2 and Plan 4 are Communication Intermediate (per spec)
  const isCommunicationIntermediate = planId === 2 || planId === 4;

  if (hasVideoHabit && isCommunicationIntermediate) {
    renderAIRoleplay(lang);
  } else {
    renderYouTubeLesson(lang);
  }
}

function renderYouTubeLesson(lang) {
  const content = translations.youtubeLesson;
  const bannerContent = translations.contactBanner;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Contact Banner -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 class="text-lg font-bold text-gray-800 mb-2">${Utils.t(bannerContent.title, lang)}</h3>
          <p class="text-gray-600">${Utils.t(bannerContent.message, lang)}</p>
        </div>
        
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">${Utils.t(content.title, lang)}</h1>
          <p class="text-lg text-gray-600">${Utils.t(content.subtitle, lang)}</p>
        </div>
        
        <!-- Roadmap -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
          <p class="text-sm font-bold text-primary mb-4">${Utils.t(content.roadmap.label, lang)} 1</p>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-primary"></div>
              <span class="font-semibold">${Utils.t(content.roadmap.day1, lang)}</span>
            </div>
            <div class="flex items-center gap-3 opacity-50">
              <div class="w-3 h-3 rounded-full bg-gray-300"></div>
              <span>${Utils.t(content.roadmap.day2, lang)}</span>
            </div>
            <div class="flex items-center gap-3 opacity-50">
              <div class="w-3 h-3 rounded-full bg-gray-300"></div>
              <span>${Utils.t(content.roadmap.day3, lang)}</span>
            </div>
          </div>
        </div>
        
        <!-- Lesson Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
          <span class="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            ${Utils.t(content.lesson.badge, lang)}
          </span>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">${Utils.t(content.lesson.title, lang)}</h2>
          <p class="text-gray-600 mb-4">${Utils.t(content.lesson.description, lang)}</p>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="flex items-center gap-1 text-sm text-gray-600">
              <span class="material-symbols-outlined text-lg">schedule</span>
              ${Utils.t(content.lesson.duration, lang)}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              ${Utils.t(content.lesson.skills.vocabulary, lang)}
            </span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              ${Utils.t(content.lesson.skills.listening, lang)}
            </span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              ${Utils.t(content.lesson.skills.reading, lang)}
            </span>
          </div>
          
          <button onclick="openFirstLesson()" class="w-full bg-primary text-white rounded-xl py-4 font-bold hover:scale-105 transition-transform shadow-lg">
            ${Utils.t(content.button, lang)}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderAIRoleplay(lang) {
  const content = translations.aiRoleplay;
  const bannerContent = translations.contactBanner;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Contact Banner -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 class="text-lg font-bold text-gray-800 mb-2">${Utils.t(bannerContent.title, lang)}</h3>
          <p class="text-gray-600">${Utils.t(bannerContent.message, lang)}</p>
        </div>
        
        <!-- Header -->
        <div class="text-center mb-8">
          <span class="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
            ${Utils.t(content.badge, lang)}
          </span>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">${Utils.t(content.title, lang)}</h1>
          <p class="text-lg text-gray-600">${Utils.t(content.subtitle, lang)}</p>
        </div>
        
        <!-- Scenario Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
              ${Utils.t(content.tag.recommended, lang)}
            </span>
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
              ${Utils.t(content.tag.speaking, lang)}
            </span>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            ${Utils.t(content.scenarios.coffeeShop.title, lang)}
          </h2>
          <p class="text-gray-600 mb-4">
            ${Utils.t(content.scenarios.coffeeShop.description, lang)}
          </p>
          <div class="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined">mic</span>
              ${Utils.t(content.labels.speaking, lang)}
            </span>
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined">feedback</span>
              ${Utils.t(content.labels.feedback, lang)}
            </span>
            <span>5 ${Utils.t(content.labels.duration, lang)}</span>
          </div>
          <button onclick="openFirstLesson()" class="w-full bg-primary text-white rounded-xl py-4 font-bold hover:scale-105 transition-transform shadow-lg">
            ${Utils.t(content.button, lang)}
          </button>
        </div>
        
        <!-- Other Scenarios -->
        <div class="grid gap-4 md:grid-cols-2">
          <div class="bg-white rounded-xl shadow p-6 opacity-50">
            <h3 class="font-bold text-gray-800 mb-2">${Utils.t(content.scenarios.jobInterview.title, lang)}</h3>
            <span class="text-sm text-gray-500">${Utils.t(content.labels.locked, lang)}</span>
          </div>
          <div class="bg-white rounded-xl shadow p-6 opacity-50">
            <h3 class="font-bold text-gray-800 mb-2">${Utils.t(content.scenarios.hotelCheckin.title, lang)}</h3>
            <span class="text-sm text-gray-500">${Utils.t(content.labels.locked, lang)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Open the first lesson based on lesson type
 * Video habit + Plan 2 or 4 -> https://ejo.bz/first-lesson-2
 * All others -> https://ejo.bz/first-lesson-1
 */
window.openFirstLesson = function () {
  const userData = Storage.getUserData();
  const formData = userData.formData || {};

  // Determine lesson type (same logic as renderFirstLesson)
  const hasVideoHabit =
    (formData.habits || []).some(h => h.includes('YouTube') || h.includes('movies')) ||
    (formData.methods || []).some(m => m.includes('YouTube') || m.includes('movies'));

  const planId = userData.selectedPlanId;
  // Only Plan 2 and Plan 4 are Communication Intermediate (per spec)
  const isCommunicationIntermediate = planId === 2 || planId === 4;

  // Determine the lesson URL
  let lessonUrl;
  if (hasVideoHabit && isCommunicationIntermediate) {
    // Scenario 1: Video Lesson for Communication Intermediate users
    lessonUrl = 'https://ejo.bz/first-lesson-2';
  } else {
    // Scenario 2: All other users (including video habit but other plans)
    lessonUrl = 'https://ejo.bz/first-lesson-1';
  }

  // Log for debugging
  console.log('Redirecting to first lesson:', lessonUrl);

  // Redirect to the lesson URL
  window.location.href = lessonUrl;
};
