/**
 * GOOGLE FORMS INTEGRATION
 * Handles submission of user data to Google Forms
 */

const GoogleForms = {
    /**
     * Submit all user data to Google Form
     * @param {object} userData - Complete user data object
     * @returns {Promise<boolean>} Success status
     */
    async submit(userData) {
        try {
            const formData = new FormData();
            const config = CONFIG.googleForm;

            // Map user data to Google Form entry IDs
            // Native Language
            const nativeLanguage = userData.nativeLanguage || Storage.getUserData().language || 'other';
            formData.append(config.fields.nativeLanguage, nativeLanguage);

            // Questionnaire data
            formData.append(config.fields.currentLevel, userData.currentLevel || '');
            formData.append(config.fields.goal, userData.goal || '');
            formData.append(config.fields.why, userData.why || '');
            formData.append(config.fields.targetScore, userData.targetLevel || '');
            formData.append(config.fields.targetDate, userData.targetDate || '');
            formData.append(config.fields.dailyTime, userData.dailyTime || '');

            // Arrays - join with commas
            // Devices - map keys to English labels
            let devicesStr = '';
            if (Array.isArray(userData.devices)) {
                devicesStr = userData.devices.map(key => {
                    // Start of mapping logic
                    try {
                        if (typeof translations !== 'undefined' &&
                            translations.questionnaire?.questions?.q7_devices?.options?.[key]?.en) {
                            return translations.questionnaire.questions.q7_devices.options[key].en;
                        }
                    } catch (e) {
                        console.warn('Translation lookup failed for device:', key);
                    }
                    // Fallback to key itself (capitalized for niceness)
                    return key.charAt(0).toUpperCase() + key.slice(1);
                }).join(', ');
            }
            formData.append(config.fields.devices, devicesStr);
            formData.append(config.fields.habits,
                Array.isArray(userData.habits) ? userData.habits.join(', ') : userData.habits || '');
            formData.append(config.fields.methods,
                Array.isArray(userData.methods) ? userData.methods.join(', ') : userData.methods || '');

            // Contact information
            formData.append(config.fields.name, userData.name || '');
            formData.append(config.fields.email, userData.email || '');
            formData.append(config.fields.phone, userData.phone || '');

            // Plan metadata
            const planId = userData.planId || Storage.get('selectedPlanId', 'no-match');
            formData.append(config.fields.planId, planId);

            const planDocLink = userData.planDocLink || '';
            formData.append(config.fields.planDocLink, planDocLink);

            const firstLessonLink = userData.firstLessonLink || '';
            formData.append(config.fields.firstLessonLink, firstLessonLink);

            // Log submission data in debug mode
            if (CONFIG.features.debugMode) {
                console.log('[GoogleForms] Submitting data:', Object.fromEntries(formData));
            }

            // Submit to Google Form
            // Note: Using no-cors mode means we can't read the response
            await fetch(config.baseUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            console.log('[GoogleForms] Form submitted successfully');
            return true;

        } catch (error) {
            console.error('[GoogleForms] Error submitting form:', error);
            // Even on error, we might want to proceed (CORS blocks response)
            // In a more robust implementation, you could retry or notify user
            return true; // Still return true to allow flow to continue
        }
    },

    /**
     * Alternative submission method using hidden iframe
     * @param {object} userData - Complete user data object
     * @returns {Promise<boolean>} Success status
     */
    async submitViaIframe(userData) {
        return new Promise((resolve) => {
            try {
                // Create hidden iframe
                const iframe = document.createElement('iframe');
                iframe.name = 'hidden_iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);

                // Create form
                const form = document.createElement('form');
                form.action = CONFIG.googleForm.baseUrl;
                form.method = 'POST';
                form.target = 'hidden_iframe';

                // Add all form fields
                const config = CONFIG.googleForm.fields;
                const formFields = {
                    [config.nativeLanguage]: userData.nativeLanguage || Storage.getUserData().language || 'other',
                    [config.currentLevel]: userData.currentLevel || '',
                    [config.goal]: userData.goal || '',
                    [config.why]: userData.why || '',
                    [config.targetScore]: userData.targetLevel || '',
                    [config.targetDate]: userData.targetDate || '',
                    [config.dailyTime]: userData.dailyTime || '',
                    [config.devices]: Array.isArray(userData.devices) ? userData.devices.join(', ') : userData.devices || '',
                    [config.habits]: Array.isArray(userData.habits) ? userData.habits.join(', ') : userData.habits || '',
                    [config.methods]: Array.isArray(userData.methods) ? userData.methods.join(', ') : userData.methods || '',
                    [config.name]: userData.name || '',
                    [config.email]: userData.email || '',
                    [config.phone]: userData.phone || '',
                    [config.planId]: userData.planId || Storage.get('selectedPlanId', 'no-match'),
                    [config.planDocLink]: userData.planDocLink || '',
                    [config.firstLessonLink]: userData.firstLessonLink || ''
                };

                // Create hidden inputs
                Object.entries(formFields).forEach(([name, value]) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = name;
                    input.value = value;
                    form.appendChild(input);
                });

                document.body.appendChild(form);

                // Submit form
                form.submit();

                // Clean up after a delay
                setTimeout(() => {
                    document.body.removeChild(form);
                    document.body.removeChild(iframe);
                    resolve(true);
                }, 1000);

                console.log('[GoogleForms] Form submitted via iframe');

            } catch (error) {
                console.error('[GoogleForms] Error submitting via iframe:', error);
                resolve(false);
            }
        });
    },

    /**
     * Call Apps Script Web App to generate plan and get URL
     * @param {object} userData - User Data
     * @returns {Promise<string|null>} The generated Doc URL or null on error
     */
    async generatePersonalPlan(userData) {
        try {
            const scriptUrl = CONFIG.googleForm.scriptUrl;
            if (!scriptUrl) {
                console.warn("[GoogleForms] No scriptUrl configured. Skipping generation.");
                return null;
            }

            const params = new URLSearchParams({
                name: userData.name || 'User',
                email: userData.email,
                planId: userData.planId || '',
                nativeLanguage: userData.nativeLanguage || 'en',
                templateId: userData.templateId || '',
                requiredHours: userData.requiredHours || '',
                currentLevel: userData.currentLevel || '',
                targetLevel: userData.targetLevel || '',
                targetDate: userData.targetDate || ''
            });

            const url = `${scriptUrl}?${params.toString()}`;
            console.log("[GoogleForms] Calling Script:", url);

            const response = await fetch(url);
            const data = await response.json();

            if (data.status === 'success' && data.url) {
                console.log("[GoogleForms] Plan Generated:", data.url);
                return data.url;
            } else {
                console.error("[GoogleForms] Script Error:", data.message);
                return null;
            }

        } catch (error) {
            console.error("[GoogleForms] Network/Parsing Error:", error);
            return null;
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GoogleForms;
}
