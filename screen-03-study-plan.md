# Screen 03: Study Plan

## Overview
Displays the personalized learning plan based on the user's questionnaire responses. Uses persona mapping logic to match user profile to one of 12 predefined learning plans.

---

## Objective
1. Determine the appropriate persona/plan based on user data
2. Display the personalized learning plan with phases and tasks
3. Handle cases where no exact persona match exists
4. Navigate user to email submission (Screen 04)

---

## User Flow

### Happy Path (Persona Match Found)
1. User arrives from Screen 02 (Green Light scenario)
2. System determines the persona based on goal, level, and device group
3. Display the matched learning plan with all phases
4. User reviews the plan
5. User clicks "Get My Study Plan" button
6. Navigate to Screen 04 (Data Submission)

### Alternative Path (No Persona Match)
1. User arrives from Screen 02 (Green Light scenario)
2. System attempts to determine persona
3. No exact match found
4. Display "Waiting Email" screen (custom plan message)
5. User clicks button to proceed
6. Navigate to Screen 04 (Data Submission - Confirmation 2)
7. End flow after email collection

---

## UI Specifications

### Layout
- **Container**: Full-width with centered content
- **Background**: Light gray (`bg-gray-50`)
- **Plan Card**: White background (`bg-white`), rounded corners (`rounded-2xl`), shadow (`shadow-lg`)
- **Responsive**: Single column on mobile, optimized spacing for larger screens

### Components (Persona Match)

#### 1. Header
- **Title**: `TRANSLATIONS.studyPlan.header.title[lang]`
- **Subtitle**: `TRANSLATIONS.studyPlan.header.subtitle[lang]`
- **Style**: 
  - Title: Large, bold, dark gray (`text-gray-800`)
  - Subtitle: Medium, lighter gray (`text-gray-600`)

#### 2. Plan Title
- **Content**: Display the plan title from `PLANS[planId].title`
- **Style**: Prominent heading, primary color or dark gray

#### 3. Phases Section
For each phase in `PLANS[planId].phases`:

**Phase Header**
- **Label**: `TRANSLATIONS.studyPlan.phase[lang]` + phase number
- **Phase Name**: Display `phase.name`
- **Style**: Bold, medium size, with decorative element (icon, border, etc.)

**Tasks List**
- **Label**: `TRANSLATIONS.studyPlan.tasks[lang]`
- **Content**: Display all tasks from `phase.tasks` as a bulleted or numbered list
- **Style**: Clean, readable list with adequate spacing

#### 4. Action Button
- **Label**: `TRANSLATIONS.studyPlan.button[lang]`
- **Action**: Navigate to Screen 04
- **Style**: Primary button, full width on mobile, centered on desktop

### Components (No Persona Match)

#### 1. Icon/Illustration
- Display a friendly icon or illustration indicating customization

#### 2. Title
- **Content**: `TRANSLATIONS.studyPlan.noMatch.title[lang]`
- **Style**: Large, bold, centered

#### 3. Message
- **Content**: `TRANSLATIONS.studyPlan.noMatch.message[lang]`
- **Style**: Medium size, centered, gray text

#### 4. Action Button
- **Label**: `TRANSLATIONS.studyPlan.button[lang]` or similar
- **Action**: Navigate to Screen 04 (Confirmation 2)
- **Style**: Primary button

---

## Logic & Functionality

### Persona Mapping Logic

