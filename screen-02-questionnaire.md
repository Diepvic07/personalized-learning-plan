# Screen 02: Questionnaire

## Overview
The questionnaire screen collects user information to create a personalized English learning plan. It includes 9 questions covering current level, goals, target level, timeline, availability, devices, habits, and current learning methods.

---

## Objective
1. Collect comprehensive user data through a 9-question form
2. Calculate feasibility of the user's learning plan based on time commitment
3. Either show a "Red Alert" (unfeasible) or "Green Light" (feasible) result
4. Navigate appropriately based on feasibility

---

## User Flow

### Happy Path (Green Light)
1. User arrives from Screen 01 with selected language
2. User fills out all 9 questions
3. User submits the form
4. System calculates feasibility
5. **Feasible**: Display "Green Light" message
6. User clicks "See Study Plan"
7. Navigate to Screen 03

### Alternative Path (Red Alert)
1. User arrives from Screen 01 with selected language
2. User fills out all 9 questions
3. User submits the form
4. System calculates feasibility
5. **Not Feasible**: Display "Red Alert" message
6. User clicks "Adjust Plan"
7. Return to Screen 02 (questionnaire) with data pre-filled

---

## UI Specifications

### Layout
- **Container**: Clean form layout with generous spacing
- **Background**: Light gray (`bg-gray-50`)
- **Form Card**: White background (`bg-white`), rounded corners (`rounded-2xl`), shadow (`shadow-lg`)
- **Responsive**: Stack vertically on mobile, optimize spacing for tablets/desktops

### Form Components

#### Question 1: Native Language
- **Type**: Radio Group (already answered in Screen 01, but displayed for reference)
- **Label**: `TRANSLATIONS.questionnaire.questions.q1_native_lang.label[lang]`
- **Options**: Vietnamese, Spanish, Other
- **Stored**: From Screen 01, display only (read-only or auto-selected)

#### Question 2: Current English Level
- **Type**: Radio Group
- **Label**: `TRANSLATIONS.questionnaire.questions.q1_level.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q1_level.options.a1[lang]` → Value: `A1`
  - `TRANSLATIONS.questionnaire.questions.q1_level.options.a2[lang]` → Value: `A2`
  - `TRANSLATIONS.questionnaire.questions.q1_level.options.b1[lang]` → Value: `B1`
  - `TRANSLATIONS.questionnaire.questions.q1_level.options.b2[lang]` → Value: `B2`
- **Required**: Yes

#### Question 3: Main Objective
- **Type**: Radio Group
- **Label**: `TRANSLATIONS.questionnaire.questions.q2_goal.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q2_goal.options.communication[lang]` → Value: `Communication`
  - `TRANSLATIONS.questionnaire.questions.q2_goal.options.ielts[lang]` → Value: `IELTS`
  - `TRANSLATIONS.questionnaire.questions.q2_goal.options.toeic[lang]` → Value: `TOEIC`
- **Required**: Yes

#### Question 4: Target Level
- **Type**: Radio Group
- **Label**: `TRANSLATIONS.questionnaire.questions.q3_target_level.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q3_target_level.options.b1[lang]` → Value: `B1`
  - `TRANSLATIONS.questionnaire.questions.q3_target_level.options.b2[lang]` → Value: `B2`
  - `TRANSLATIONS.questionnaire.questions.q3_target_level.options.c1[lang]` → Value: `C1`
  - `TRANSLATIONS.questionnaire.questions.q3_target_level.options.c2[lang]` → Value: `C2`
- **Required**: Yes

#### Question 5: Specify Your Goal
- **Type**: Radio Group
- **Label**: `TRANSLATIONS.questionnaire.questions.q4_why.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.everyday[lang]` → Value: `Everyday English`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.job[lang]` → Value: `Job`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.scholarship[lang]` → Value: `Scholarship`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.graduation[lang]` → Value: `Graduation`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.kids[lang]` → Value: `Talk with Kids`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.business[lang]` → Value: `Business English`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.immigrants[lang]` → Value: `Immigrants`
  - `TRANSLATIONS.questionnaire.questions.q4_why.options.other[lang]` → Value: `Other`
