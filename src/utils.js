/**
 * UTILITY FUNCTIONS
 * Helper functions used throughout the application
 */

const Utils = {
    /**
     * Validate email format
     * @param {string} email - Email address to validate
     * @returns {boolean} True if valid email format
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Format date to MM/YYYY
     * @param {Date|string} date - Date to format
     * @returns {string} Formatted date string
     */
    formatMonthYear(date) {
        const d = typeof date === 'string' ? new Date(date) : date;
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${month}/${year}`;
    },

    /**
     * Parse MM/YYYY string to Date object
     * @param {string} dateString - Date string in MM/YYYY format
     * @returns {Date} Date object (first day of the month)
     */
    parseMonthYear(dateString) {
        const [month, year] = dateString.split('/');
        return new Date(parseInt(year), parseInt(month) - 1, 1);
    },

    /**
     * Calculate feasibility of learning plan
     * @param {object} formData - User questionnaire data
     * @returns {object} Feasibility result with details
     */
    calculateFeasibility(formData) {
        // Extract values
        const dailyHours = parseFloat(formData.dailyTime);
        const targetDate = this.parseMonthYear(formData.targetDate);
        const today = new Date();
        const currentLevel = formData.currentLevel;
        const targetLevel = formData.targetLevel;

        // Calculate days remaining
        const daysRemaining = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24));

        // Calculate total possible hours
        const totalPossibleHours = daysRemaining * dailyHours;

        // Map levels to scores (200 hours per level)
        const levelScores = {
            'A1': 0,
            'A2': 200,
            'B1': 400,
            'B2': 600,
            'C1': 800,
            'C2': 1000
        };

        const currentScore = levelScores[currentLevel] || 0;
        const targetScore = levelScores[targetLevel] || 400;

        // Calculate required hours
        const requiredHours = Math.max(0, targetScore - currentScore);

        // Determine feasibility (add 10% buffer)
        const feasible = totalPossibleHours >= (requiredHours * 0.9);

        return {
            feasible,
            details: {
                daysRemaining,
                dailyHours,
                totalPossibleHours,
                requiredHours,
                currentLevel,
                targetLevel,
                percentageComplete: requiredHours > 0 ? Math.min(100, (totalPossibleHours / requiredHours) * 100) : 100
            }
        };
    },

    /**
     * Determine device group from selected devices
     * @param {array} devices - Array of selected device options
     * @returns {string} Device group ('A' or 'B')
     */
    determineDeviceGroup(devices) {
        if (!devices || devices.length === 0) return 'A';

        // If user selected "mobile" OR "both" (keys)
        if (devices.includes('mobile') || devices.includes('both')) {
            return 'A';
        }

        // If user selected only "laptop"
        if (devices.includes('laptop') && devices.length === 1) {
            return 'B';
        }

        // Default to A
        return 'A';
    },

    /**
     * Debounce function to limit rate of function calls
     * @param {function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {function} Debounced function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, (m) => map[m]);
    },

    /**
     * Generate unique ID
     * @returns {string} Unique ID string
     */
    generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Deep clone an object
     * @param {object} obj - Object to clone
     * @returns {object} Cloned object
     */
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    /**
     * Check if value is empty (null, undefined, empty string, empty array)
     * @param {any} value - Value to check
     * @returns {boolean} True if empty
     */
    isEmpty(value) {
        if (value === null || value === undefined) return true;
        if (typeof value === 'string' && value.trim() === '') return true;
        if (Array.isArray(value) && value.length === 0) return true;
        return false;
    },

    /**
     * Smooth scroll to element
     * @param {string} elementId - ID of element to scroll to
     */
    scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    /**
     * Get translation text for current language
     * @param {object} translationObj - Translation object with language keys
     * @param {string} lang - Language code (optional, uses current language if not provided)
     * @returns {string} Translated text
     */
    t(translationObj, lang = null) {
        if (!translationObj) return '';
        const currentLang = lang || Storage.getUserData().language || CONFIG.app.defaultLanguage;
        return translationObj[currentLang] || translationObj[CONFIG.app.defaultLanguage] || '';
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
