/**
 * STORAGE MODULE
 * Handles localStorage operations for user data persistence
 */

const Storage = {
    /**
     * Save data to localStorage
     * @param {string} key - Storage key
     * @param {any} value - Value to store (will be JSON stringified)
     */
    set(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
            return true;
        } catch (error) {
            console.error('[Storage] Error saving to localStorage:', error);
            return false;
        }
    },

    /**
     * Get data from localStorage
     * @param {string} key - Storage key
     * @param {any} defaultValue - Default value if key doesn't exist
     * @returns {any} Parsed value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('[Storage] Error reading from localStorage:', error);
            return defaultValue;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('[Storage] Error removing from localStorage:', error);
            return false;
        }
    },

    /**
     * Clear all app data from localStorage
     */
    clear() {
        try {
            // Clear only app-related keys
            const keysToRemove = [
                CONFIG.app.storageKey,
                'currentLanguage',
                'userFormData',
                'contactData',
                'selectedPlanId',
                'isCustomPlan',
                'commitmentProgress'
            ];

            keysToRemove.forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('[Storage] Error clearing localStorage:', error);
            return false;
        }
    },

    /**
     * Get all user data
     * @returns {object} Complete user data object
     */
    getUserData() {
        return this.get(CONFIG.app.storageKey, {
            currentScreen: 'screen-01',
            language: CONFIG.app.defaultLanguage,
            formData: {},
            planData: {},
            contactData: {},
            commitmentAccepted: []
        });
    },

    /**
     * Save complete user data
     * @param {object} data - User data object
     */
    saveUserData(data) {
        return this.set(CONFIG.app.storageKey, data);
    },

    /**
     * Update specific fields in user data
     * @param {object} updates - Object with fields to update
     */
    updateUserData(updates) {
        const currentData = this.getUserData();
        const newData = { ...currentData, ...updates };
        return this.saveUserData(newData);
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}
