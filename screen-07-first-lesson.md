# Screen 07: First Lesson

## Overview
The final screen that directs users to their personalized first lesson.
Two scenarios:
1. **Video Lesson**: For users with a video-watching habit.
2. **AI Roleplay**: For all other users (General/Speaking focus).

Both scenarios include a "We'll be in touch" contact banner at the bottom.

---

## Objective
1. Determine appropriate lesson type (Video vs. AI Roleplay)
2. Display encouraging content and specific lesson details
3. Show "Contact Banner" reassurance
4. Redirect to external lesson URL

---

## User Flow

### Scenario 1: Video Lesson (YouTube)
1. User arrives from Screen 06
2. Logic: User has "Watch English movies/YouTube" habit AND is in Video-Optimized Plan
3. Display **Video Lesson** UI
4. User clicks "Start with a 5-minute lesson" -> Redirect to `https://ejo.bz/first-lesson-1`

### Scenario 2: AI Roleplay (General/Speaking)
1. User arrives from Screen 06
2. Logic: All other users
3. Display **AI Roleplay** UI (Scenes: Coffee Shop, Job Interview, Hotel)
4. User clicks "Start AI Conversation" -> Redirect to `https://ejo.bz/first-lesson-2`

---

## UI Specifications

### Layout
- **Container**: Centered, max-width appropriate for content
- **Background**: Light/Gradient
- **Bottom Section**: Contact Banner ("We'll be in touch within 24h")

### Components (Shared)
- **Contact Banner**:
  - Located at the bottom or below the main card
  - Title: `TRANSLATIONS.contactBanner.title`
  - Message: `TRANSLATIONS.contactBanner.message`
  - Style: Subtle background, reassuring text

### Components (Scenario 1: Video Lesson)
- **Title**: `TRANSLATIONS.youtubeLesson.title`
- **Subtitle**: `TRANSLATIONS.youtubeLesson.subtitle`
- **Roadmap Preview**: "Your Roadmap • Day 1"
- **Lesson Card**:
  - Badge: "TODAY'S LESSON"
  - Title: "Essentials & Warm-up"
  - Meta: "5 min", "Vocabulary", "Listening"
- **Button**: `TRANSLATIONS.youtubeLesson.button`

### Components (Scenario 2: AI Roleplay)
- **Badge**: "AI SUGGESTION"
- **Title**: `TRANSLATIONS.aiRoleplay.title`
- **Subtitle**: `TRANSLATIONS.aiRoleplay.subtitle`
- **Scenario Cards**:
  - Card 1: "Coffee Shop Order" (Active/Recommended)
  - Card 2: "Job Interview" (Locked/Optional)
  - Card 3: "Hotel Check-in" (Locked/Optional)
- **Button**: `TRANSLATIONS.aiRoleplay.button`


## Logic & Functionality

### Scenario Determination

```javascript
/**
 * Determine which first lesson scenario to show
 * Returns: 1 (video learner) or 2 (general learner)
 */
function determineFirstLessonScenario() {
  const userData = JSON.parse(localStorage.getItem('userFormData'));
  const planId = parseInt(localStorage.getItem('selectedPlanId'));
  
  // Check if user has YouTube/video watching habit
  const hasVideoHabit = userData.habits && 
    userData.habits.includes("I usually watch YouTube or movies in English");
  
  // Check if user selected "Watching English movies / YouTube videos" as current method
  const currentlyWatchingVideos = userData.methods && 
    userData.methods.includes("Watching English movies / YouTube videos");
  
  // Determine if user has video-watching preferences
  const isVideoLearner = hasVideoHabit || currentlyWatchingVideos;
  
  // Define persona groups that should use video lessons
  // Based on requirements: P17-P22 or P31-P33
  // This maps to specific Plan IDs
  const videoOptimizedPlans = [2, 4, 6, 8, 10, 12]; // Intermediate plans
  
  // Scenario 1: Video learner with appropriate persona
  if (isVideoLearner && videoOptimizedPlans.includes(planId)) {
    return 1;
  }
  
  // Scenario 2: All other users
  return 2;
}
```

### Alternative Logic (Based on Original Requirement)

The requirement specifies "Personas P17-P22 or P31-P33". Based on the persona grouping:
- P17-P22: Communication | Intermediate | Mobile (Plan 2)
- P31-P33: Communication | Intermediate | Laptop (Plan 4)

Here's a more precise interpretation:

```javascript
function determineFirstLessonScenario() {
  const userData = JSON.parse(localStorage.getItem('userFormData'));
  const planId = parseInt(localStorage.getItem('selectedPlanId'));
  
  // Check if user has YouTube/video watching habit
  const hasVideoHabit = userData.habits && 
    userData.habits.includes("I usually watch YouTube or movies in English");
  
  // Check if user's plan is Communication + Intermediate (Plans 2 or 4)
  // These correspond to the original P17-P22 (Plan 2) and P31-P33 (Plan 4)
  const isCommunicationIntermediate = [2, 4].includes(planId);
  
  // Scenario 1: Has video habit AND is Communication Intermediate persona
  if (hasVideoHabit && isCommunicationIntermediate) {
    return 1; // Video lesson
  }
  
  // Scenario 2: All other cases
  return 2; // General lesson
}
```

