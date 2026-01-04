/**
 * MAIN APPLICATION CONTROLLER
 * Handles routing, screen rendering, and application state
 */

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('[App] Initializing eJOY English Learning Plan...');

    // Initialize user data if first time
    initializeUserData();

    // Set up routing
    setupRouting();

    // Navigate to initial screen
    const userData = Storage.getUserData();
    const currentScreen = window.location.hash || `#/${userData.currentScreen}`;

    // Remove loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => loadingScreen.remove(), 300);
        }, 500);
    }

    // Navigate to current screen
    if (!window.location.hash) {
        navigateTo(userData.currentScreen);
    } else {
        handleRoute();
    }
}

/**
 * Initialize user data with defaults
 */
function initializeUserData() {
    let userData = Storage.getUserData();

    // If no data exists, create default
    if (!userData || !userData.language) {
        userData = UserDataModel.getDefault();
        Storage.saveUserData(userData);
    }

    // Set global language
    window.currentLanguage = userData.language || CONFIG.app.defaultLanguage;
}

/**
 * Set up hash-based routing
 */
function setupRouting() {
    window.addEventListener('hashchange', handleRoute);
}

/**
 * Handle route changes
 */
function handleRoute() {
    const hash = window.location.hash.slice(2); // Remove '#/'
    const screenName = hash || 'screen-01';

    console.log(`[Router] Navigating to: ${screenName}`);

    // Update current screen in storage
    Storage.updateUserData({ currentScreen: screenName });

    // Render appropriate screen
    renderScreen(screenName);
}

/**
 * Render a screen based on screen name
 * @param {string} screenName - Name of screen to render
 */
function renderScreen(screenName) {
    const app = document.getElementById('app');

    // Add exit animation
    app.classList.add('screen-exit');

    setTimeout(() => {
        // Clear current content
        app.innerHTML = '';

        // Render new screen
        switch (screenName) {
            case 'screen-01':
                renderLanguageSelection();
                break;
            case 'screen-02':
                renderQuestionnaire();
                break;
            case 'screen-03':
                renderStudyPlan();
                break;
            case 'screen-04':
                renderEmailSubmission();
                break;
            case 'screen-05':
                renderConfirmation();
                break;
            case 'screen-06':
                renderCommitment();
                break;
            case 'screen-07':
                renderFirstLesson();
                break;
            default:
                render404();
        }

        // Add entry animation
        app.classList.remove('screen-exit');
        app.classList.add('screen-enter');

        // Scroll to top
        window.scrollTo(0, 0);
    }, 150);
}

/**
 * Navigate to a specific screen
 * @param {string} screenName - Name of screen to navigate to
 */
function navigateTo(screenName) {
    window.location.hash = `#/${screenName}`;
}

/**
 * Render 404 page for unknown routes
 */
function render404() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p class="text-xl text-gray-600 mb-8">Page not found</p>
        <button 
          onclick="navigateTo('screen-01')" 
          class="bg-primary text-white rounded-xl px-6 py-3 hover:scale-105 transition-transform">
          Go to Home
        </button>
      </div>
    </div>
  `;
}

/**
 * Show loading state
 * @param {string} message - Loading message
 */
function showLoading(message = 'Loading...') {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="spinner mx-auto mb-4"></div>
        <p class="text-gray-600">${message}</p>
      </div>
    </div>
  `;
}

/**
 * Show error message
 * @param {string} message - Error message
 * @param {function} retryCallback - Optional retry callback
 */
function showError(message, retryCallback = null) {
    const app = document.getElementById('app');
    const retryButton = retryCallback ?
        `<button onclick="${retryCallback.name}()" class="bg-primary text-white rounded-xl px-6 py-3 hover:scale-105 transition-transform mt-4">
      Try Again
    </button>` : '';

    app.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="text-center max-w-md">
        <div class="text-6xl mb-4">⚠️</div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
        <p class="text-gray-600 mb-6">${message}</p>
        ${retryButton}
      </div>
    </div>
  `;
}

// Global navigation functions (callable from HTML)
window.navigateTo = navigateTo;
window.showLoading = showLoading;
window.showError = showError;

console.log('[App] Application initialized successfully');
