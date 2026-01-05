/**
 * APPLICATION CONFIGURATION
 * Contains Google Form settings and other app-wide configurations
 */

const CONFIG = {
  // Google Form Configuration
  googleForm: {
    baseUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd9vivOwgfgdXVWmWCT0AJZ0nd_zYbMXpi87UjoaWDRypf3uw/formResponse',
    scriptUrl: '', // TODO: [USER] Add your Web App URL here after deployment
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
  },

  // App Settings
  app: {
    defaultLanguage: 'en',
    storageKey: 'eJoyUserData',
    version: '1.0.0'
  },

  // Feature Flags
  features: {
    debugMode: false,
    showConsoleLogsInProduction: false
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
