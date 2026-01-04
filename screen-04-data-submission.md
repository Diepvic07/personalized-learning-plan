# Screen 04: Data Submission

## Overview
Collects user contact information (name, email, phone) and submits all collected data to a Google Form. Handles both standard persona matches and custom plan scenarios.

---

## Objective
1. Collect user's contact information
2. Submit all user data to Google Form
3. Handle two scenarios: persona match vs. custom plan
4. Navigate to appropriate confirmation screen

---

## User Flow

### Scenario 1: Persona Match (Standard Flow)
1. User arrives from Screen 03 with a matched plan
2. Display standard email collection form
3. User fills in name, email, and optionally phone
4. User submits the form
5. Data sent to Google Form
6. Navigate to Screen 05 (Confirmation)

### Scenario 2: No Persona Match (Custom Plan)
1. User arrives from Screen 03 with no matched plan
2. Display "Waiting Email" variant of the form
3. User fills in name, email, and optionally phone
4. User submits the form
5. Data sent to Google Form
6. Navigate to Screen 05 (Confirmation 2)
7. **End Flow** (do not proceed to commitment or first lesson)

---

## UI Specifications

### Layout
- **Container**: Centered card layout
- **Background**: Light gray (`bg-gray-50`)
- **Form Card**: White background (`bg-white`), rounded corners (`rounded-2xl`), shadow (`shadow-lg`)
- **Responsive**: Single column, full width on mobile

### Components (Standard Email Form)

#### 1. Header
- **Title**: `TRANSLATIONS.dataSubmission.title[lang]`
- **Subtitle**: `TRANSLATIONS.dataSubmission.subtitle[lang]`
- **Style**: Centered, bold title with lighter subtitle

#### 2. Form Fields

**Field 1: Full Name**
- **Type**: Text input
- **Label**: `TRANSLATIONS.dataSubmission.fields.name.label[lang]`
- **Placeholder**: `TRANSLATIONS.dataSubmission.fields.name.placeholder[lang]`
- **Required**: Yes
- **Validation**: Non-empty, minimum 2 characters

**Field 2: Email Address**
- **Type**: Email input
- **Label**: `TRANSLATIONS.dataSubmission.fields.email.label[lang]`
- **Placeholder**: `TRANSLATIONS.dataSubmission.fields.email.placeholder[lang]`
- **Required**: Yes
- **Validation**: Valid email format

**Field 3: Phone Number**
- **Type**: Tel input
- **Label**: `TRANSLATIONS.dataSubmission.fields.phone.label[lang]`
- **Placeholder**: `TRANSLATIONS.dataSubmission.fields.phone.placeholder[lang]`
- **Required**: No (Optional)
- **Validation**: If provided, must be valid phone format

#### 3. Submit Button
- **Label**: `TRANSLATIONS.dataSubmission.button[lang]`
- **Style**: Primary button, full width on mobile
- **Action**: Submit form to Google Form

### Components (Waiting Email Variant)

Same form fields as above, but with different header:

#### Header (Waiting Email)
- **Title**: `TRANSLATIONS.dataSubmission.waitingEmail.title[lang]`
  - Text: "We are crafting your personalized English learning roadmap"
- **Message**: `TRANSLATIONS.dataSubmission.waitingEmail.message[lang]`
  - Text: "It will be sent directly to your email shortly..."
- **Style**: Friendly, reassuring tone, with Blue illustration/icon

---

## Logic & Functionality

### Google Form Integration

#### Google Form Field Mapping

```javascript
const GOOGLE_FORM_CONFIG = {
  baseUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd9vivOwgfgdXVWmWCT0AJZ0nd_zYbMXpi87UjoaWDRypf3uw/formResponse',
  fields: {
    nativeLanguage: 'entry.1104628968',
    currentLevel: 'entry.20025655',
    goal: 'entry.1726224099',
    why: 'entry.2079802003',
    targetScore: 'entry.693047622',
    targetDate: 'entry.152926486',
    dailyTime: 'entry.492776784',
    devices: 'entry.982307483',
    habits: 'entry.2059039395',
    methods: 'entry.669280251',
    name: 'entry.1409835656',
    email: 'entry.1439263172',
    phone: 'entry.129724744',
    planId: 'entry.271858445',
    planDocLink: 'entry.63991647',
    firstLessonLink: 'entry.870884231'
  }
};
```

### Form Submission Handler