- **Required**: Yes

#### Question 6: Target Date
- **Type**: Date Picker (Month/Year format)
- **Label**: `TRANSLATIONS.questionnaire.questions.q5_target_date.label[lang]`
- **Format**: MM/YYYY
- **Validation**: Must be a future date
- **Required**: Yes

#### Question 7: Daily Time Commitment
- **Type**: Range Slider
- **Label**: `TRANSLATIONS.questionnaire.questions.q6_daily_time.label[lang]`
- **Range**: 0.2 to 5.0 hours
- **Step**: 0.1
- **Display**: Show current value dynamically (e.g., "2.5 hours")
- **Required**: Yes

#### Question 8: Devices
- **Type**: Checkbox Group (multiple selection allowed, but logic treats specific combinations)
- **Label**: `TRANSLATIONS.questionnaire.questions.q7_devices.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q7_devices.options.mobile[lang]` → Value: `Mobile/Tablet`
  - `TRANSLATIONS.questionnaire.questions.q7_devices.options.laptop[lang]` → Value: `Laptop`
  - `TRANSLATIONS.questionnaire.questions.q7_devices.options.both[lang]` → Value: `Both`
- **Required**: At least one selection
- **Logic Note**: 
  - If "Mobile/Tablet" OR "Both" is selected → Device Group = `A`
  - If only "Laptop" is selected → Device Group = `B`

#### Question 9: Habits
- **Type**: Checkbox Group (multiple selection)
- **Label**: `TRANSLATIONS.questionnaire.questions.q8_habits.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q8_habits.options.read_native[lang]`
  - `TRANSLATIONS.questionnaire.questions.q8_habits.options.read_english[lang]`
  - `TRANSLATIONS.questionnaire.questions.q8_habits.options.watch_native[lang]`
  - `TRANSLATIONS.questionnaire.questions.q8_habits.options.watch_english[lang]`
  - `TRANSLATIONS.questionnaire.questions.q8_habits.options.rarely_communicate[lang]`
  - `TRANSLATIONS.questionnaire.questions.q8_habits.options.regularly_communicate[lang]`
- **Required**: At least one selection

#### Question 10: Current Learning Methods
- **Type**: Checkbox Group (multiple selection, but allow "not studying" alone)
- **Label**: `TRANSLATIONS.questionnaire.questions.q9_methods.label[lang]`
- **Options**:
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.not_studying[lang]`
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.watching[lang]`
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.reading[lang]`
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.center[lang]`
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.textbooks[lang]`
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.ai[lang]`
  - `TRANSLATIONS.questionnaire.questions.q9_methods.options.tutor[lang]`
- **Required**: At least one selection

### Submit Button
- **Label**: "Continue" or localized equivalent
- **Style**: Primary button with full width on mobile
- **Action**: Validate form → Calculate feasibility → Show result

---

## Logic & Functionality

### Feasibility Calculation

```javascript
/**
 * Calculate if the user's learning plan is feasible
 * Returns: { feasible: boolean, details: object }
 */
function calculateFeasibility(formData) {
  // Extract values
  const dailyHours = parseFloat(formData.dailyTime);
  const targetDate = new Date(formData.targetDate);
  const today = new Date();
  const currentLevel = formData.currentLevel; // A1, A2, B1, B2
  const targetLevel = formData.targetLevel;   // B1, B2, C1, C2
  
  // Calculate days remaining
  const daysRemaining = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24));
  
  // Calculate total possible hours
  const totalPossibleHours = daysRemaining * dailyHours;
  
  // Map levels to scores
  const levelScores = {
    'A1': 0,
    'A2': 200,
    'B1': 400,
    'B2': 600,
    'C1': 800,
    'C2': 1000
  };
  
  const currentScore = levelScores[currentLevel];
  const targetScore = levelScores[targetLevel];
  
  // Calculate required hours (200 hours per level gap)
  const requiredHours = targetScore - currentScore;
  
  // Determine feasibility
  const feasible = totalPossibleHours >= requiredHours;
  
  return {
    feasible,
    details: {
      daysRemaining,
      dailyHours,
      totalPossibleHours,
      requiredHours,
      currentLevel,
      targetLevel
    }
  };
}
```javascript
/**
 * Calculate if the user's learning plan is feasible
 * Returns: { feasible: boolean, details: object }
 */
