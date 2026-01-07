/**
 * SCREEN 02: QUESTIONNAIRE
 * 9-question form with feasibility calculation
 */

function renderQuestionnaire() {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const content = translations.questionnaire;

  // Pre-fill with existing data if available
  const formData = userData.formData || {};

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-xl bg-white">
      <!-- Header -->
      <div class="sticky top-0 z-10 flex items-center bg-white/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-slate-100">
        <button onclick="navigateTo('screen-01')" class="text-slate-900 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 class="text-[#1da1f2] text-2xl font-bold leading-tight tracking-tight flex-1 text-center pr-10">eJOY English</h2>
      </div>
      
      <!-- Progress -->
      <div class="px-6 py-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-medium text-slate-500">${Utils.t(content.progress.step, lang)}</span>
          <span class="text-xs font-bold text-primary">${Utils.t(content.progress.completed, lang)}</span>
        </div>
        <div class="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div class="h-full w-[30%] rounded-full bg-primary shadow-[0_0_10px_rgba(19,127,236,0.3)]"></div>
        </div>
      </div>
      
      <!-- Form -->
      <form id="questionnaireForm" class="flex-1 flex flex-col gap-8 p-4 pb-32">
        ${renderQuestion1(formData, content, lang)}
        ${renderQuestion2(formData, content, lang)}
        ${renderQuestion3(formData, content, lang)}
        ${renderQuestion4(formData, content, lang)}
        ${renderQuestion5(formData, content, lang)}
        ${renderQuestion6(formData, content, lang)}
        ${renderQuestion7(formData, content, lang)}
        ${renderQuestion8(formData, content, lang)}
        ${renderQuestion9(formData, content, lang)}
      </form>
      
      <!-- Submit Button -->
      <div class="fixed bottom-0 left-0 right-0 z-20 mx-auto max-w-md">
        <div class="h-12 w-full bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        <div class="bg-white p-4 pt-0 pb-6 border-t border-slate-100">
          <button type="button" onclick="submitQuestionnaire()" class="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform active:scale-[0.98] hover:bg-blue-600">
            ${Utils.t(content.submit, lang)}
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners
  setupQuestionnaireListeners();
}

function renderQuestion1(formData, content, lang) {
  const levels = ['a1', 'a2', 'b1', 'b2'];
  return `
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">school</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q1_level.label, lang)}</h2>
      </div>
      <div class="flex flex-col gap-3">
        ${levels.map(level => `
          <label class="group relative flex cursor-pointer items-center justify-between rounded-xl border ${formData.currentLevel === level.toUpperCase() ? 'border-2 border-primary bg-primary/5' : 'border-slate-200 bg-white'} p-4 transition-all hover:border-primary/50 hover:shadow-sm">
            <div class="flex items-center gap-3">
              <input class="peer h-5 w-5 border-2 border-slate-300 text-primary focus:ring-primary bg-white" name="currentLevel" type="radio" value="${level.toUpperCase()}" ${formData.currentLevel === level.toUpperCase() ? 'checked' : ''}/>
              <div class="flex flex-col">
                <span class="font-semibold text-slate-900 text-sm leading-snug">${Utils.t(content.questions.q1_level.options[level], lang)}</span>
              </div>
            </div>
          </label>
        `).join('')}
      </div>
      <div id="error-currentLevel" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function renderQuestion2(formData, content, lang) {
  const goals = ['communication', 'ielts', 'toeic'];
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">flag</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q2_goal.label, lang)}</h2>
      </div>
      <div class="grid grid-cols-2 gap-3">
        ${goals.map(goal => `
          <label class="cursor-pointer relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 ${formData.goal === goal.charAt(0).toUpperCase() + goal.slice(1) ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white'} p-4 text-center transition-all hover:border-primary/50 hover:shadow-sm">
            <input class="peer sr-only" name="goal" type="radio" value="${goal.charAt(0).toUpperCase() + goal.slice(1)}" ${formData.goal === goal.charAt(0).toUpperCase() + goal.slice(1) ? 'checked' : ''}/>
            <div class="h-10 w-10 rounded-full ${formData.goal === goal.charAt(0).toUpperCase() + goal.slice(1) ? 'bg-primary' : 'bg-slate-100'} flex items-center justify-center ${formData.goal === goal.charAt(0).toUpperCase() + goal.slice(1) ? 'text-white' : 'text-slate-500'} mb-1">
              <span class="material-symbols-outlined">${goal === 'communication' ? 'chat' : 'school'}</span>
            </div>
            <span class="text-sm font-semibold leading-tight ${formData.goal === goal.charAt(0).toUpperCase() + goal.slice(1) ? 'text-primary' : 'text-slate-700'}">${Utils.t(content.questions.q2_goal.options[goal], lang)}</span>
          </label>
        `).join('')}
      </div>
      <div id="error-goal" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function renderQuestion3(formData, content, lang) {
  const targets = ['b1', 'b2', 'c1', 'c2'];
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">track_changes</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q3_target_level.label, lang)}</h2>
      </div>
      <div class="flex flex-col gap-3">
        ${targets.map(level => `
          <label class="group relative flex cursor-pointer items-center justify-between rounded-xl border ${formData.targetLevel === level.toUpperCase() ? 'border-2 border-primary bg-primary/5' : 'border-slate-200 bg-white'} p-4 transition-all">
            <div class="flex items-center gap-3">
              <input class="peer h-5 w-5 border-2 border-slate-300 text-primary focus:ring-primary bg-white" name="targetLevel" type="radio" value="${level.toUpperCase()}" ${formData.targetLevel === level.toUpperCase() ? 'checked' : ''}/>
              <span class="font-semibold text-slate-900 text-sm">${Utils.t(content.questions.q3_target_level.options[level], lang)}</span>
            </div>
          </label>
        `).join('')}
      </div>
      <div id="error-targetLevel" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function renderQuestion4(formData, content, lang) {
  const goals = ['everyday', 'job', 'scholarship', 'graduation', 'kids', 'business', 'immigrants', 'other'];
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">target</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q4_why.label, lang)}</h2>
      </div>
      <div class="flex flex-wrap gap-2">
        ${goals.map(goal => `
          <label class="group cursor-pointer">
            <input class="peer sr-only" name="why" type="radio" value="${Utils.t(content.questions.q4_why.options[goal], lang)}" ${formData.why === Utils.t(content.questions.q4_why.options[goal], lang) ? 'checked' : ''}/>
            <span class="inline-block rounded-full border ${formData.why === Utils.t(content.questions.q4_why.options[goal], lang) ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white text-slate-700'} px-4 py-2 text-sm font-medium transition-all hover:border-primary/50 hover:shadow-sm peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white">${Utils.t(content.questions.q4_why.options[goal], lang)}</span>
          </label>
        `).join('')}
      </div>
      <div id="error-why" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function renderQuestion5(formData, content, lang) {
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">schedule</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q5_target_date.timelineTitle, lang)}</h2>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">${Utils.t(content.questions.q5_target_date.label, lang)}</label>
        <div class="relative">
          <input type="text" id="targetDate" name="targetDate" placeholder="${Utils.t(content.questions.q5_target_date.placeholder, lang)}" value="${formData.targetDate || ''}" class="w-full rounded-xl border-slate-200 bg-white py-3 pl-4 pr-10 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-primary cursor-text shadow-sm"/>
          <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">calendar_month</span>
        </div>
        <div id="targetDateError" class="text-xs font-medium mt-1"></div>
      </div>
    </div>
  `;
}

function renderQuestion6(formData, content, lang) {
  const dailyTime = formData.dailyTime || 0.75;
  return `
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-end">
        <label class="text-sm font-medium text-slate-700">${Utils.t(content.questions.q6_daily_time.label, lang)}</label>
        <span class="text-primary font-bold text-lg" id="dailyTimeDisplay">${dailyTime} ${Utils.t(content.questions.q6_daily_time.unit, lang)}</span>
      </div>
      <input type="range" id="dailyTime" name="dailyTime" min="0.25" max="5" step="0.25" value="${dailyTime}" class="w-full" oninput="document.getElementById('dailyTimeDisplay').textContent = this.value + ' ${Utils.t(content.questions.q6_daily_time.unit, lang)}'"/>
      <div class="flex justify-between text-xs text-slate-400 font-medium px-1">
        <span>0.25h</span>
        <span>5h</span>
      </div>
      <!-- Feasibility Feedback -->
      <div id="feasibility-feedback" class="transition-all duration-300 empty:hidden"></div>
    </div>
  `;
}

function renderQuestion7(formData, content, lang) {
  const devices = ['mobile', 'laptop'];
  const selected = formData.devices || [];
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">devices</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q7_devices.label, lang)}</h2>
      </div>
      <div class="flex flex-col gap-3">
        ${devices.map(device => {
    const deviceLabel = Utils.t(content.questions.q7_devices.options[device], lang);
    const isChecked = selected.includes(device);
    return `
            <label class="group relative flex cursor-pointer items-start justify-between rounded-xl border ${isChecked ? 'border-2 border-primary bg-primary/5' : 'border-slate-200 bg-white'} p-4 transition-all">
              <div class="flex items-start gap-3">
                <input class="peer mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-slate-300 text-primary focus:ring-primary bg-white" name="devices" type="checkbox" value="${device}" ${isChecked ? 'checked' : ''}/>
                <span class="font-semibold text-slate-900 text-sm leading-snug">${deviceLabel}</span>
              </div>
            </label>
          `;
  }).join('')}
      </div>
      <div id="error-devices" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function renderQuestion8(formData, content, lang) {
  const habits = ['read_native', 'read_english', 'watch_native', 'watch_english', 'rarely_communicate', 'regularly_communicate'];
  const selected = formData.habits || [];
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">local_activity</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q8_habits.label, lang)}</h2>
      </div>
      <div class="flex flex-col gap-3">
        ${habits.map(habit => {
    const habitLabel = Utils.t(content.questions.q8_habits.options[habit], lang);
    const isChecked = selected.includes(habitLabel);
    return `
            <label class="group relative flex cursor-pointer items-start justify-between rounded-xl border ${isChecked ? 'border-2 border-primary bg-primary/5' : 'border-slate-200 bg-white'} p-4 transition-all">
              <div class="flex items-start gap-3">
                <input class="peer mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-slate-300 text-primary focus:ring-primary bg-white" name="habits" type="checkbox" value="${habitLabel}" ${isChecked ? 'checked' : ''}/>
                <span class="font-semibold text-slate-900 text-sm leading-snug">${habitLabel}</span>
              </div>
            </label>
          `;
  }).join('')}
      </div>
      <div id="error-habits" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function renderQuestion9(formData, content, lang) {
  const methods = ['not_studying', 'watching', 'reading', 'center', 'textbooks', 'ai', 'tutor'];
  const selected = formData.methods || [];
  return `
    <hr class="border-slate-100"/>
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span class="material-symbols-outlined text-lg">psychology</span>
        </div>
        <h2 class="text-xl font-bold leading-tight pt-1 text-slate-900">${Utils.t(content.questions.q9_methods.label, lang)}</h2>
      </div>
      <div class="flex flex-col gap-3">
        ${methods.map(method => {
    const methodLabel = Utils.t(content.questions.q9_methods.options[method], lang);
    const isChecked = selected.includes(methodLabel);
    return `
            <label class="group relative flex cursor-pointer items-center justify-between rounded-xl border ${isChecked ? 'border-2 border-primary bg-primary/5' : 'border-slate-200 bg-white'} p-4 transition-all">
              <div class="flex items-center gap-3">
                <input class="peer h-5 w-5 rounded border-2 border-slate-300 text-primary focus:ring-primary bg-white" name="methods" type="checkbox" value="${methodLabel}" ${isChecked ? 'checked' : ''}/>
                <span class="font-semibold text-slate-900 text-sm">${methodLabel}</span>
              </div>
            </label>
          `;
  }).join('')}
      </div>
      <div id="error-methods" class="text-xs font-medium mt-1 text-red-500 hidden"></div>
    </div>
  `;
}

function setupQuestionnaireListeners() {
  // Auto-save and check feasibility on change
  const form = document.getElementById('questionnaireForm');
  if (form) {
    form.addEventListener('change', () => {
      const formData = collectFormData();
      Storage.updateUserData({ formData });
      checkFeasibilityInline(formData);
      updateQuestionnaireVisuals();
    });

    // Real-time check for slider
    const slider = document.getElementById('dailyTime');
    if (slider) {
      slider.addEventListener('input', () => {
        const formData = collectFormData();
        checkFeasibilityInline(formData);
      });
    }

    // Date validation
    const dateInput = document.getElementById('targetDate');
    if (dateInput) {
      dateInput.addEventListener('input', (e) => {
        const isValid = validateDateInput(e.target.value);
        if (isValid) {
          const formData = collectFormData();
          checkFeasibilityInline(formData);
        } else {
          // Clear feasibility feedback if date is invalid
          const feedbackEl = document.getElementById('feasibility-feedback');
          if (feedbackEl) feedbackEl.innerHTML = '';
        }
      });
    }

    // Initial check
    setTimeout(() => {
      const formData = collectFormData();
      checkFeasibilityInline(formData);
      // Also update visuals initially in case of re-mount
      updateQuestionnaireVisuals();
    }, 100);
  }
}

function validateDateInput(dateStr) {
  const errorEl = document.getElementById('targetDateError');
  const inputEl = document.getElementById('targetDate');

  if (!dateStr) {
    if (errorEl) errorEl.textContent = '';
    if (inputEl) inputEl.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    return false;
  }

  // Check format MM/YYYY
  const formatRegex = /^(0[1-9]|1[0-2])\/20[2-9][0-9]$/;
  if (!formatRegex.test(dateStr)) {
    if (errorEl) {
      const userData = Storage.getUserData();
      const lang = userData.language || 'en';
      const content = translations.questionnaire;
      errorEl.textContent = Utils.t(content.errorFormat, lang);
      errorEl.className = 'text-xs font-medium mt-1 text-red-500 fade-in';
    }
    if (inputEl) inputEl.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    return false;
  }

  // Check valid date (not past)
  const [month, year] = dateStr.split('/');
  const inputDate = new Date(parseInt(year), parseInt(month) - 1, 1);
  const today = new Date();
  // Reset today to start of month for fair comparison
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  if (inputDate < currentMonth) {
    if (errorEl) {
      const userData = Storage.getUserData();
      const lang = userData.language || 'en';
      const content = translations.questionnaire;
      errorEl.textContent = Utils.t(content.errorPast, lang);
      errorEl.className = 'text-xs font-medium mt-1 text-red-500 fade-in';
    }
    if (inputEl) inputEl.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    return false;
  }

  // Valid
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.className = 'text-xs font-medium mt-1 hidden';
  }
  if (inputEl) inputEl.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');

  return true;
}

function updateQuestionnaireVisuals() {
  // Update Q2 Goal (Objective) Visuals
  document.querySelectorAll('input[name="goal"]').forEach(input => {
    const label = input.closest('label');
    const iconDiv = label.querySelector('div');
    const textSpan = label.querySelector('span.text-sm');

    if (input.checked) {
      label.classList.remove('border-slate-200', 'bg-white');
      label.classList.add('border-primary', 'bg-primary/5');

      if (iconDiv) {
        iconDiv.classList.remove('bg-slate-100', 'text-slate-500');
        iconDiv.classList.add('bg-primary', 'text-white');
      }

      if (textSpan) {
        textSpan.classList.remove('text-slate-700');
        textSpan.classList.add('text-primary');
      }
    } else {
      label.classList.add('border-slate-200', 'bg-white');
      label.classList.remove('border-primary', 'bg-primary/5');

      if (iconDiv) {
        iconDiv.classList.add('bg-slate-100', 'text-slate-500');
        iconDiv.classList.remove('bg-primary', 'text-white');
      }

      if (textSpan) {
        textSpan.classList.add('text-slate-700');
        textSpan.classList.remove('text-primary');
      }
    }
  });

  // Update other simple card selectors (Q1, Q3, Q7, Q8, Q9)
  // These use a similar pattern of border activation
  const simpleSelectors = ['currentLevel', 'targetLevel', 'devices', 'habits', 'methods'];
  simpleSelectors.forEach(name => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
      const label = input.closest('label');
      if (input.checked) {
        label.classList.remove('border-slate-200', 'bg-white');
        label.classList.add('border-2', 'border-primary', 'bg-primary/5');
        // Ensure consistent border width if original was border-1
        label.classList.remove('border');
      } else {
        label.classList.add('border-slate-200', 'bg-white', 'border');
        label.classList.remove('border-2', 'border-primary', 'bg-primary/5');
      }
    });
  });
}