```javascript
async function handleEmailFormSubmit(event) {
  event.preventDefault();
  
  // Collect contact info
  const contactData = {
    name: document.querySelector('input[name="name"]').value.trim(),
    email: document.querySelector('input[name="email"]').value.trim(),
    phone: document.querySelector('input[name="phone"]')?.value.trim() || ''
  };
  
  // Validate
  if (!contactData.name || contactData.name.length < 2) {
    showError('Please enter your full name');
    return;
  }
  
  if (!contactData.email || !isValidEmail(contactData.email)) {
    showError('Please enter a valid email address');
    return;
  }
  
  // Store contact data
  localStorage.setItem('contactData', JSON.stringify(contactData));
  
  // Get previously stored user data
  const userData = JSON.parse(localStorage.getItem('userFormData'));
  
  // Combine all data for Google Form submission
  const submissionData = {
    ...userData,
    ...contactData
  };
  
  // Submit to Google Form
  const success = await submitToGoogleForm(submissionData);
  
  if (success) {
    // Check if this is a custom plan scenario
    const isCustomPlan = localStorage.getItem('isCustomPlan') === 'true';
    
    if (isCustomPlan) {
      // End flow - go to confirmation only
      navigateToScreen('screen-05-confirmation');
      // Set flag to end flow after confirmation
      window.endFlowAfterConfirmation = true;
    } else {
      // Standard flow - continue to commitment
      navigateToScreen('screen-05-confirmation');
    }
  } else {
    showError('There was an error submitting your data. Please try again.');
  }
}
```

### Google Form Submission

```javascript
async function submitToGoogleForm(data) {
  try {
    // Get plan ID and custom plan flag
    const planId = localStorage.getItem('selectedPlanId') || 'no-match';
    const isCustomPlan = localStorage.getItem('isCustomPlan') === 'true';
    
    // Get plan doc link from knowledge base
    let planDocLink = '';
    if (planId !== 'no-match' && PLANS[planId]) {
      const lang = window.currentLanguage || 'en';
      planDocLink = lang === 'vi' ? PLANS[planId].doc_vn : PLANS[planId].doc_en;
    }
    
    // Determine first lesson link
    const firstLessonLink = determineFirstLessonUrl(data, planId);
    
    // Build form data
    const formData = new FormData();
    
    // Map data to Google Form entry IDs
    const nativeLanguage = localStorage.getItem('nativeLanguage') || 'other';
    formData.append(GOOGLE_FORM_CONFIG.fields.nativeLanguage, nativeLanguage);
    formData.append(GOOGLE_FORM_CONFIG.fields.currentLevel, data.currentLevel);
    formData.append(GOOGLE_FORM_CONFIG.fields.goal, data.goal);
    formData.append(GOOGLE_FORM_CONFIG.fields.why, data.why);
    formData.append(GOOGLE_FORM_CONFIG.fields.targetScore, data.targetLevel);
    formData.append(GOOGLE_FORM_CONFIG.fields.targetDate, data.targetDate);
    formData.append(GOOGLE_FORM_CONFIG.fields.dailyTime, data.dailyTime);
    
    // Arrays need to be joined or sent as separate entries
    formData.append(GOOGLE_FORM_CONFIG.fields.devices, data.devices.join(', '));
    formData.append(GOOGLE_FORM_CONFIG.fields.habits, data.habits.join(', '));
    formData.append(GOOGLE_FORM_CONFIG.fields.methods, data.methods.join(', '));
    
    // Contact info
    formData.append(GOOGLE_FORM_CONFIG.fields.name, data.name);
    formData.append(GOOGLE_FORM_CONFIG.fields.email, data.email);
    formData.append(GOOGLE_FORM_CONFIG.fields.phone, data.phone || '');
    
    // NEW: Plan metadata
    formData.append(GOOGLE_FORM_CONFIG.fields.planId, planId);
    formData.append(GOOGLE_FORM_CONFIG.fields.planDocLink, planDocLink);
    formData.append(GOOGLE_FORM_CONFIG.fields.firstLessonLink, firstLessonLink);
    
    // Submit using fetch with no-cors mode
    // Note: We won't get a response due to CORS, but the form will be submitted
    await fetch(GOOGLE_FORM_CONFIG.baseUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
    
    // Since we can't verify the response due to CORS, assume success
    console.log('Form submitted to Google Forms');
    return true;
    
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    // Even on error, we might want to proceed (CORS blocks response)
    // In production, you might want to handle this differently
    return true;
  }
}

// Helper function to determine first lesson URL
function determineFirstLessonUrl(userData, planId) {
  // Check for video-watching habit
  const hasVideoHabit = 
    userData.habits.includes("I usually watch YouTube or movies in English") ||
    userData.methods.includes("Watching English movies / YouTube videos");
  
  // Check if it's a video-optimized plan (Plan 2 or 4)
  const numericPlanId = parseInt(planId);
  const isVideoOptimizedPlan = (numericPlanId === 2 || numericPlanId === 4);
  
  // If video habit + video-optimized plan → AI Roleplay (Screen 8)
  if (hasVideoHabit && isVideoOptimizedPlan) {
    return 'https://ejo.bz/first-lesson-2'; // AI Roleplay
  }
  
  // All other cases → YouTube Lesson (Screen 7)
  return 'https://ejo.bz/first-lesson-1'; // YouTube Video Lesson
}
```