function calculateFeasibility(formData) {
  // ... existing logic ...
}
```

### Inline Feasibility Feedback (Real-time)
As the user adjusts the "Daily Time Commitment" slider or changes other relevant fields (Target Date, Levels), the system performs a real-time feasibility check.
- **Trigger**: `input` event on daily time slider, `change` event on form.
- **Display**: Shows a warning (Red) or success (Green) message immediately below the slider.
- **Logic**: Uses the same `calculateFeasibility` function.

### Form Validation

```javascript
function validateForm(formData) {
  const errors = [];
  
  // Required field checks
  if (!formData.currentLevel) errors.push('Current level is required');
  if (!formData.goal) errors.push('Main objective is required');
  if (!formData.targetLevel) errors.push('Target level is required');
  if (!formData.why) errors.push('Goal specification is required');
  if (!formData.targetDate) errors.push('Target date is required');
  if (!formData.dailyTime) errors.push('Daily time commitment is required');
  if (!formData.devices || formData.devices.length === 0) {
    errors.push('At least one device must be selected');
  }
  if (!formData.habits || formData.habits.length === 0) {
    errors.push('At least one habit must be selected');
  }
  if (!formData.methods || formData.methods.length === 0) {
    errors.push('At least one learning method must be selected');
  }
  
  // Target date must be in the future
  const targetDate = new Date(formData.targetDate);
  const today = new Date();
  if (targetDate <= today) {
    errors.push('Target date must be in the future');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}
```

### Device Group Logic

```javascript
function determineDeviceGroup(devices) {
  // devices is an array of selected options
  
  // If user selected "Mobile/Tablet" OR "Both"
  if (devices.includes('Mobile/Tablet') || devices.includes('Both')) {
    return 'A';
  }
  
  // If user selected only "Laptop"
  if (devices.includes('Laptop') && devices.length === 1) {
    return 'B';
  }
  
  // Default to A
  return 'A';
}
```

### Form Submission Handler

```javascript
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Collect form data
  const formData = {
    nativeLanguage: window.currentLanguage,
    currentLevel: document.querySelector('input[name="currentLevel"]:checked')?.value,
    goal: document.querySelector('input[name="goal"]:checked')?.value,
    targetLevel: document.querySelector('input[name="targetLevel"]:checked')?.value,
    why: document.querySelector('input[name="why"]:checked')?.value,
    targetDate: document.querySelector('input[name="targetDate"]').value,
    dailyTime: document.querySelector('input[name="dailyTime"]').value,
    devices: Array.from(document.querySelectorAll('input[name="devices"]:checked'))
              .map(el => el.value),
    habits: Array.from(document.querySelectorAll('input[name="habits"]:checked'))
              .map(el => el.value),
    methods: Array.from(document.querySelectorAll('input[name="methods"]:checked'))
              .map(el => el.value)
  };
  
  // Validate
  const validation = validateForm(formData);
  if (!validation.valid) {
    showErrors(validation.errors);
    return;
  }
  
  // Store form data
  window.userFormData = formData;
  localStorage.setItem('userFormData', JSON.stringify(formData));
  
  // Add device group to form data
  formData.deviceGroup = determineDeviceGroup(formData.devices);
  
  // Calculate feasibility
  const feasibilityResult = calculateFeasibility(formData);
  
  // Show result
  if (feasibilityResult.feasible) {
    showGreenLight(feasibilityResult.details);
  } else {
    showRedAlert(feasibilityResult.details);
  }
}
```

### Result Display - Red Alert

```javascript
```javascript
function showRedAlert(details) {
  // Deprecated: Feasibility feedback is now shown inline
}

function returnToQuestionnaire() {
  // Deprecated
}
```