```javascript
/**
 * Determine the appropriate plan ID based on user data
 * Returns: planId (1-12) or null (no match)
 */
function determinePersona(userData) {
  const { goal, currentLevel, deviceGroup } = userData;
  
  // Normalize levels for comparison
  const isBeginnerLevel = ['A1', 'A2'].includes(currentLevel);
  const isIntermediateLevel = ['B1', 'B2'].includes(currentLevel);
  
  // COMMUNICATION PLANS (1-4)
  if (goal === 'Communication') {
    if (isBeginnerLevel && deviceGroup === 'A') {
      return 1; // Plan 1: Communication | Beginner | Mobile or Both
    }
    if (isIntermediateLevel && deviceGroup === 'A') {
      return 2; // Plan 2: Communication | Intermediate | Mobile or Both
    }
    if (isBeginnerLevel && deviceGroup === 'B') {
      return 3; // Plan 3: Communication | Beginner | Laptop
    }
    if (isIntermediateLevel && deviceGroup === 'B') {
      return 4; // Plan 4: Communication | Intermediate | Laptop
    }
  }
  
  // IELTS PLANS (5-8)
  if (goal === 'IELTS') {
    if (isBeginnerLevel && deviceGroup === 'A') {
      return 5; // Plan 5: IELTS | Beginner | Mobile or Both
    }
    if (isIntermediateLevel && deviceGroup === 'A') {
      return 6; // Plan 6: IELTS | Intermediate | Mobile or Both
    }
    if (isBeginnerLevel && deviceGroup === 'B') {
      return 7; // Plan 7: IELTS | Beginner | Laptop
    }
    if (isIntermediateLevel && deviceGroup === 'B') {
      return 8; // Plan 8: IELTS | Intermediate | Laptop
    }
  }
  
  // TOEIC PLANS (9-12)
  if (goal === 'TOEIC') {
    if (isBeginnerLevel && deviceGroup === 'A') {
      return 9; // Plan 9: TOEIC | Beginner | Mobile or Both
    }
    if (isIntermediateLevel && deviceGroup === 'A') {
      return 10; // Plan 10: TOEIC | Intermediate | Mobile or Both
    }
    if (isBeginnerLevel && deviceGroup === 'B') {
      return 11; // Plan 11: TOEIC | Beginner | Laptop
    }
    if (isIntermediateLevel && deviceGroup === 'B') {
      return 12; // Plan 12: TOEIC | Intermediate | Laptop
    }
  }
  
  // No match found
  return null;
}
```

### Plan Rendering

