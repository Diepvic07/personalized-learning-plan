# Screen 01: Language Selection

## Overview
The very first screen users see when launching the application. This screen determines the language for all subsequent content and UI elements.

---

## Objective
Allow users to select their native language, which will set the application language for the entire user journey.

---

## User Flow
1. User launches the application
2. Screen 01 (Language Selection) is displayed
3. User clicks one of the three language options
4. Application stores the selected language preference
5. Application navigates to Screen 02 (Questionnaire)

---

## UI Specifications

### Layout
- **Container**: Centered card with rounded corners (`rounded-2xl`), soft shadow (`shadow-xl`), and padding (`p-6` or `p-8`)
- **Background**: Light gray (`bg-gray-50`)
- **Header**: Contains Back arrow (left), 5-step Progress Dots (center), and Skip button (right)
- **Responsive**: Mobile-first, fully responsive

### Components

#### 1. Header Elements
- **Back Arrow**: Icon, top left (can be hidden on first screen if no history)
- **Progress Indicators**: 5 dots. First dot is active (Blue `#1E9FF2`), others gray.
- **Skip Button**: Top right. Text "Skip". Navigates to default experience (English).

#### 2. Branding (Top Center)
- **Logo Text**: "eJOY English" (Blue)
- **Tagline**: "The Superjoy" (Small, Gray)

#### 3. Main Content
- **Title**: `TRANSLATIONS.languageSelection.title[lang]`
  - Text: "What is your native language?"
- **Description**: `TRANSLATIONS.languageSelection.description[lang]`
  - Text: "We use this to tailor your learning roadmap..."
  - Style: centered, gray text

#### 4. Language Selection Options
Display as **Radio Button Cards** (Selectable list):
- **Structure**: Vertical list of full-width cards
- **State**:
  - **Default**: White background, variable border
  - **Selected**: Blue border, light blue background tint, Checkmark icon visible
- **Content**:
  - Flag Icon
  - Language Name
  - Radio circle (empty vs selected)
  
**Options**:
1. **Vietnamese** (🇻🇳) - Default selection in design
2. **Spanish** (🇪🇸)
3. **Other** (🌍)

#### 5. Continue Button
- **Label**: "Continue"
- **Style**: Primary Blue background (`#1E9FF2`), White text, Full width, Rounded
- **State**: Disabled if no selection (though default is selected)
- **Action**: Navigates to Screen 02

### Visual Hierarchy
1. Title & Description
2. Language Cards (Interactive area)
3. Continue Button (Call to Action)

---

## Logic & Functionality

### Language Mapping
```javascript
// Language selection handler
function handleLanguageSelection(selection) {
  let appLanguage;
  
  switch(selection) {
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
  
  // Store language preference
  localStorage.setItem('appLanguage', appLanguage);
  
  // Update global language state
  window.currentLanguage = appLanguage;
  
  // Navigate to next screen
  navigateToScreen('screen-02-questionnaire');
}
```

### State Management
- **Language Storage**: Store the selected language in `localStorage` for persistence
- **Global State**: Set a global variable `window.currentLanguage` for easy access throughout the app
- **Default Language**: If accessed directly (bypassing this screen), default to English (`en`)

---

## Navigation

### Entry Point
- This is the **first screen** in the application flow
- No previous screen

### Exit Point
- **Next Screen**: Screen 02 (Questionnaire)
- **Trigger**: User clicks any of the three language option buttons

---

## Data Requirements

### Input
- None (this is the entry point)

### Output
- **appLanguage**: String (`'vi'`, `'es'`, or `'en'`)
- Stored in `localStorage` and global state

---

## Technical Notes

### Dependencies
- `translations.js` - For all UI text content

### DOM Manipulation
```javascript
// Render language selection screen
function renderLanguageSelection() {
  const currentLang = window.currentLanguage || 'en';
  const content = TRANSLATIONS.languageSelection;
  
  const html = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">
          ${content.title[currentLang]}
        </h1>
        
        <div class="space-y-4">
          <button 
            onclick="handleLanguageSelection('vietnamese')"
            class="w-full bg-primary text-white rounded-xl p-6 hover:scale-105 transition-transform">
            ${content.options.vietnamese[currentLang]}
          </button>
          
          <button 
            onclick="handleLanguageSelection('spanish')"
            class="w-full bg-primary text-white rounded-xl p-6 hover:scale-105 transition-transform">
            ${content.options.spanish[currentLang]}
          </button>
          
          <button 
            onclick="handleLanguageSelection('other')"
            class="w-full bg-primary text-white rounded-xl p-6 hover:scale-105 transition-transform">
            ${content.options.other[currentLang]}
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
}
```

### CSS Custom Properties
```css
:root {
  --primary-color: #1da1f2;
}

.bg-primary {
  background-color: var(--primary-color);
}
```

---

## Accessibility

- All buttons should have appropriate ARIA labels
- Keyboard navigation support (Tab to navigate, Enter to select)
- High contrast between text and background
- Focus states clearly visible on all interactive elements

---

## Testing Checklist

- [ ] Vietnamese selection sets language to `vi`
- [ ] Spanish selection sets language to `es`
- [ ] Other selection sets language to `en`
- [ ] Language preference persists in localStorage
- [ ] Navigation to Screen 02 works correctly
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] All buttons are clickable and have hover effects
- [ ] Keyboard navigation works properly