### Result Display - Green Light

```javascript
function showGreenLight(details) {
  const lang = window.currentLanguage || 'en';
  const content = TRANSLATIONS.questionnaire.feasibility.green_light;
  
  const html = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <div class="text-center">
          <!-- Success Icon -->
          <div class="mb-6">
            <svg class="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <!-- Title -->
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            ${content.title[lang]}
          </h2>
          
          <!-- Message -->
          <p class="text-gray-600 mb-6">
            ${content.message[lang]}
          </p>
          
          <!-- Details (optional) -->
          <div class="bg-green-50 rounded-xl p-4 mb-6 text-left">
            <p class="text-sm"><strong>Total Hours Available:</strong> ${details.totalPossibleHours}</p>
            <p class="text-sm"><strong>Daily Commitment:</strong> ${details.dailyHours} hours</p>
            <p class="text-sm"><strong>Target:</strong> ${details.currentLevel} → ${details.targetLevel}</p>
          </div>
          
          <!-- Action Button -->
          <button onclick="navigateToStudyPlan()" 
                  class="w-full bg-primary text-white rounded-xl p-4 hover:scale-105 transition-transform">
            ${content.button[lang]}
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
}

function navigateToStudyPlan() {
  navigateToScreen('screen-03-study-plan');
}
```

---

## Navigation

### Entry Point
- **Previous Screen**: Screen 01 (Language Selection)
- **Data In**: `appLanguage` from Screen 01

### Exit Points

**Scenario 1: Green Light**
- **Next Screen**: Screen 03 (Study Plan)
- **Trigger**: User clicks "See Study Plan" button after feasible calculation

**Scenario 2: Red Alert**
- **Next Screen**: Screen 02 (Questionnaire) - re-render
- **Trigger**: User clicks "Adjust Plan" button after unfeasible calculation
- **Note**: Pre-fill form with previous data for easy adjustment

---

## Data Requirements

### Input
- `appLanguage` from Screen 01 (stored in localStorage/global state)

### Output (Stored for Later Screens)
```javascript
{
  nativeLanguage: "vi" | "es" | "en",
  currentLevel: "A1" | "A2" | "B1" | "B2",
  goal: "Communication" | "IELTS" | "TOEIC",
  targetLevel: "B1" | "B2" | "C1" | "C2",
  why: "Everyday English" | "Job" | "Scholarship" | etc.,
  targetDate: "MM/YYYY",
  dailyTime: number (0.2 - 5.0),
  devices: ["Mobile/Tablet", "Laptop", "Both"],
  deviceGroup: "A" | "B",
  habits: [array of selected habit strings],
  methods: [array of selected method strings]
}
```

---

## Technical Notes

### Dependencies
- `translations.js` - For all UI text content
- Form validation library (optional, can use native HTML5 validation)
- Date picker library (optional, can use native HTML5 date input)

### Local Storage Keys
- `appLanguage` - Set in Screen 01
- `userFormData` - Set in Screen 02

---

## Accessibility

- All form fields have associated labels
- Required fields are marked with `*` or aria-required
- Error messages are announced to screen readers
- Keyboard navigation through all form fields
- Focus management on error display

---

## Testing Checklist

- [ ] All 9 questions render correctly in all languages
- [ ] Form validation works for all required fields
- [ ] Feasibility calculation is accurate
- [ ] Red Alert scenario displays correctly
- [ ] Green Light scenario displays correctly
- [ ] "Adjust Plan" returns to questionnaire with pre-filled data
- [ ] "See Study Plan" navigates to Screen 03
- [ ] Device group logic correctly determines A or B
- [ ] Date picker only allows future dates
- [ ] Range slider displays current value dynamically
- [ ] Responsive layout on mobile, tablet, desktop
