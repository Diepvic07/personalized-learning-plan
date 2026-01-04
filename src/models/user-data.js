/**
 * USER DATA MODEL
 * Default structure and validation rules for user data
 */

const UserDataModel = {
    /**
     * Get default/empty user data structure
     * @returns {object} Default user data
     */
    getDefault() {
        return {
            // Language Selection (Screen 01)
            nativeLanguage: 'other', // 'vietnamese', 'spanish', 'other'
            language: 'en', // Display language: 'vi', 'es', 'en'

            // Questionnaire (Screen 02)
            currentLevel: '', // 'A1', 'A2', 'B1', 'B2'
            goal: '', // 'Communication', 'IELTS', 'TOEIC'
            targetLevel: '', // 'B1', 'B2', 'C1', 'C2'
            why: '', // Specific goal reason
            targetDate: '', // 'MM/YYYY'
            dailyTime: 0.5, // hours per day
            devices: [], // Array of device selections
            deviceGroup: 'A', // 'A' or 'B'
            habits: [], // Array of habit selections
            methods: [], // Array of learning method selections

            // Study Plan (Screen 03)
            selectedPlanId: null, // 1, 2, 3, 4, or null
            isCustomPlan: false,
            planDocLink: '',
            firstLessonLink: '',

            // Contact Information (Screen 04)
            name: '',
            email: '',
            phone: '',

            // Commitment Flow (Screen 06)
            commitmentAccepted: [], // Array of boolean values [modal1, modal2, modal3]

            // Navigation
            currentScreen: 'screen-01',
            lastUpdated: new Date().toISOString()
        };
    },

    /**
     * Validate questionnaire data
     * @param {object} data - Data to validate
     * @returns {object} Validation result { valid: boolean, errors: array }
     */
    validateQuestionnaire(data) {
        const errors = [];

        // Required field checks
        if (!data.currentLevel) {
            errors.push({ field: 'currentLevel', message: 'Current level is required' });
        }

        if (!data.goal) {
            errors.push({ field: 'goal', message: 'Main objective is required' });
        }

        if (!data.targetLevel) {
            errors.push({ field: 'targetLevel', message: 'Target level is required' });
        }

        if (!data.why) {
            errors.push({ field: 'why', message: 'Goal specification is required' });
        }

        if (!data.targetDate || !data.targetDate.match(/^\d{2}\/\d{4}$/)) {
            errors.push({ field: 'targetDate', message: 'Valid target date (MM/YYYY) is required' });
        } else {
            // Check if date is in the future
            const targetDate = Utils.parseMonthYear(data.targetDate);
            const today = new Date();
            if (targetDate <= today) {
                errors.push({ field: 'targetDate', message: 'Target date must be in the future' });
            }
        }

        if (!data.dailyTime || data.dailyTime < 0.25 || data.dailyTime > 8) {
            errors.push({ field: 'dailyTime', message: 'Daily time must be between 0.25 and 8 hours' });
        }

        if (!data.devices || data.devices.length === 0) {
            errors.push({ field: 'devices', message: 'At least one device must be selected' });
        }

        if (!data.habits || data.habits.length === 0) {
            errors.push({ field: 'habits', message: 'At least one habit must be selected' });
        }

        if (!data.methods || data.methods.length === 0) {
            errors.push({ field: 'methods', message: 'At least one learning method must be selected' });
        }

        return {
            valid: errors.length === 0,
            errors
        };
    },

    /**
     * Validate contact information
     * @param {object} data - Data to validate
     * @returns {object} Validation result { valid: boolean, errors: array }
     */
    validateContact(data) {
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push({ field: 'name', message: 'Please enter your full name (at least 2 characters)' });
        }

        if (!data.email || !Utils.isValidEmail(data.email)) {
            errors.push({ field: 'email', message: 'Please enter a valid email address' });
        }

        // Phone is optional, but if provided should be valid
        if (data.phone && data.phone.trim().length > 0) {
            const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
            if (!phoneRegex.test(data.phone)) {
                errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
            }
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserDataModel;
}
