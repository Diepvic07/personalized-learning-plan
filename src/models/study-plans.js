/**
 * STUDY PLANS / KNOWLEDGE BASE
 * Contains all predefined learning plans (Plans 1-12)
 * Based on persona mapping: Goal × Level × Device Group
 */

const PLANS = {
    // ========================================
    // COMMUNICATION PLANS (1-4)
    // ========================================

    1: {
        title: "Beginner Communication Plan (Mobile-Optimized)",
        goal: "Communication",
        levels: ["A1", "A2"],
        deviceGroup: "A",
        doc_en: "1EnxU_NvKJ8zQmZP7YFh3xK2Lw9R4VsT3",
        doc_vn: "1FpyVOxLKm9ArZqN8XkGi4yL10S5WuUc",
        phases: [
            {
                name: "Foundation Building",
                tasks: [
                    "Master basic greetings and introductions",
                    "Learn essential vocabulary for daily situations",
                    "Practice simple sentence structures",
                    "Build confidence with mobile flashcard app"
                ]
            },
            {
                name: "Conversation Practice",
                tasks: [
                    "AI roleplay scenarios for common situations",
                    "Listen to short podcast episodes on-the-go",
                    "Practice speaking with voice recording",
                    "Join mobile-based conversation groups"
                ]
            },
            {
                name: "Real-World Application",
                tasks: [
                    "Order food in English using mobile apps",
                    "Chat with language exchange partners",
                    "Watch short video clips with subtitles",
                    "Apply learned phrases in daily life"
                ]
            }
        ]
    },

    2: {
        title: "Intermediate Communication Plan (Mobile-Optimized)",
        goal: "Communication",
        levels: ["B1", "B2"],
        deviceGroup: "A",
        doc_en: "1GqzWPyMKnAsSrOpN9ZlHjXm2QUOTE_1T6VxZy",
        doc_vn: "1HråXQzNLoBtTsPqO0AmIkYn3RquoteV7WyAz",
        phases: [
            {
                name: "Fluency Development",
                tasks: [
                    "Engage in complex AI conversations",
                    "Listen to podcasts at natural speed",
                    "Practice idiomatic expressions",
                    "Expand vocabulary through mobile reading"
                ]
            },
            {
                name: "Professional Skills",
                tasks: [
                    "Business communication scenarios",
                    "Email writing practice on mobile",
                    "Presentation skills with video feedback",
                    "Networking conversations"
                ]
            },
            {
                name: "Cultural Competence",
                tasks: [
                    "Understand cultural nuances in communication",
                    "Watch authentic content (movies, shows)",
                    "Participate in online discussions",
                    "Maintain daily English routine"
                ]
            }
        ]
    },

    3: {
        title: "Beginner Communication Plan (Laptop-Optimized)",
        goal: "Communication",
        levels: ["A1", "A2"],
        deviceGroup: "B",
        doc_en: "1IscYRaNMpCuUvTqPr1BnJlZo4SxW8XbB",
        doc_vn: "1JtdZSbONqDvVwUsQs2CoKmAp5TyX9YcC",
        phases: [
            {
                name: "Foundation Building",
                tasks: [
                    "Complete interactive online courses",
                    "Use typing practice for vocabulary building",
                    "Watch structured video lessons",
                    "Practice with desktop language software"
                ]
            },
            {
                name: "Structured Learning",
                tasks: [
                    "Work through comprehensive textbook materials",
                    "Practice grammar with online exercises",
                    "Join live virtual classes",
                    "Complete written assignments"
                ]
            },
            {
                name: "Application Practice",
                tasks: [
                    "Video call practice sessions",
                    "Write emails and short essays",
                    "Participate in online forums",
                    "Create presentations in English"
                ]
            }
        ]
    },

    4: {
        title: "Intermediate Communication Plan (Laptop-Optimized)",
        goal: "Communication",
        levels: ["B1", "B2"],
        deviceGroup: "B",
        doc_en: "1KueATcPOrEvXwYtRt3DpLnBq6UzY0AdD",
        doc_vn: "1LvfBUdQPsFwYxZuSu4EqMoCr7VaZ1BeE",
        phases: [
            {
                name: "Advanced Communication",
                tasks: [
                    "Participate in advanced online courses",
                    "Write long-form content (blogs, articles)",
                    "Join virtual debate clubs",
                    "Create multimedia presentations"
                ]
            },
            {
                name: "Professional Development",
                tasks: [
                    "Advanced business writing",
                    "Technical documentation practice",
                    "Lead online meetings in English",
                    "Develop industry-specific vocabulary"
                ]
            },
            {
                name: "Mastery & Integration",
                tasks: [
                    "Contribute to English-language projects",
                    "Mentor beginner learners online",
                    "Consume complex academic content",
                    "Build sustainable learning habits"
                ]
            }
        ]
    },

    // ========================================
    // IELTS PLANS (5-8)
    // ========================================

    5: {
        title: "IELTS Preparation - Beginner Level (Mobile)",
        goal: "IELTS",
        levels: ["A1", "A2"],
        deviceGroup: "A",
        doc_en: "1MwgCVeRQtGxZyBvTv5FrNpDs8WbA2CfF",
        doc_vn: "1NxhDWfSRuHyAzCwUw6GsOqEt9XcB3DgG",
        phases: [
            {
                name: "IELTS Foundations",
                tasks: [
                    "Understand IELTS test format",
                    "Build academic vocabulary",
                    "Practice basic reading with IELTS-style passages",
                    "Listen to IELTS practice audio on mobile"
                ]
            },
            {
                name: "Skill Development",
                tasks: [
                    "Writing Task 1: Describe graphs/charts",
                    "Writing Task 2: Essay structure basics",
                    "Speaking Part 1: Personal questions",
                    "Reading strategies for beginners"
                ]
            },
            {
                name: "Practice & Review",
                tasks: [
                    "Take mobile-based practice tests",
                    "Review and analyze mistakes",
                    "Build test-taking stamina",
                    "Track progress towards target score"
                ]
            }
        ]
    },

    6: {
        title: "IELTS Preparation - Intermediate Level (Mobile)",
        goal: "IELTS",
        levels: ["B1", "B2"],
        deviceGroup: "A",
        doc_en: "1OyiEXgTSvIzBaDxVx7HtPrFu0YdC4EhH",
        doc_vn: "1PzjFYhUTwJAaCbEyWy8IuQsGv1ZeD5iI",
        phases: [
            {
                name: "Intensive Skill Training",
                tasks: [
                    "Advanced reading comprehension techniques",
                    "Complex essay writing (Task 2)",
                    "Speaking Part 2 & 3: Extended discourse",
                    "Listening for detailed information"
                ]
            },
            {
                name: "Test Strategy Mastery",
                tasks: [
                    "Time management for each section",
                    "Common pitfalls and how to avoid them",
                    "Vocabulary for all IELTS topics",
                    "Practice with authentic IELTS materials"
                ]
            },
            {
                name: "Score Optimization",
                tasks: [
                    "Full-length practice tests (mobile app)",
                    "Personalized feedback on weaknesses",
                    "Band score improvement techniques",
                    "Final preparation and confidence building"
                ]
            }
        ]
    },

    7: {
        title: "IELTS Preparation - Beginner Level (Laptop)",
        goal: "IELTS",
        levels: ["A1", "A2"],
        deviceGroup: "B",
        doc_en: "1QakGZiVUxKBbDbFyZz9JvRtHw2AfE6jJ",
        doc_vn: "1RblHAjWVyLCcEcGzAa0KwSuIx3BgF7kK",
        phases: [
            {
                name: "Comprehensive Foundation",
                tasks: [
                    "Complete IELTS prep online courses",
                    "Practice writing essays with detailed feedback",
                    "Use desktop software for reading practice",
                    "Watch video lessons on test strategies"
                ]
            },
            {
                name: "Structured Practice",
                tasks: [
                    "Timed writing practice on laptop",
                    "Speaking practice with screen recording",
                    "Detailed answer analysis for reading/listening",
                    "Build academic word list"
                ]
            },
            {
                name: "Assessment & Improvement",
                tasks: [
                    "Full computer-based practice tests",
                    "Review sessions with online tutors",
                    "Create study schedules and track progress",
                    "Target weak areas with focused practice"
                ]
            }
        ]
    },

    8: {
        title: "IELTS Preparation - Intermediate Level (Laptop)",
        goal: "IELTS",
        levels: ["B1", "B2"],
        deviceGroup: "B",
        doc_en: "1ScmIBkXWzMDcFdHzBa1LxTvJy4ChG8lL",
        doc_vn: "1TdnJClYXaNCdGEIaCb2MyUwKz5DiH9mM",
        phases: [
            {
                name: "Advanced Preparation",
                tasks: [
                    "Master complex question types",
                    "Advanced academic writing techniques",
                    "Sophisticated vocabulary and collocations",
                    "Simulate real test conditions"
                ]
            },
            {
                name: "Performance Optimization",
                tasks: [
                    "Develop personal note-taking system",
                    "Perfect paragraph structure for writing",
                    "Enhance coherence and cohesion",
                    "Practice with band 7+ model answers"
                ]
            },
            {
                name: "Final Sprint",
                tasks: [
                    "Weekly full-length practice tests",
                    "Expert review of all submissions",
                    "Mental preparation and stress management",
                    "Last-minute tips and strategies"
                ]
            }
        ]
    },

    // ========================================
    // TOEIC PLANS (9-12)
    // ========================================

    9: {
        title: "TOEIC Preparation - Beginner Level (Mobile)",
        goal: "TOEIC",
        levels: ["A1", "A2"],
        deviceGroup: "A",
        doc_en: "1UeoKDmZYbOEfHfJzCc3NzVxLa6EjI0nN",
        doc_vn: "1VfpLEnAZcPFgIgKaDd4OaWyMb7FkJ1oO",
        phases: [
            {
                name: "TOEIC Basics",
                tasks: [
                    "Understand TOEIC test structure",
                    "Business vocabulary foundation",
                    "Practice Part 1: Photographs (mobile app)",
                    "Part 2: Question-Response practice"
                ]
            },
            {
                name: "Skill Building",
                tasks: [
                    "Part 3 & 4: Conversations and talks",
                    "Part 5 & 6: Grammar and reading",
                    "Part 7: Single passage comprehension",
                    "Time management basics"
                ]
            },
            {
                name: "Practice & Progress",
                tasks: [
                    "Daily practice with mobile TOEIC apps",
                    "Track scores part by part",
                    "Review common mistake patterns",
                    "Build test confidence"
                ]
            }
        ]
    },

    10: {
        title: "TOEIC Preparation - Intermediate Level (Mobile)",
        goal: "TOEIC",
        levels: ["B1", "B2"],
        deviceGroup: "A",
        doc_en: "1WgqMFoBAdQHhJhLbEe5PbXzNc8GlK2pP",
        doc_vn: "1XhrNGpCBeRIiKiMcFf6QcYaOd9HmL3qQ",
        phases: [
            {
                name: "Advanced Test Skills",
                tasks: [
                    "Master all 7 parts of TOEIC",
                    "Advanced business vocabulary",
                    "Speed reading for Part 7",
                    "Complex grammar patterns (Part 5/6)"
                ]
            },
            {
                name: "Score Maximization",
                tasks: [
                    "Practice with real test difficulty",
                    "Eliminate answer choice distractors",
                    "Improve listening accuracy",
                    "Perfect timing for each section"
                ]
            },
            {
                name: "Peak Performance",
                tasks: [
                    "Full-length timed practice tests",
                    "Target score strategies (700+, 850+, 950+)",
                    "Final review of weak areas",
                    "Test day preparation"
                ]
            }
        ]
    },

    11: {
        title: "TOEIC Preparation - Beginner Level (Laptop)",
        goal: "TOEIC",
        levels: ["A1", "A2"],
        deviceGroup: "B",
        doc_en: "1YisOHqDCfSJjLjNdGg7RdZaPe0InM4rR",
        doc_vn: "1ZjtPIrEDgTKkMkOeHh8SeAbQf1JoN5sS",
        phases: [
            {
                name: "Structured Learning",
                tasks: [
                    "Complete TOEIC online course modules",
                    "Practice all parts with desktop software",
                    "Build business English vocabulary lists",
                    "Grammar fundamentals review"
                ]
            },
            {
                name: "Practice Routine",
                tasks: [
                    "Listening practice with transcripts",
                    "Reading comprehension exercises",
                    "Grammar drills and quizzes",
                    "Weekly progress assessments"
                ]
            },
            {
                name: "Test Readiness",
                tasks: [
                    "Computer-based practice tests",
                    "Detailed score analysis",
                    "Personalized study plan adjustments",
                    "Confidence building exercises"
                ]
            }
        ]
    },

    12: {
        title: "TOEIC Preparation - Intermediate Level (Laptop)",
        goal: "TOEIC",
        levels: ["B1", "B2"],
        deviceGroup: "B",
        doc_en: "1AkuQJsFEhULlNlPfIi9TfBcRg2KpO6tT",
        doc_vn: "1BluRKtGFiVMmOmQgJj0UgCdSh3LqP7uU",
        phases: [
            {
                name: "Intensive Preparation",
                tasks: [
                    "Master advanced test-taking strategies",
                    "Complete comprehensive practice sets",
                    "Build specialized business vocabulary",
                    "Perfect grammar accuracy"
                ]
            },
            {
                name: "Precision Training",
                tasks: [
                    "Eliminate all common errors",
                    "Practice with authentic TOEIC materials",
                    "Speed vs. accuracy optimization",
                    "Part-specific drills for weak areas"
                ]
            },
            {
                name: "High Score Achievement",
                tasks: [
                    "Regular full-length simulations",
                    "Target 850+ score strategies",
                    "Final polish and review",
                    "Mental and physical test preparation"
                ]
            }
        ]
    }
};