```javascript
function renderStudyPlan() {
  const lang = window.currentLanguage || 'en';
  const userData = JSON.parse(localStorage.getItem('userFormData'));
  
  // Determine persona
  const planId = determinePersona(userData);
  
  // Store plan ID for later use
  window.selectedPlanId = planId;
  localStorage.setItem('selectedPlanId', planId);
  
  if (planId === null) {
    renderNoMatchScreen();
    return;
  }
  
  // Get plan data
  const plan = PLANS[planId];
  const content = TRANSLATIONS.studyPlan;
  
  // Determine which document to reference based on language
  const docId = (lang === 'vi') ? plan.doc_vn : plan.doc_en;
  
  // Build HTML
  let html = `
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">
            ${content.header.title[lang]}
          </h1>
          <p class="text-lg text-gray-600">
            ${content.header.subtitle[lang]}
          </p>
        </div>
        
        <!-- Plan Card -->
        <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${plan.title}
          </h2>
          
          <!-- Phases -->
          <div class="space-y-8">
  `;
  
  // Add each phase
  plan.phases.forEach((phase, index) => {
    html += `
      <div class="border-l-4 border-primary pl-6">
        <h3 class="text-xl font-bold text-gray-800 mb-3">
          ${content.phase[lang]} ${index + 1}: ${phase.name}
        </h3>
        <p class="text-sm text-gray-600 mb-3">${content.tasks[lang]}:</p>
        <ul class="space-y-2">
    `;
    
    // Add tasks
    phase.tasks.forEach(task => {
      html += `
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-gray-700">${task}</span>
        </li>
      `;
    });
    
    html += `
        </ul>
      </div>
    `;
  });
  
  html += `
          </div>
        </div>
        
        <!-- Action Button -->
        <div class="text-center">
          <button onclick="proceedToEmailSubmission()" 
                  class="bg-primary text-white rounded-xl px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
            ${content.button[lang]}
          </button>
        </div>
        
        <!-- Optional: Link to full document -->
        <div class="text-center mt-4">
          <a href="https://docs.google.com/document/d/${docId}" 
             target="_blank"
             class="text-primary hover:underline text-sm">
            View Full Document →
          </a>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
}
```

### No Match Screen Rendering

```javascript
function renderNoMatchScreen() {
  const lang = window.currentLanguage || 'en';
  const content = TRANSLATIONS.studyPlan.noMatch;
  
  const html = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        <!-- Icon -->
        <div class="mb-6">
          <svg class="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        <!-- Title -->
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          ${content.title[lang]}
        </h2>
        
        <!-- Message -->
        <p class="text-gray-600 mb-8">
          ${content.message[lang]}
        </p>
        
        <!-- Action Button -->
        <button onclick="proceedToEmailSubmission()" 
                class="w-full bg-primary text-white rounded-xl p-4 hover:scale-105 transition-transform">
          ${TRANSLATIONS.studyPlan.button[lang]}
        </button>
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
  
  // Mark that this is a custom plan scenario
  window.isCustomPlan = true;
  localStorage.setItem('isCustomPlan', 'true');
}
```

### Navigation Handler

```javascript
function proceedToEmailSubmission() {
  navigateToScreen('screen-04-data-submission');
}
```

---

## Navigation

### Entry Point
- **Previous Screen**: Screen 02 (Questionnaire - Green Light)
- **Data In**: `userFormData` from localStorage

### Exit Point
- **Next Screen**: Screen 04 (Data Submission)
- **Trigger**: User clicks "Get My Study Plan" button
- **Note**: If no persona match, the email submission will lead to "Confirmation 2" and end the flow

---

## Data Requirements

### Input
```javascript
{
  // From userFormData
  goal: "Communication" | "IELTS" | "TOEIC",
  currentLevel: "A1" | "A2" | "B1" | "B2",
  deviceGroup: "A" | "B"
}
```

### Output
```javascript
{
  selectedPlanId: number (1-12) | null,
  isCustomPlan: boolean,
  planDocumentId: string // Google Doc ID
}
```

---

## Technical Notes

### Dependencies
- `translations.js` - For all UI text content
- `knowledge-base.js` - For PLANS data structure

### Document References
Each plan has two Google Document IDs:
- `doc_en`: English version of the detailed plan
- `doc_vn`: Vietnamese version of the detailed plan

For Spanish users, use the English document as Spanish-specific plans are not defined.

### Plan Structure Reference
```javascript
PLANS[planId] = {
  title: string,
  doc_en: string,
  doc_vn: string,
  goal: string,
  levels: [string],
  deviceGroup: string,
  phases: [
    {
      name: string,
      tasks: [string]
    }
  ]
}
```

---

## Persona Mapping Table

| Plan ID | Goal          | Level       | Device Group | Description                                 |
|---------|---------------|-------------|--------------|---------------------------------------------|
| 1       | Communication | A1 or A2    | A (Mobile)   | Beginner Communication Plan (Mobile)         |
| 2       | Communication | B1 or B2    | A (Mobile)   | Intermediate Communication Plan (Mobile)     |
| 3       | Communication | A1 or A2    | B (Laptop)   | Beginner Communication Plan (Laptop)         |
| 4       | Communication | B1 or B2    | B (Laptop)   | Intermediate Communication Plan (Laptop)     |
| 5       | IELTS         | A1 or A2    | A (Mobile)   | IELTS Prep - Beginner (Mobile)              |
| 6       | IELTS         | B1 or B2    | A (Mobile)   | IELTS Prep - Intermediate (Mobile)           |
| 7       | IELTS         | A1 or A2    | B (Laptop)   | IELTS Prep - Beginner (Laptop)              |
| 8       | IELTS         | B1 or B2    | B (Laptop)   | IELTS Prep - Intermediate (Laptop)           |
| 9       | TOEIC         | A1 or A2    | A (Mobile)   | TOEIC Prep - Beginner (Mobile)              |
| 10      | TOEIC         | B1 or B2    | A (Mobile)   | TOEIC Prep - Intermediate (Mobile)           |
| 11      | TOEIC         | A1 or A2    | B (Laptop)   | TOEIC Prep - Beginner (Laptop)              |
| 12      | TOEIC         | B1 or B2    | B (Laptop)   | TOEIC Prep - Intermediate (Laptop)           |

---

## Accessibility

- Proper heading hierarchy (h1 → h2 → h3)
- Task lists use semantic list elements
- Links to full documents open in new tab with indication
- Keyboard navigation support
- ARIA labels for icons

---

## Testing Checklist

- [ ] Plan 1-12 correctly mapped based on goal, level, and device group
- [ ] All phases and tasks display correctly
- [ ] No match scenario displays "Waiting Email" screen
- [ ] Correct Google Doc link based on user language
- [ ] "Get My Study Plan" navigates to Screen 04
- [ ] `selectedPlanId` and `isCustomPlan` stored correctly
- [ ] Responsive layout on all screen sizes
- [ ] All 12 personas tested with their respective plans