function checkFeasibilityInline(formData) {
  const feedbackEl = document.getElementById('feasibility-feedback');
  if (!feedbackEl) return;

  // Ensure necessary data is present before checking
  if (!formData.targetDate || !formData.targetLevel || !formData.currentLevel) {
    feedbackEl.innerHTML = '';
    return;
  }

  const feasibility = Utils.calculateFeasibility(formData);
  const lang = Storage.getUserData().language || 'en';
  const content = translations.questionnaire.feasibility;

  if (!feasibility.feasible) {
    const detailsText = Utils.t(content.details, lang)
      .replace('{need}', feasibility.details.requiredHours)
      .replace('{have}', Math.round(feasibility.details.totalPossibleHours));

    feedbackEl.innerHTML = `
      <div class="mt-4 bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3 fade-in">
        <span class="material-symbols-outlined text-red-500 shrink-0 mt-0.5">warning</span>
        <div class="flex flex-col gap-1">
          <p class="text-sm font-semibold text-red-700">${Utils.t(content.red_alert.title, lang)}</p>
          <p class="text-xs text-red-600 leading-relaxed">${Utils.t(content.red_alert.message, lang)}</p>
          <div class="mt-2 text-xs text-red-500 font-medium">
             ${detailsText}
          </div>
        </div>
      </div>
    `;
  } else {
    feedbackEl.innerHTML = `
      <div class="mt-4 bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3 fade-in">
        <span class="material-symbols-outlined text-green-500 shrink-0 mt-0.5">check_circle</span>
        <div class="flex flex-col gap-1">
          <p class="text-sm font-semibold text-green-700">${Utils.t(content.green_light.title, lang)}</p>
          <p class="text-xs text-green-600 leading-relaxed">${Utils.t(content.green_light.message, lang)}</p>
        </div>
      </div>
    `;
  }
}