### Email Validation

```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

### Form Rendering

```javascript
function renderEmailForm() {
  const lang = window.currentLanguage || 'en';
  const isCustomPlan = localStorage.getItem('isCustomPlan') === 'true';
  const content = TRANSLATIONS.dataSubmission;
  
  // Choose header based on scenario
  const headerTitle = isCustomPlan 
    ? content.waitingEmail.title[lang] 
    : content.title[lang];
  const headerSubtitle = isCustomPlan 
    ? content.waitingEmail.message[lang] 
    : content.subtitle[lang];
  
  const html = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">
            ${headerTitle}
          </h1>
          <p class="text-gray-600">
            ${headerSubtitle}
          </p>
        </div>
        
        <!-- Form -->
        <form id="emailForm" onsubmit="handleEmailFormSubmit(event)" class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              ${content.fields.name.label[lang]} *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="${content.fields.name.placeholder[lang]}"
            />
          </div>
          
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              ${content.fields.email.label[lang]} *
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="${content.fields.email.placeholder[lang]}"
            />
          </div>
          
          <!-- Phone Field -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              ${content.fields.phone.label[lang]}
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="${content.fields.phone.placeholder[lang]}"
            />
          </div>
          
          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-primary text-white rounded-xl py-4 font-semibold hover:scale-105 transition-transform">
            ${content.button[lang]}
          </button>
        </form>
        
        <!-- Error Message Container -->
        <div id="errorMessage" class="mt-4 text-red-600 text-sm text-center hidden"></div>
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
}

function showError(message) {
  const errorDiv = document.getElementById('errorMessage');
  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
  
  // Hide after 5 seconds
  setTimeout(() => {
    errorDiv.classList.add('hidden');
  }, 5000);
}
```

---

## Navigation

### Entry Point
- **Previous Screen**: Screen 03 (Study Plan)
- **Data In**: `selectedPlanId`, `isCustomPlan`, `userFormData` from localStorage

### Exit Points

**Scenario 1: Standard Flow**
- **Next Screen**: Screen 05 (Confirmation)
- **Then**: Continue to Screen 06 (Commitment)
- **Trigger**: Form submitted successfully

**Scenario 2: Custom Plan**
- **Next Screen**: Screen 05 (Confirmation 2)
- **Then**: **END FLOW**
- **Trigger**: Form submitted successfully

---

## Data Requirements

### Input
```javascript
{
  // From previous screens
  userFormData: { ... },
  selectedPlanId: number | null,
  isCustomPlan: boolean
}
```

### Output
```javascript
{
  contactData: {
    name: string,
    email: string,
    phone: string | ''
  }
}
```

### Google Form Submission Payload
All fields from questionnaire + contact information are sent to Google Form with the mapped entry IDs.

---

## Technical Notes

### Dependencies
- `translations.js` - For all UI text content

### CORS Handling
Due to Google Forms CORS restrictions:
- Use `mode: 'no-cors'` in fetch request
- Cannot read response status
- Assume submission is successful
- Consider server-side proxy for production if response validation is needed

### Alternative Submission Methods
1. **Hidden iframe**: Submit form to hidden iframe to avoid CORS
2. **Server proxy**: Route submission through your own server
3. **Google Apps Script**: Use Apps Script as intermediary

### Example with iframe:
```javascript
function submitViaIframe(formData) {
  const iframe = document.createElement('iframe');
  iframe.name = 'hidden_iframe';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  
  const form = document.createElement('form');
  form.action = GOOGLE_FORM_CONFIG.baseUrl;
  form.method = 'POST';
  form.target = 'hidden_iframe';
  
  // Add form fields
  Object.entries(formData).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });
  
  document.body.appendChild(form);
  form.submit();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(form);
    document.body.removeChild(iframe);
  }, 1000);
}
```

---

## Accessibility

- All form fields have proper labels
- Required fields marked with asterisk
- Error messages announced to screen readers
- Focus management on form submission
- Keyboard navigation support

---

## Testing Checklist

- [ ] Form renders with correct variant (standard vs. waiting email)
- [ ] Name field validation works
- [ ] Email field validation works (format check)
- [ ] Phone field is optional
- [ ] All data correctly mapped to Google Form entry IDs
- [ ] Form submission works (check Google Form responses)
- [ ] Standard flow navigates to Screen 05 then Screen 06
- [ ] Custom plan flow navigates to Screen 05 and ends
- [ ] Error messages display correctly
- [ ] Responsive layout on all devices
- [ ] Data persists in localStorage after submission
