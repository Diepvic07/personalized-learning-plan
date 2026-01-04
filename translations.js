/**
 * TRANSLATIONS
 * All UI text content in English (en), Vietnamese (vi), and Spanish (es)
 * Used across all screens in the English Learning Plan SPA
 */

var translations = {
    // ============================================================
    // SCREEN 1: LANGUAGE SELECTION
    // ============================================================
    languageSelection: {
        title: {
            en: "What is your native language?",
            vi: "Ngôn ngữ mẹ đẻ của bạn là gì?",
            es: "¿Cuál es tu idioma nativo?"
        },
        description: {
            en: "We use this to tailor your learning roadmap based on common linguistic challenges like grammar and pronunciation.",
            vi: "Chúng tôi sử dụng thông tin này để điều chỉnh lộ trình học tập của bạn dựa trên những thách thức ngôn ngữ chung như ngữ pháp và phát âm.",
            es: "Usamos esto para adaptar tu hoja de ruta de aprendizaje basada en desafíos lingüísticos comunes como la gramática y la pronunciación."
        },
        skip: {
            en: "Skip",
            vi: "Bỏ qua",
            es: "Omitir"
        },
        continue: {
            en: "Continue",
            vi: "Tiếp tục",
            es: "Continuar"
        },
        options: {
            vietnamese: {
                en: "Vietnamese",
                vi: "Tiếng Việt",
                es: "Vietnamita"
            },
            spanish: {
                en: "Spanish",
                vi: "Tiếng Tây Ban Nha",
                es: "Español"
            },
            other: {
                en: "Other",
                vi: "Khác",
                es: "Otro"
            }
        }
    },

    // ============================================================
    // SCREEN 2: QUESTIONNAIRE
    // ============================================================
    questionnaire: {
        progress: {
            step: {
                en: "Step 2 of 7",
                vi: "Bước 2 trên 7",
                es: "Paso 2 de 7"
            },
            completed: {
                en: "30% Completed",
                vi: "Hoàn thành 30%",
                es: "30% Completado"
            }
        },
        submit: {
            en: "Generate Strategy",
            vi: "Tạo lộ trình",
            es: "Generar estrategia"
        },
        errors: {
            currentLevel: {
                en: "Please select your current level",
                vi: "Vui lòng chọn trình độ hiện tại của bạn",
                es: "Por favor selecciona tu nivel actual"
            },
            goal: {
                en: "Please select your main objective",
                vi: "Vui lòng chọn mục tiêu chính của bạn",
                es: "Por favor selecciona tu objetivo principal"
            },
            targetLevel: {
                en: "Please select your target level",
                vi: "Vui lòng chọn trình độ mục tiêu của bạn",
                es: "Por favor selecciona tu nivel objetivo"
            },
            why: {
                en: "Please specify your goal",
                vi: "Vui lòng chỉ rõ mục tiêu của bạn",
                es: "Por favor especifica tu objetivo"
            },
            devices: {
                en: "At least one device must be selected",
                vi: "Vui lòng chọn ít nhất một thiết bị",
                es: "Debes seleccionar al menos un dispositivo"
            },
            habits: {
                en: "At least one habit must be selected",
                vi: "Vui lòng chọn ít nhất một thói quen",
                es: "Debes seleccionar al menos un hábito"
            },
            methods: {
                en: "At least one learning method must be selected",
                vi: "Vui lòng chọn ít nhất một phương pháp học",
                es: "Debes seleccionar al menos un método de aprendizaje"
            }
        },
        questions: {
            q1_level: {
                label: {
                    en: "Current English level:",
                    vi: "Trình độ tiếng Anh hiện tại:",
                    es: "Nivel actual de inglés:"
                },
                options: {
                    a1: {
                        en: "I can barely understand spoken English (A1)",
                        vi: "Tôi hầu như không hiểu tiếng Anh giao tiếp (A1)",
                        es: "Apenas puedo entender inglés hablado (A1)"
                    },
                    a2: {
                        en: "I can understand basic or familiar topics, but I can't speak much (A2)",
                        vi: "Tôi hiểu các chủ đề cơ bản hoặc quen thuộc, nhưng không nói được nhiều (A2)",
                        es: "Puedo entender temas básicos o familiares, pero no puedo hablar mucho (A2)"
                    },
                    b1: {
                        en: "I can communicate fairly well on basic or familiar topics (B1)",
                        vi: "Tôi có thể giao tiếp khá tốt về các chủ đề cơ bản hoặc quen thuộc (B1)",
                        es: "Puedo comunicarme bastante bien en temas básicos o familiares (B1)"
                    },
                    b2: {
                        en: "I communicate quite well and just need to maintain my level (B2 and above)",
                        vi: "Tôi giao tiếp khá tốt và chỉ cần duy trì trình độ (B2 trở lên)",
                        es: "Me comunico bastante bien y solo necesito mantener mi nivel (B2 y superior)"
                    }
                }
            },
            q2_goal: {
                label: {
                    en: "What is your main objective?",
                    vi: "Mục tiêu chính của bạn là gì?",
                    es: "¿Cuál es tu objetivo principal?"
                },
                options: {
                    communication: {
                        en: "Communication",
                        vi: "Giao tiếp",
                        es: "Comunicación"
                    },
                    ielts: {
                        en: "IELTS certification",
                        vi: "Chứng chỉ IELTS",
                        es: "Certificación IELTS"
                    },
                    toeic: {
                        en: "TOEIC certification",
                        vi: "Chứng chỉ TOEIC",
                        es: "Certificación TOEIC"
                    }
                }
            },
            q3_target_level: {
                label: {
                    en: "What is your target level?",
                    vi: "Trình độ mục tiêu của bạn là gì?",
                    es: "¿Cuál es tu nivel objetivo?"
                },
                options: {
                    b1: {
                        en: "B1 (Basic communication) / 5.0 IELTS / 500 TOEIC",
                        vi: "B1 (Giao tiếp cơ bản) / 5.0 IELTS / 500 TOEIC",
                        es: "B1 (Comunicación básica) / 5.0 IELTS / 500 TOEIC"
                    },
                    b2: {
                        en: "B2 / 6.5 IELTS / 700 TOEIC",
                        vi: "B2 / 6.5 IELTS / 700 TOEIC",
                        es: "B2 / 6.5 IELTS / 700 TOEIC"
                    },
                    c1: {
                        en: "C1 / 7.0 IELTS / 900+ TOEIC",
                        vi: "C1 / 7.0 IELTS / 900+ TOEIC",
                        es: "C1 / 7.0 IELTS / 900+ TOEIC"
                    },
                    c2: {
                        en: "C2 / 7.5+ IELTS / > 900 TOEIC",
                        vi: "C2 / 7.5+ IELTS / > 900 TOEIC",
                        es: "C2 / 7.5+ IELTS / > 900 TOEIC"
                    }
                }
            },
            q4_why: {
                label: {
                    en: "Please specify your goal",
                    vi: "Vui lòng chỉ rõ mục tiêu của bạn",
                    es: "Por favor especifica tu objetivo"
                },
                options: {
                    everyday: {
                        en: "Everyday English",
                        vi: "Tiếng Anh hàng ngày",
                        es: "Inglés cotidiano"
                    },
                    job: {
                        en: "Job",
                        vi: "Công việc",
                        es: "Trabajo"
                    },
                    scholarship: {
                        en: "Scholarship",
                        vi: "Học bổng",
                        es: "Beca"
                    },
                    graduation: {
                        en: "Graduation",
                        vi: "Tốt nghiệp",
                        es: "Graduación"
                    },
                    kids: {
                        en: "Talk with Kids",
                        vi: "Nói chuyện với con",
                        es: "Hablar con niños"
                    },
                    business: {
                        en: "Business English",
                        vi: "Tiếng Anh thương mại",
                        es: "Inglés de negocios"
                    },
                    immigrants: {
                        en: "Immigrants",
                        vi: "Định cư",
                        es: "Inmigrantes"
                    },
                    other: {
                        en: "Other",
                        vi: "Khác",
                        es: "Otro"
                    }
                }
            },
            q5_target_date: {
                timelineTitle: {
                    en: "Timeline",
                    vi: "Dòng thời gian",
                    es: "Línea de tiempo"
                },
                label: {
                    en: "When do you want to reach that goal? eg: 09/2026",
                    vi: "Bạn muốn đạt mục tiêu đó khi nào? VD: 09/2026",
                    es: "¿Cuándo quieres alcanzar ese objetivo? ej: 09/2026"
                },
                placeholder: {
                    en: "MM/YYYY",
                    vi: "MM/YYYY",
                    es: "MM/YYYY"
                },
                errorFormat: {
                    en: "Format must be MM/YYYY (e.g. 12/2026)",
                    vi: "Định dạng phải là MM/YYYY (VD: 12/2026)",
                    es: "El formato debe ser MM/YYYY (ej. 12/2026)"
                },
                errorPast: {
                    en: "Please enter a future date",
                    vi: "Vui lòng nhập một ngày trong tương lai",
                    es: "Por favor ingresa una fecha futura"
                }
            },
            q6_daily_time: {
                label: {
                    en: "How long can you spend learning English every day?",
                    vi: "Bạn có thể dành bao nhiêu thời gian học tiếng Anh mỗi ngày?",
                    es: "¿Cuánto tiempo puedes dedicar a aprender inglés cada día?"
                },
                unit: {
                    en: "hours",
                    vi: "giờ",
                    es: "horas"
                }
            },
            q7_devices: {
                label: {
                    en: "Devices to learn (multiple choice):",
                    vi: "Thiết bị học (chọn nhiều):",
                    es: "Dispositivos para aprender (opción múltiple):"
                },
                options: {
                    mobile: {
                        en: "Mobile/Tablet",
                        vi: "Điện thoại/Máy tính bảng",
                        es: "Móvil/Tableta"
                    },
                    laptop: {
                        en: "Laptop",
                        vi: "Máy tính xách tay",
                        es: "Portátil"
                    },
                    both: {
                        en: "Both",
                        vi: "Cả hai",
                        es: "Ambos"
                    }
                }
            },
            q8_habits: {
                label: {
                    en: "Describe your habit (tick box):",
                    vi: "Mô tả thói quen của bạn (đánh dấu):",
                    es: "Describe tu hábito (marca):"
                },
                options: {
                    read_native: {
                        en: "I usually read in my native language",
                        vi: "Tôi thường đọc bằng tiếng mẹ đẻ",
                        es: "Usualmente leo en mi idioma nativo"
                    },
                    read_english: {
                        en: "I usually read in English",
                        vi: "Tôi thường đọc bằng tiếng Anh",
                        es: "Usualmente leo en inglés"
                    },
                    watch_native: {
                        en: "I usually watch YouTube or movies in my native language",
                        vi: "Tôi thường xem YouTube hoặc phim bằng tiếng mẹ đẻ",
                        es: "Usualmente veo YouTube o películas en mi idioma nativo"
                    },
                    watch_english: {
                        en: "I usually watch YouTube or movies in English",
                        vi: "Tôi thường xem YouTube hoặc phim bằng tiếng Anh",
                        es: "Usualmente veo YouTube o películas en inglés"
                    },
                    rarely_communicate: {
                        en: "I rarely communicate in English",
                        vi: "Tôi hiếm khi giao tiếp bằng tiếng Anh",
                        es: "Rara vez me comunico en inglés"
                    },
                    regularly_communicate: {
                        en: "I regularly communicate in English",
                        vi: "Tôi thường xuyên giao tiếp bằng tiếng Anh",
                        es: "Me comunico regularmente en inglés"
                    }
                }
            },
            q9_methods: {
                label: {
                    en: "How are you learning English (tick box):",
                    vi: "Bạn đang học tiếng Anh như thế nào (đánh dấu):",
                    es: "¿Cómo estás aprendiendo inglés (marca):"
                },
                options: {
                    not_studying: {
                        en: "I'm currently not studying",
                        vi: "Tôi hiện không học",
                        es: "Actualmente no estoy estudiando"
                    },
                    watching: {
                        en: "Watching English movies / YouTube videos",
                        vi: "Xem phim / video YouTube tiếng Anh",
                        es: "Viendo películas / videos de YouTube en inglés"
                    },
                    reading: {
                        en: "Reading books/articles in English",
                        vi: "Đọc sách/bài viết tiếng Anh",
                        es: "Leyendo libros/artículos en inglés"
                    },
                    center: {
                        en: "Studying at a language center",
                        vi: "Học tại trung tâm ngoại ngữ",
                        es: "Estudiando en un centro de idiomas"
                    },
                    textbooks: {
                        en: "Studying with textbooks",
                        vi: "Học với sách giáo khoa",
                        es: "Estudiando con libros de texto"
                    },
                    ai: {
                        en: "Chatting with AI (e.g. ChatGPT)",
                        vi: "Trò chuyện với AI (VD: ChatGPT)",
                        es: "Chateando con IA (ej. ChatGPT)"
                    },
                    tutor: {
                        en: "Practicing speaking with a teacher / tutors",
                        vi: "Luyện nói với giáo viên / gia sư",
                        es: "Practicando conversación con un profesor / tutores"
                    }
                }
            }
        },
        feasibility: {
            details: {
                en: "Need: {need}h | Have: {have}h",
                vi: "Cần: {need}h | Có: {have}h",
                es: "Necesitas: {need}h | Tienes: {have}h"
            },
            red_alert: {
                title: {
                    en: "Adjust Your Plan",
                    vi: "Điều chỉnh kế hoạch của bạn",
                    es: "Ajusta tu plan"
                },
                message: {
                    en: "Based on your current level and target, you need more time or daily hours to reach your goal by the target date.",
                    vi: "Dựa trên trình độ hiện tại và mục tiêu của bạn, bạn cần nhiều thời gian hơn hoặc tăng số giờ học mỗi ngày để đạt mục tiêu vào ngày đã chọn.",
                    es: "Según tu nivel actual y objetivo, necesitas más tiempo o más horas diarias para alcanzar tu meta en la fecha objetivo."
                },
                description: {
                    en: "Extend the target date or increase your daily hours to meet your goal in the target date and daily availability quiz.",
                    vi: "Kéo dài ngày mục tiêu hoặc tăng số giờ học mỗi ngày để đạt mục tiêu trong phần câu hỏi về ngày mục tiêu và thời gian rảnh mỗi ngày.",
                    es: "Extiende la fecha objetivo o aumenta tus horas diarias para cumplir tu meta en el cuestionario de fecha objetivo y disponibilidad diaria."
                },
                button: {
                    en: "Adjust Plan",
                    vi: "Điều chỉnh kế hoạch",
                    es: "Ajustar plan"
                }
            },
            green_light: {
                title: {
                    en: "Great! Your plan is feasible",
                    vi: "Tuyệt vời! Kế hoạch của bạn khả thi",
                    es: "¡Genial! Tu plan es factible"
                },
                message: {
                    en: "You have enough time to reach your goal with your current daily commitment.",
                    vi: "Bạn có đủ thời gian để đạt mục tiêu với cam kết học hàng ngày hiện tại.",
                    es: "Tienes suficiente tiempo para alcanzar tu objetivo con tu compromiso diario actual."
                },
                button: {
                    en: "See Study Plan",
                    vi: "Xem kế hoạch học tập",
                    es: "Ver plan de estudio"
                }
            }
        }
    },

    // ============================================================
    // SCREEN 3: STUDY PLAN
    // ============================================================
    studyPlan: {
        header: {
            title: {
                en: "Your Personalized Learning Plan",
                vi: "Kế hoạch học tập cá nhân hóa của bạn",
                es: "Tu plan de aprendizaje personalizado"
            },
            subtitle: {
                en: "Based on your goals and current level",
                vi: "Dựa trên mục tiêu và trình độ hiện tại của bạn",
                es: "Basado en tus objetivos y nivel actual"
            }
        },
        phase: {
            en: "Phase",
            vi: "Giai đoạn",
            es: "Fase"
        },
        tasks: {
            en: "Tasks",
            vi: "Nhiệm vụ",
            es: "Tareas"
        },
        button: {
            en: "Get My Study Plan",
            vi: "Nhận kế hoạch học tập của tôi",
            es: "Obtener mi plan de estudio"
        },
        noMatch: {
            title: {
                en: "We're Creating Your Custom Plan",
                vi: "Chúng tôi đang tạo kế hoạch tùy chỉnh cho bạn",
                es: "Estamos creando tu plan personalizado"
            },
            message: {
                en: "Your learning profile is unique! Our team will create a personalized plan and send it to your email within 24 hours.",
                vi: "Hồ sơ học tập của bạn rất đặc biệt! Đội ngũ của chúng tôi sẽ tạo một kế hoạch cá nhân hóa và gửi đến email của bạn trong vòng 24 giờ.",
                es: "¡Tu perfil de aprendizaje es único! Nuestro equipo creará un plan personalizado y lo enviará a tu correo electrónico en 24 horas."
            }
        }
    },

    // ============================================================
    // SCREEN 4: DATA SUBMISSION
    // ============================================================
    dataSubmission: {
        title: {
            en: "Get Your Plan via Email",
            vi: "Nhận kế hoạch qua Email",
            es: "Recibe tu plan por correo electrónico"
        },
        subtitle: {
            en: "We'll send your personalized learning plan to your inbox",
            vi: "Chúng tôi sẽ gửi kế hoạch học tập cá nhân hóa của bạn đến hộp thư",
            es: "Enviaremos tu plan de aprendizaje personalizado a tu bandeja de entrada"
        },
        fields: {
            name: {
                label: {
                    en: "Full Name",
                    vi: "Họ và tên",
                    es: "Nombre completo"
                },
                placeholder: {
                    en: "Enter your full name",
                    vi: "Nhập họ và tên của bạn",
                    es: "Ingresa tu nombre completo"
                }
            },
            email: {
                label: {
                    en: "Email Address",
                    vi: "Địa chỉ Email",
                    es: "Correo electrónico"
                },
                placeholder: {
                    en: "your.email@example.com",
                    vi: "email.cua.ban@example.com",
                    es: "tu.correo@ejemplo.com"
                }
            },
            phone: {
                label: {
                    en: "Phone Number",
                    vi: "Số điện thoại",
                    es: "Número de teléfono"
                },
                note: {
                    en: "(optional — for faster support)",
                    vi: "(tùy chọn — để được hỗ trợ nhanh hơn)",
                    es: "(opcional — para soporte más rápido)"
                },
                placeholder: {
                    en: "+84 123 456 789",
                    vi: "+84 123 456 789",
                    es: "+34 123 456 789"
                }
            }
        },
        button: {
            en: "Send My Plan",
            vi: "Gửi kế hoạch của tôi",
            es: "Enviar mi plan"
        },
        waitingEmail: {
            title: {
                en: "We are crafting your personalized English learning roadmap",
                vi: "Chúng tôi đang xây dựng lộ trình học tiếng Anh cá nhân hóa cho bạn",
                es: "Estamos elaborando tu hoja de ruta de aprendizaje de inglés personalizada"
            },
            message: {
                en: "It will be sent directly to your email shortly. Our team may also contact you via phone to discuss your goals in detail.",
                vi: "Nó sẽ được gửi trực tiếp đến email của bạn trong thời gian ngắn. Đội ngũ của chúng tôi cũng có thể liên hệ với bạn qua điện thoại để thảo luận chi tiết về mục tiêu của bạn.",
                es: "Se enviará directamente a tu correo electrónico en breve. Nuestro equipo también puede contactarte por teléfono para discutir tus objetivos en detalle."
            }
        }
    },

    // ============================================================
    // SCREEN 5: CONFIRMATION
    // ============================================================
    confirmation: {
        title: {
            en: "Your Personalized English Learning Plan is Ready! 🚀",
            vi: "Kế hoạch học tiếng Anh của bạn đã sẵn sàng! 🚀",
            es: "¡Tu Plan Personalizado de Aprendizaje de Inglés está Listo! 🚀"
        },
        message: {
            en: "Congratulations on prioritizing your personal growth! 🌟 We've sent your plan to your inbox. If you don't see it, please check your spam folder.",
            vi: "Chúc mừng bạn đã ưu tiên phát triển bản thân! 🌟 Chúng tôi đã gửi kế hoạch đến hộp thư của bạn. Vui lòng kiểm tra cả thư mục spam nhé.",
            es: "¡Felicitaciones por priorizar tu crecimiento personal! 🌟 Hemos enviado tu plan a tu bandeja de entrada. Por favor revisa también tu carpeta de spam."
        },
        subtitle: {
            en: "Ready to start your journey?",
            vi: "Sẵn sàng bắt đầu hành trình của bạn?",
            es: "¿Listo para comenzar tu viaje?"
        },
        button: {
            en: "Start Learning Now",
            vi: "Bắt đầu học ngay",
            es: "Empezar a aprender ahora"
        }
    },
    customEnd: {
        title: {
            en: "Thank You! 🎉",
            vi: "Cảm ơn bạn! 🎉",
            es: "¡Gracias! 🎉"
        },
        message: {
            en: "We'll send your custom learning plan to your email within 24 hours.",
            vi: "Chúng tôi sẽ gửi lộ trình học tùy chỉnh đến email của bạn trong vòng 24 giờ.",
            es: "Enviaremos tu plan de aprendizaje personalizado a tu correo electrónico en 24 horas."
        },
        note: {
            en: "You can close this window.",
            vi: "Bạn có thể đóng cửa sổ này.",
            es: "Puedes cerrar esta ventana."
        }
    },

    // ============================================================
    // SCREEN 6: COMMITMENT FLOW
    // ============================================================
    commitment: {
        modal1: {
            title: {
                en: "I promise to study for 5 minutes every day",
                vi: "Tôi hứa sẽ học 5 phút mỗi ngày",
                es: "Prometo estudiar 5 minutos todos los días"
            },
            message: {
                en: "Small, consistent steps lead to big results. Are you ready to commit?",
                vi: "Những bước nhỏ, kiên định sẽ dẫn đến kết quả lớn. Bạn đã sẵn sàng cam kết?",
                es: "Pequeños pasos consistentes conducen a grandes resultados. ¿Estás listo para comprometerte?"
            },
            button: {
                en: "I Promise",
                vi: "Tôi hứa",
                es: "Lo prometo"
            }
        },
        modal2: {
            title: {
                en: "I will dedicate 5 hours per week to my English journey",
                vi: "Tôi sẽ dành 5 giờ mỗi tuần cho hành trình tiếng Anh của tôi",
                es: "Dedicaré 5 horas por semana a mi viaje de inglés"
            },
            message: {
                en: "Consistency is the key to fluency. Can you commit to this?",
                vi: "Kiên định là chìa khóa để thành thạo. Bạn có thể cam kết điều này?",
                es: "La consistencia es la clave para la fluidez. ¿Puedes comprometerte con esto?"
            },
            button: {
                en: "I'm Committed",
                vi: "Tôi cam kết",
                es: "Estoy comprometido"
            }
        },
        modal3: {
            title: {
                en: "Building a new habit may feel uncomfortable at first.",
                vi: "Xây dựng thói quen mới có thể cảm thấy không thoải mái lúc đầu.",
                es: "Construir un nuevo hábito puede sentirse incómodo al principio."
            },
            quote: {
                en: "I choose courage over comfort—and I'm willing to try.",
                vi: "Tôi chọn can đảm thay vì thoải mái—và tôi sẵn sàng thử.",
                es: "Elijo el coraje sobre la comodidad—y estoy dispuesto a intentarlo."
            },
            button: {
                en: "I'm ready to try new habit",
                vi: "Tôi sẵn sàng thử thói quen mới",
                es: "Estoy listo para probar un nuevo hábito"
            }
        }
    },

    // ============================================================
    // SHARED: CONTACT BANNER (for Screens 7 & 8)
    // ============================================================
    contactBanner: {
        title: {
            en: "We'll be in touch within 24h",
            vi: "Chúng tôi sẽ liên hệ trong vòng 24h",
            es: "Nos pondremos en contacto en 24h"
        },
        message: {
            en: "eJOY will contact you within 24 working hours to discuss your personalized roadmap.",
            vi: "eJOY sẽ liên hệ với bạn trong vòng 24 giờ làm việc để thảo luận lộ trình cá nhân hóa của bạn.",
            es: "eJOY se pondrá en contacto contigo en 24 horas laborables para discutir tu hoja de ruta personalizada."
        }
    },

    // ============================================================
    // SCREEN 7: YOUTUBE VIDEO LESSON (Video Learners - Plans 2 & 4)
    // ============================================================
    youtubeLesson: {
        title: {
            en: "Start with your first lesson",
            vi: "Bắt đầu với bài học đầu tiên",
            es: "Comienza con tu primera lección"
        },
        subtitle: {
            en: "While you wait, begin building your daily habit with this quick 5-minute exercise.",
            vi: "Trong khi chờ đợi, hãy bắt đầu xây dựng thói quen hàng ngày với bài tập nhanh 5 phút này.",
            es: "Mientras esperas, comienza a construir tu hábito diario con este ejercicio rápido de 5 minutos."
        },
        roadmap: {
            label: {
                en: "YOUR ROADMAP • DAY",
                vi: "LỘ TRÌNH CỦA BẠN • NGÀY",
                es: "TU HOJA DE RUTA • DÍA"
            },
            day1: {
                en: "Day 1",
                vi: "Ngày 1",
                es: "Día 1"
            },
            day2: {
                en: "Day 2: Conversation",
                vi: "Ngày 2: Hội thoại",
                es: "Día 2: Conversación"
            },
            day3: {
                en: "Day 3: Application",
                vi: "Ngày 3: Ứng dụng",
                es: "Día 3: Aplicación"
            }
        },
        lesson: {
            badge: {
                en: "TODAY'S LESSON",
                vi: "BÀI HỌC HÔM NAY",
                es: "LECCIÓN DE HOY"
            },
            title: {
                en: "Essentials & Warm-up",
                vi: "Kiến thức cơ bản & Khởi động",
                es: "Fundamentos y calentamiento"
            },
            description: {
                en: "Simple exercises to get you started without feeling overwhelmed.",
                vi: "Bài tập đơn giản để bạn bắt đầu mà không cảm thấy choáng ngợp.",
                es: "Ejercicios simples para comenzar sin sentirte abrumado."
            },
            duration: {
                en: "5 min",
                vi: "5 phút",
                es: "5 min"
            },
            skills: {
                vocabulary: {
                    en: "Vocabulary",
                    vi: "Từ vựng",
                    es: "Vocabulario"
                },
                listening: {
                    en: "Listening",
                    vi: "Nghe",
                    es: "Escuchar"
                },
                reading: {
                    en: "Reading",
                    vi: "Đọc",
                    es: "Leer"
                },
                writing: {
                    en: "Writing",
                    vi: "Viết",
                    es: "Escribir"
                }
            }
        },
        button: {
            en: "👍 Start with a 5-minute lesson",
            vi: "👍 Bắt đầu với bài học 5 phút",
            es: "👍 Comenzar con una lección de 5 minutos"
        }
    },

    // ============================================================
    // SCREEN 8: AI ROLEPLAY (General Learners - All Other Plans)
    // ============================================================
    aiRoleplay: {
        badge: {
            en: "AI SUGGESTION",
            vi: "GỢI Ý TỪ AI",
            es: "SUGERENCIA DE IA"
        },
        title: {
            en: "Level up your speaking with AI Roleplay scenarios.",
            vi: "Nâng cao kỹ năng nói của bạn với các tình huống Nhập vai AI.",
            es: "Mejora tu habla con escenarios de juego de rol con IA."
        },
        subtitle: {
            en: "Practice real-world conversations in a safe environment before stepping out.",
            vi: "Thực hành các cuộc trò chuyện thực tế trong môi trường an toàn trước khi bước ra ngoài.",
            es: "Practica conversaciones del mundo real en un entorno seguro antes de salir."
        },
        tag: {
            recommended: {
                en: "RECOMMENDED",
                vi: "KHUYẾN NGHỊ",
                es: "RECOMENDADO"
            },
            speaking: {
                en: "SPEAKING",
                vi: "NÓI",
                es: "HABLAR"
            }
        },
        scenarios: {
            coffeeShop: {
                title: {
                    en: "Coffee Shop Order",
                    vi: "Gọi món tại quán cà phê",
                    es: "Pedido en cafetería"
                },
                description: {
                    en: "You'll act as a customer ordering a latte. The AI barista will ask for your preferences.",
                    vi: "Bạn sẽ đóng vai một khách hàng gọi món latte. AI barista sẽ hỏi về sở thích của bạn.",
                    es: "Actuarás como cliente pidiendo un café con leche. El barista de IA preguntará por tus preferencias."
                }
            },
            jobInterview: {
                title: {
                    en: "Job Interview Prep",
                    vi: "Chuẩn bị phỏng vấn xin việc",
                    es: "Preparación para entrevista de trabajo"
                }
            },
            hotelCheckin: {
                title: {
                    en: "Hotel Check-in",
                    vi: "Nhận phòng khách sạn",
                    es: "Check-in de hotel"
                }
            }
        },
        labels: {
            roleplay: {
                en: "AI ROLEPLAY",
                vi: "NHẬP VAI AI",
                es: "JUEGO DE ROL IA"
            },
            speaking: {
                en: "Speaking",
                vi: "Nói",
                es: "Hablar"
            },
            feedback: {
                en: "Feedback",
                vi: "Phản hồi",
                es: "Retroalimentación"
            },
            duration: {
                en: "min",
                vi: "phút",
                es: "min"
            },
            locked: {
                en: "Locked",
                vi: "Đã khóa",
                es: "Bloqueado"
            }
        },
        button: {
            en: "Start AI Conversation",
            vi: "Bắt đầu trò chuyện với AI",
            es: "Iniciar conversación con IA"
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