### Screen Rendering

```javascript
function renderFirstLesson() {
  const lang = window.currentLanguage || 'en';
  const scenario = determineFirstLessonScenario();
  const content = TRANSLATIONS.firstLesson[`scenario${scenario}`];
  
  // Determine lesson URL
  const lessonUrl = scenario === 1 
    ? 'https://ejo.bz/first-lesson-1' 
    : 'https://ejo.bz/first-lesson-2';
  
  // Store for analytics
  localStorage.setItem('firstLessonScenario', scenario);
  localStorage.setItem('firstLessonUrl', lessonUrl);
  
  // Icons for each scenario
  const icons = {
    1: `<svg class="w-24 h-24 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
    2: `<svg class="w-24 h-24 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>`
  };
  
  const html = `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
        <!-- Icon -->
        <div class="mb-8">
          ${icons[scenario]}
        </div>
        
        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          ${content.title[lang]}
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl font-semibold text-primary mb-4">
          ${content.subtitle[lang]}
        </p>
        
        <!-- Description -->
        <p class="text-gray-600 mb-8">
          ${content.description[lang]}
        </p>
        
        <!-- Action Button -->
        <button 
          onclick="redirectToFirstLesson('${lessonUrl}')"
          class="bg-primary text-white rounded-xl px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
          ${content.button[lang]}
        </button>
        
        <!-- Optional: Progress indicator -->
        <div class="mt-8 text-sm text-gray-500">
          🎉 Congratulations! You've completed your learning plan setup
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('app').innerHTML = html;
}
```

### Redirection Handler

```javascript
function redirectToFirstLesson(url) {
  // Optional: Track event before redirect
  console.log('Redirecting to first lesson:', url);
  
  // Optional: Show loading state
  showLoadingState();
  
  // Redirect after short delay for better UX
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

function showLoadingState() {
  const button = event.target;
  button.disabled = true;
  button.textContent = 'Loading...';
  button.classList.add('opacity-75', 'cursor-not-allowed');
}
```

---

## Navigation

### Entry Point
- **Previous Screen**: Screen 06 (Commitment Flow)
- **Data In**: `userFormData`, `selectedPlanId` from localStorage

### Exit Point
- **Next Screen**: External URL (first lesson)
- **URLs**:
  - Scenario 1: `https://ejo.bz/first-lesson-1`
  - Scenario 2: `https://ejo.bz/first-lesson-2`
- **Trigger**: User clicks "Start My First Lesson"
- **Action**: External redirect (leaves SPA)

---

## Data Requirements

### Input
```javascript
{
  // From userFormData
  habits: [string],
  methods: [string],
  
  // From previous screens
  selectedPlanId: number
}
```

### Output
```javascript
{
  firstLessonScenario: 1 | 2,
  firstLessonUrl: string
}
```

---

## Technical Notes

### Dependencies
- `translations.js` - For all UI text content

### Persona to Plan Mapping for First Lesson
Based on the original requirement:
- **P17-P22**: These are intermediate Communication learners using Mobile → **Plan 2**
- **P31-P33**: These are intermediate Communication learners using Laptop → **Plan 4**

Therefore, Scenario 1 (video lesson) applies to Plans 2 and 4 when user has video-watching habits.

### URL Shortlinks
The URLs use `ejo.bz` short links:
- `first-lesson-1`: Video-based introduction
- `first-lesson-2`: General introduction

Ensure these URLs are configured to redirect to the actual lesson content.

### Analytics Considerations
Before redirecting, consider tracking:
- Which scenario was shown
- User's complete profile
- Time spent in the app
- Completion rate of all steps

---

## Accessibility

- Clear heading structure
- Descriptive button labels
- Sufficient color contrast
- Keyboard navigation support
- Focus management before redirect
- Screen reader announcements

---

## Testing Checklist

- [ ] Scenario logic correctly determines video vs. general learner
- [ ] Scenario 1 displays for users with video habits + Plans 2/4
- [ ] Scenario 2 displays for all other users
- [ ] Correct lesson URL used for each scenario
- [ ] "Start My First Lesson" button redirects correctly
- [ ] Both URLs (`first-lesson-1` and `first-lesson-2`) are valid
- [ ] All text displays correctly in all languages
- [ ] Responsive layout on all devices
- [ ] Loading state displays before redirect
- [ ] Analytics/tracking fires before redirect (if implemented)

---

## Persona Reference for First Lesson Routing

| Condition | Plan IDs | Lesson URL | Scenario |
|-----------|----------|------------|----------|
| Video habit + Communication + Intermediate | 2, 4 | `https://ejo.bz/first-lesson-1` | 1 |
| All other combinations | 1, 3, 5-12 | `https://ejo.bz/first-lesson-2` | 2 |

**Note**: The original requirement mentions "P17-P22 or P31-P33". In our simplified 12-plan structure:
- P17-P22 (Communication | B1-B2 | Mobile) = Plan 2
- P31-P33 (Communication | B1-B2 | Laptop) = Plan 4

If you need to expand this to include other intermediate plans (e.g., IELTS/TOEIC intermediate), adjust the `videoOptimizedPlans` array in the logic accordingly.