/**
 * Determine the appropriate plan based on user data
 * @param {object} userData - User profile data
 * @returns {number|null} Plan ID (1-12) or null if no match
 */
function determinePersona(userData) {
    const { goal, currentLevel, deviceGroup } = userData;

    // Normalize levels for comparison
    const isBeginnerLevel = ['A1', 'A2'].includes(currentLevel);
    const isIntermediateLevel = ['B1', 'B2'].includes(currentLevel);

    // COMMUNICATION PLANS (1-4)
    if (goal === 'Communication') {
        if (isBeginnerLevel && deviceGroup === 'A') return 1;
        if (isIntermediateLevel && deviceGroup === 'A') return 2;
        if (isBeginnerLevel && deviceGroup === 'B') return 3;
        if (isIntermediateLevel && deviceGroup === 'B') return 4;
    }

    // IELTS PLANS (5-8)
    if (goal === 'IELTS') {
        if (isBeginnerLevel && deviceGroup === 'A') return 5;
        if (isIntermediateLevel && deviceGroup === 'A') return 6;
        if (isBeginnerLevel && deviceGroup === 'B') return 7;
        if (isIntermediateLevel && deviceGroup === 'B') return 8;
    }

    // TOEIC PLANS (9-12)
    if (goal === 'TOEIC') {
        if (isBeginnerLevel && deviceGroup === 'A') return 9;
        if (isIntermediateLevel && deviceGroup === 'A') return 10;
        if (isBeginnerLevel && deviceGroup === 'B') return 11;
        if (isIntermediateLevel && deviceGroup === 'B') return 12;
    }

    // No match found
    return null;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PLANS, determinePersona };
} else {
    // Make available globally in browser
    window.PLANS = PLANS;
    window.determinePersona = determinePersona;
}
