# Screen 06: Commitment Flow

## Overview
Three sequential modal overlays that build user commitment to their learning journey. Each modal requires user confirmation before proceeding to the next.

---

## Objective
1. Build psychological commitment through progressive affirmations
2. Encourage consistent daily practice
3. Prepare user mentally for the learning journey
4. Create a sense of ceremony before starting the first lesson

---

## User Flow

1. User arrives from Screen 05 (Confirmation)
2. **Modal 1** displays: "5 minutes every day" commitment
3. User clicks "I Promise"
4. **Modal 2** displays: "5 hours per week" commitment
5. User clicks "I'm Committed"
6. **Modal 3** displays: "Build a new habit" commitment
7. User clicks "I'm Ready"
8. Navigate to Screen 07 (First Lesson)

---

## UI Specifications

### Layout
- **Type**: Full-screen modal overlays
- **Background**: Dark Blue overlay (`#1A3A52`, 95% opacity)
- **Modal Card**: White background or Transparent depending on design (Spec implies White card initially, but DESIGN-UPDATES says "Modal overlay style").
    - *Correction*: The design update says "Full-screen overlay... Title/Statement: White...". This implies the *entire screen* is the modal content on dark blue.
    - Let's stick to the text: "Full-screen overlay: Dark blue background... Title/Statement: White".
- **Content**: Centered white text on dark blue background.
- **Responsive**: Centered on all devices

### Common Modal Structure

Each modal follows the same visual structure:
1. Icon or illustration
2. Title (the commitment statement)
3. Message (explanation or encouragement)
4. Action button (affirmation)

---

## Modal 1: 5 Minutes Daily

### Components

#### Icon/Illustration
- **Type**: Clock or timer icon
- **Style**: Primary color, large size
- **Purpose**: Visual representation of time commitment

#### Title
- **Content**: `TRANSLATIONS.commitment.modal1.title[lang]`
- **Example**: "I promise to study for 5 minutes every day"
- **Style**: Bold, large, centered, dark gray

#### Message
- **Content**: `TRANSLATIONS.commitment.modal1.message[lang]`
- **Example**: "Small, consistent steps lead to big results. Are you ready to commit?"
- **Style**: Medium size, gray text, centered

#### Action Button
- **Label**: `TRANSLATIONS.commitment.modal1.button[lang]`
- **Example**: "I Promise"
- **Style**: Primary button, prominent
- **Action**: Hide Modal 1, show Modal 2

---

## Modal 2: 5 Hours Weekly

### Components

#### Badge
- **Content**: "VOW II"
- **Style**: Green badge/pill

#### Icon/Illustration
- **Type**: Shield with checkmark (white on dark circle)
- **Style**: Centered
- **Purpose**: Visual representation of weekly commitment

#### Title
- **Content**: `TRANSLATIONS.commitment.modal2.title[lang]`
- **Example**: "I will dedicate 5 hours per week to my English journey"
- **Style**: Bold, large, centered, dark gray

#### Message
- **Content**: `TRANSLATIONS.commitment.modal2.message[lang]`
- **Example**: "Consistency is the key to fluency. Can you commit to this?"
- **Style**: Medium size, gray text, centered

#### Action Button
- **Label**: `TRANSLATIONS.commitment.modal2.button[lang]`
- **Example**: "I'm Committed"
- **Style**: Primary button, prominent
- **Action**: Hide Modal 2, show Modal 3

---

## Modal 3: New Habit

### Components

#### Icon/Illustration
- **Type**: Growth or rocket icon
- **Style**: Primary color, large size
- **Purpose**: Visual representation of habit building

#### Title
- **Content**: `TRANSLATIONS.commitment.modal3.title[lang]`
- **Example**: "Building a new habit may feel uncomfortable at first."
- **Style**: Bold, large, centered, white

#### Quote Box
- **Content**: `TRANSLATIONS.commitment.modal3.quote[lang]`
- **Example**: "I choose courage over comfort..."
- **Style**: Darker background card, "courage" in green


#### Action Button
- **Label**: `TRANSLATIONS.commitment.modal3.button[lang]`
- **Example**: "I'm Ready"
- **Style**: Primary button, prominent
- **Action**: Hide Modal 3, navigate to Screen 07

---

## Logic & Functionality

### Modal Management