function collectFormData() {
  return {
    currentLevel: document.querySelector('input[name="currentLevel"]:checked')?.value || '',
    goal: document.querySelector('input[name="goal"]:checked')?.value || '',
    targetLevel: document.querySelector('input[name="targetLevel"]:checked')?.value || '',
    why: document.querySelector('input[name="why"]:checked')?.value || '',
    targetDate: document.getElementById('targetDate')?.value || '',
    dailyTime: parseFloat(document.getElementById('dailyTime')?.value || 0.75),
    devices: Array.from(document.querySelectorAll('input[name="devices"]:checked')).map(el => el.value),
    habits: Array.from(document.querySelectorAll('input[name="habits"]:checked')).map(el => el.value),
    methods: Array.from(document.querySelectorAll('input[name="methods"]:checked')).map(el => el.value)
  };
}

window.submitQuestionnaire = function () {
  try {
    console.log('[Questionnaire] Submitting...');
    const formData = collectFormData();
    console.log('[Questionnaire] Data collected:', formData);

    const userData = Storage.getUserData();
    const lang = userData.language || 'en';
    const errorContent = translations.questionnaire.errors;

    // Clear previous errors
    document.querySelectorAll('[id^="error-"]').forEach(el => {
      el.textContent = '';
      el.classList.add('hidden');
    });
    document.querySelectorAll('.border-red-500').forEach(el => {
      el.classList.remove('border-red-500', 'bg-red-50');
    });

    // Validate
    console.log('[Questionnaire] Validating...');
    const validation = UserDataModel.validateQuestionnaire(formData);
    console.log('[Questionnaire] Validation result:', validation);

    if (!validation.valid) {
      console.log('[Questionnaire] Validation failed:', validation.errors);
      let firstError = null;

      validation.errors.forEach(error => {
        const errorEl = document.getElementById(`error-${error.field}`);
        if (errorEl) {
          // Get translated message if available, otherwise fallback to default
          const message = errorContent[error.field] ? Utils.t(errorContent[error.field], lang) : error.message;
          errorEl.textContent = message;
          errorEl.classList.remove('hidden');
          errorEl.classList.add('fade-in');

          if (!firstError) firstError = errorEl;
        }
      });

      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Add device group
    console.log('[Questionnaire] Determining device group...');
    formData.deviceGroup = Utils.determineDeviceGroup(formData.devices);
    console.log('[Questionnaire] Device group:', formData.deviceGroup);

    // Calculate feasibility
    console.log('[Questionnaire] Calculating feasibility...');
    const feasibility = Utils.calculateFeasibility(formData);
    console.log('[Questionnaire] Feasibility:', feasibility);

    // Save formData
    console.log('[Questionnaire] Saving user data...');
    Storage.updateUserData({ formData });

    if (feasibility.feasible) {
      console.log('[Questionnaire] Plan feasible. Navigating to screen-03...');
      // Navigate to study plan
      if (typeof navigateTo === 'function') {
        navigateTo('screen-03');
      } else {
        console.error('[Questionnaire] navigateTo function not found!');
        window.location.hash = '#/screen-03';
      }
    } else {
      console.log('[Questionnaire] Plan NOT feasible. Showing feedback...');
      // Plan is not feasible
      // Ensure the inline error is visible
      checkFeasibilityInline(formData);

      // Scroll to feasibility feedback
      const feedbackEl = document.getElementById('feasibility-feedback');
      if (feedbackEl) {
        feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: Add a shake animation or highlight effect here
        feedbackEl.classList.add('animate-pulse');
        setTimeout(() => feedbackEl.classList.remove('animate-pulse'), 500);
      }
    }
  } catch (error) {
    console.error('[Questionnaire] CRITICAL ERROR in submitQuestionnaire:', error);
    alert('An unexpected error occurred: ' + error.message);
  }
};

function showRedAlert(details) {
  const userData = Storage.getUserData();
  const lang = userData.language || 'en';
  const content = translations.questionnaire.feasibility.red_alert;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <div class="text-center">
          <div class="mb-6">
            <span class="material-symbols-outlined text-red-500 text-6xl">warning</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-4">${Utils.t(content.title, lang)}</h2>
          <p class="text-gray-600 mb-4">${Utils.t(content.message, lang)}</p>
          <p class="text-sm text-gray-500 mb-6">${Utils.t(content.description, lang)}</p>
          <div class="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p class="text-sm"><strong>Required Hours:</strong> ${details.requiredHours}</p>
            <p class="text-sm"><strong>Available Hours:</strong> ${Math.round(details.totalPossibleHours)}</p>
            <p class="text-sm"><strong>Daily Commitment:</strong> ${details.dailyHours} hours</p>
            <p class="text-sm"><strong>Days Remaining:</strong> ${details.daysRemaining} days</p>
          </div>
          <button onclick="navigateTo('screen-02')" class="w-full bg-primary text-white rounded-xl p-4 hover:scale-105 transition-transform">
            ${Utils.t(content.button, lang)}
          </button>
        </div>
      </div>
    </div>
  `;
}