```javascript
let currentCommitmentModal = 1;

function renderCommitmentFlow() {
  // Show first modal
  currentCommitmentModal = 1;
  showCommitmentModal(1);
}

function showCommitmentModal(modalNumber) {
  const lang = window.currentLanguage || 'en';
  const content = TRANSLATIONS.commitment[`modal${modalNumber}`];
  
  // Update html structure for Dark Blue Full Screen
  const html = `
    <div id="commitmentOverlay" class="fixed inset-0 bg-[#1A3A52] bg-opacity-95 flex items-center justify-center p-4 z-50 text-white">
      <div class="max-w-lg w-full text-center">
         <!-- LOGO & CLOSE BTN would go here -->
         
         <!-- Icon -->
         <!-- ... -->

  const icons = {
    1: `<svg class="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
    2: `<svg class="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>`,
    3: `<svg class="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>`
  };
  
  const html = `
    <div id="commitmentOverlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full transform transition-all">
        <div class="text-center">
          <!-- Icon -->
          <div class="mb-6">
            ${icons[modalNumber]}
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
          <button 
            onclick="handleCommitmentNext()"
            class="w-full bg-primary text-white rounded-xl py-4 text-lg font-semibold hover:scale-105 transition-transform">
            ${content.button[lang]}
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.innerHTML = html;
  document.body.appendChild(overlay.firstElementChild);
  
  // Add fade-in animation
  setTimeout(() => {
    document.getElementById('commitmentOverlay').classList.add('animate-fade-in');
  }, 10);
}

function handleCommitmentNext() {
  // Remove current modal with fade-out
  const overlay = document.getElementById('commitmentOverlay');
  overlay.classList.add('animate-fade-out');
  
  setTimeout(() => {
    overlay.remove();
    
    currentCommitmentModal++;
    
    if (currentCommitmentModal <= 3) {
      // Show next modal
      setTimeout(() => {
        showCommitmentModal(currentCommitmentModal);
      }, 200);
    } else {
      // All modals completed, proceed to first lesson
      navigateToScreen('screen-07-first-lesson');
    }
  }, 300);
}
```

### Animation Styles

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

.animate-fade-out {
  animation: fadeOut 0.3s ease-in forwards;
}
```

### Alternative: Sequential Display Without Overlays

If modals are not preferred, can display sequentially as full screens:

```javascript
function renderCommitmentScreen(modalNumber) {
  const lang = window.currentLanguage || 'en';
  const content = TRANSLATIONS.commitment[`modal${modalNumber}`];
  
  const html = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        <!-- Similar structure as modal -->
        <!-- ... -->
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
}
```

---

## Navigation

### Entry Point
- **Previous Screen**: Screen 05 (Confirmation)
- **Trigger**: User clicks "Let's Get Started"

### Exit Point
- **Next Screen**: Screen 07 (First Lesson)
- **Trigger**: User completes all 3 commitment modals

---

## Data Requirements

### Input
- None (commitment flow is self-contained)

### Output
- None (purely psychological/ceremonial)
- Optional: Could store commitment timestamps in localStorage for analytics

---

## Technical Notes

### Dependencies
- `translations.js` - For all UI text content

### Modal vs. Full Screen
This spec describes modals, but the implementation can be:
1. **Modals** (overlays) - More dramatic, ceremonial
2. **Full screens** - Simpler, easier to implement
3. **In-page cards** - Sequential reveals on same page

Choose based on the desired user experience.

### Timing Considerations
- Add subtle delays between modals (200-300ms) for better UX
- Consider fade-in/fade-out animations
- Prevent accidental skipping (disable double-click)

---

## Accessibility

- Modals trap focus (Tab key cycles within modal)
- Escape key can close current modal (optional)
- Clear button labels for screen readers
- Proper ARIA attributes (role="dialog", aria-modal="true")
- Announce modal content to screen readers

---

## Testing Checklist

- [ ] Modal 1 displays correctly
- [ ] "I Promise" button shows Modal 2
- [ ] Modal 2 displays correctly
- [ ] "I'm Committed" button shows Modal 3
- [ ] Modal 3 displays correctly
- [ ] "I'm Ready" button navigates to Screen 07
- [ ] Modals are centered and responsive
- [ ] Animations work smoothly
- [ ] All text displays in correct language
- [ ] Keyboard navigation works
- [ ] Cannot skip modals accidentally
