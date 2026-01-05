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
            targetDate: {
                en: "Valid target date (MM/YYYY) is required",
                vi: "Vui lòng nhập ngày mục tiêu hợp lệ (MM/YYYY)",
                es: "Se requiere una fecha objetivo válida (MM/YYYY)"
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
                        es: "Apenas entiendo inglés hablado (A1)"
                    },
                    a2: {
                        en: "I can understand basic or familiar topics, but I can't speak much (A2)",
                        vi: "Tôi hiểu các chủ đề cơ bản hoặc quen thuộc, nhưng không nói được nhiều (A2)",
                        es: "Entiendo temas básicos o familiares, pero no hablo mucho (A2)"
                    },
                    b1: {
                        en: "I can communicate fairly well on basic or familiar topics (B1)",
                        vi: "Tôi có thể giao tiếp khá tốt về các chủ đề cơ bản hoặc quen thuộc (B1)",
                        es: "Me comunico bastante bien sobre temas básicos o familiares (B1)"
                    },
                    b2: {
                        en: "I communicate quite well and just need to maintain my level (B2 and above)",
                        vi: "Tôi giao tiếp khá tốt và chỉ cần duy trì trình độ (B2 trở lên)",
                        es: "Me comunico bien y solo necesito mantener mi nivel (B2 o superior)"
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
                    es: "¿Cuál es tu nivel deseado?"
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
                    es: "Por favor, especifica tu meta"
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
                        es: "Becas"
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
                        es: "Inmigración"
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
                    es: "¿Cuándo quieres alcanzar esa meta? (ej: 09/2026)"
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
                },
                errorDDMMYYYY: {
                    en: "Please use MM/YYYY format. Do not include the day.",
                    vi: "Vui lòng dùng định dạng MM/YYYY. Không bao gồm ngày.",
                    es: "Por favor use el formato MM/YYYY. No incluya el día."
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
                    es: "Dispositivos para aprender (selección múltiple):"
                },
                options: {
                    mobile: {
                        en: "Mobile/Tablet",
                        vi: "Điện thoại/Máy tính bảng",
                        es: "Móvil/iPad"
                    },
                    laptop: {
                        en: "Laptop",
                        vi: "Máy tính xách tay",
                        es: "Laptop"
                    },
                    both: {
                        en: "Both",
                        vi: "Cả hai",
                        es: "Ambos (Móvil/iPad y Laptop)"
                    }
                }
            },
            q8_habits: {
                label: {
                    en: "Describe your habit (tick box):",
                    vi: "Mô tả thói quen của bạn (đánh dấu):",
                    es: "Describe tus hábitos (marca la casilla):"
                },
                options: {
                    read_native: {
                        en: "I usually read in my native language",
                        vi: "Tôi thường đọc bằng tiếng mẹ đẻ",
                        es: "Normalmente leo en mi idioma nativo"
                    },
                    read_english: {
                        en: "I usually read in English",
                        vi: "Tôi thường đọc bằng tiếng Anh",
                        es: "Normalmente leo en inglés"
                    },
                    watch_native: {
                        en: "I usually watch YouTube or movies in my native language",
                        vi: "Tôi thường xem YouTube hoặc phim bằng tiếng mẹ đẻ",
                        es: "Normalmente veo YouTube o películas en mi idioma nativo"
                    },
                    watch_english: {
                        en: "I usually watch YouTube or movies in English",
                        vi: "Tôi thường xem YouTube hoặc phim bằng tiếng Anh",
                        es: "Normalmente veo YouTube o películas en inglés"
                    },
                    rarely_communicate: {
                        en: "I rarely communicate in English",
                        vi: "Tôi hiếm khi giao tiếp bằng tiếng Anh",
                        es: "Rara vez me comunico en inglés"
                    },
                    regularly_communicate: {
                        en: "I regularly communicate in English",
                        vi: "Tôi thường xuyên giao tiếp bằng tiếng Anh",
                        es: "Me comunico en inglés regularmente"
                    }
                }
            },
            q9_methods: {
                label: {
                    en: "How are you learning English (tick box):",
                    vi: "Bạn đang học tiếng Anh như thế nào (đánh dấu):",
                    es: "¿Cómo estás aprendiendo inglés? (marca la casilla):"
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
                        es: "Estudiando en una academia de idiomas"
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
                        es: "Practicando el habla con un profesor / tutores"
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
                    es: "Falta de Tiempo"
                },
                message: {
                    en: "Based on your current level and target, you need more time or daily hours to reach your goal by the target date.",
                    vi: "Dựa trên trình độ hiện tại và mục tiêu của bạn, bạn cần nhiều thời gian hơn hoặc tăng số giờ học mỗi ngày để đạt mục tiêu vào ngày đã chọn.",
                    es: "Para llegar al nivel seleccionado antes de la fecha objetivo, necesitas más horas. Tu horario actual no es suficiente."
                },
                description: {
                    en: "Extend the target date or increase your daily hours to meet your goal in the target date and daily availability quiz.",
                    vi: "Kéo dài ngày mục tiêu hoặc tăng số giờ học mỗi ngày để đạt mục tiêu trong phần câu hỏi về ngày mục tiêu và thời gian rảnh mỗi ngày.",
                    es: "Alerta: Extiende la fecha objetivo o aumenta tus horas diarias para cumplir tu meta según el cuestionario de disponibilidad diaria."
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
                    es: "Análisis Completo: Meta Alcanzable"
                },
                message: {
                    en: "You have enough time to reach your goal with your current daily commitment.",
                    vi: "Bạn có đủ thời gian để đạt mục tiêu với cam kết học hàng ngày hiện tại.",
                    es: "Vas por buen camino para tener éxito con tu compromiso actual."
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
            vi: "Bước cuối: Nhận lộ trình học qua email",
            es: "Paso final: Recibe tu plan de estudio por correo"
        },
        subtitle: {
            en: "We'll send your personalized learning plan to your inbox",
            vi: "Nhập thông tin chi tiết bên dưới để nhận ngay lộ trình học cá nhân hóa của bạn.",
            es: "Ingresa tus datos abajo para recibir tu plan personalizado al instante."
        },
        headerCommitment: {
            en: "Statement of Commitment",
            vi: "Cam kết mục tiêu",
            es: "Declaración de Compromiso"
        },
        fields: {
            name: {
                label: {
                    en: "Full Name",
                    vi: "Tên của bạn (bắt buộc)",
                    es: "Tu nombre (obligatorio)"
                },
                placeholder: {
                    en: "Enter your full name",
                    vi: "Nhập tên của bạn",
                    es: "Ingresa tu nombre"
                }
            },
            email: {
                label: {
                    en: "Email Address",
                    vi: "Email của bạn (bắt buộc)",
                    es: "Tu correo (obligatorio)"
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
                    vi: "Số điện thoại (tùy chọn)",
                    es: "Tu número de teléfono (opcional)"
                },
                note: {
                    en: "(optional)",
                    vi: "",
                    es: ""
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
            vi: "Gửi",
            es: "Enviar"
        },
        waitingEmail: {
            title: {
                en: "We are crafting your personalized English learning roadmap",
                vi: "Chúng tôi đang xây dựng lộ trình tiếng Anh cá nhân hóa cho bạn",
                es: "Estamos creando tu hoja de ruta personalizada"
            },
            message: {
                en: "It will be sent directly to your email shortly. Our team may also contact you via phone to discuss your goals in detail.",
                vi: "Lộ trình sẽ được gửi trực tiếp đến email của bạn trong giây lát. Đội ngũ của chúng tôi cũng có thể liên hệ qua điện thoại để thảo luận chi tiết hơn về mục tiêu của bạn.",
                es: "Se enviará directamente a tu correo en breve. Nuestro equipo podría contactarte por teléfono para discutir tus metas en detalle."
            }
        }
    },

    // ============================================================
    // SCREEN 5: CONFIRMATION
    // ============================================================
    confirmation: {
        title: {
            en: "Sent Successfully",
            vi: "Gửi thành công",
            es: "Enviado con éxito"
        },
        message: {
            en: "Your study plan will be sent to your email. Please check your inbox.",
            vi: "Lộ trình học sẽ được gửi đến email của bạn. Vui lòng kiểm tra hộp thư.",
            es: "Tu plan de estudio será enviado a tu correo. Por favor, revisa tu bandeja de entrada."
        },
        messageVariant: {
            en: "The eJOY team will contact you via phone to discuss your plan in detail.",
            vi: "Đội ngũ eJOY sẽ liên hệ qua điện thoại để thảo luận chi tiết hơn về kế hoạch học của bạn.",
            es: "El equipo de eJOY te contactará por teléfono para discutir tus metas en detalle."
        },
        subtitle: {
            en: "Ready to start your journey?",
            vi: "",
            es: ""
        },
        button: {
            en: "Start Learning Now",
            vi: "Bắt đầu học ngay",
            es: "Empieza a aprender ahora"
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
                en: "Statement of Commitment",
                vi: "Tuyên bố cam kết",
                es: "Declaración de Compromiso"
            },
            message: {
                en: "I promise to study at least 5 minutes every day.",
                vi: "Học ít nhất 5 phút mỗi ngày.",
                es: "Estudiar al menos 5 minutos cada día."
            },
            button: {
                en: "I Promise",
                vi: "Tôi cam kết",
                es: "Declaración de Compromiso"
            }
        },
        modal2: {
            title: {
                en: "Statement of Commitment",
                vi: "Tuyên bố cam kết",
                es: "Declaración de Compromiso"
            },
            message: {
                en: "Accumulate a minimum of 5 hours of learning in 30 days.",
                vi: "Tích lũy tối thiểu 5 giờ học trong 30 ngày.",
                es: "Acumular un mínimo de 5 horas de aprendizaje en 30 días."
            },
            button: {
                en: "I'm Committed",
                vi: "Tôi cam kết",
                es: "Me comprometo a aprender 5 min/día"
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
                vi: "Tôi chọn sự can đảm thay vì sự thoải mái và tôi sẵn sàng thử.",
                es: "Elijo el coraje sobre la comodidad, y estoy dispuesto/a a intentarlo."
            },
            button: {
                en: "I'm ready to try a new habit",
                vi: "Tôi sẵn sàng",
                es: "Estoy listo/a para probar un nuevo hábito"
            }
        }
    },

    // ============================================================
    // SCREEN 7: ONBOARDING (New Scenarios)
    // ============================================================
    onboarding: {
        scenario1: {
            title: {
                en: "You listen a lot but don't practice speaking enough.",
                vi: "Bạn nghe nhiều nhưng chưa luyện nói đủ.",
                es: "Escuchas mucho pero no practicas el habla lo suficiente."
            },
            message: {
                en: "Start speaking today to become fluent.",
                vi: "Hãy bắt đầu luyện nói ngay hôm nay để có thể giao tiếp trôi chảy",
                es: "Ver contenido en inglés ayuda a tus habilidades de escucha, pero hablar es lo que construye confianza y fluidez."
            },
            button: {
                en: "👉 Try an AI Roleplay lesson",
                vi: "👉 Thử ngay bài học nhập vai với AI",
                es: "👉 Prueba una lección de juego de roles con IA"
            }
        },
        scenario2: {
            title: {
                en: "Let's build a new English learning habit",
                vi: "Hãy cùng xây dựng thói quen học tiếng Anh mới",
                es: "Vamos a construir un nuevo hábito de aprendizaje de inglés: solo 5 minutos al día."
            },
            subtitle: {
                en: "Just 5 minutes a day...",
                vi: "Chỉ 5 phút mỗi ngày thôi..",
                es: "Una práctica breve y diaria es la forma más fácil de mejorar constantemente."
            },
            button: {
                en: "👉 Start with a 5-minute lesson",
                vi: "👉 Bắt đầu với bài học 5 phút",
                es: "👉 Empieza con una lección de 5 minutos"
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

    // Kept for backward compatibility if needed, but Onboarding keys above are preferred for the new flow
    youtubeLesson: {
        title: { en: "Start with your first lesson", vi: "Bắt đầu với bài học đầu tiên", es: "Comienza con tu primera lección" },
        subtitle: { en: "While you wait, begin building your daily habit with this quick 5-minute exercise.", vi: "Trong khi chờ đợi, hãy bắt đầu xây dựng thói quen hàng ngày với bài tập nhanh 5 phút này.", es: "Mientras esperas, comienza a construir tu hábito diario con este ejercicio rápido de 5 minutos." },
        roadmap: { label: { en: "YOUR ROADMAP • DAY", vi: "LỘ TRÌNH CỦA BẠN • NGÀY", es: "TU HOJA DE RUTA • DÍA" }, day1: { en: "Day 1", vi: "Ngày 1", es: "Día 1" }, day2: { en: "Day 2: Conversation", vi: "Ngày 2: Hội thoại", es: "Día 2: Conversación" }, day3: { en: "Day 3: Application", vi: "Ngày 3: Ứng dụng", es: "Día 3: Aplicación" } },
        lesson: { badge: { en: "TODAY'S LESSON", vi: "BÀI HỌC HÔM NAY", es: "LECCIÓN DE HOY" }, title: { en: "Essentials & Warm-up", vi: "Kiến thức cơ bản & Khởi động", es: "Fundamentos y calentamiento" }, description: { en: "Simple exercises to get you started without feeling overwhelmed.", vi: "Bài tập đơn giản để bạn bắt đầu mà không cảm thấy choáng ngợp.", es: "Ejercicios simples para comenzar sin sentirte abrumado." }, duration: { en: "5 min", vi: "5 phút", es: "5 min" }, skills: { vocabulary: { en: "Vocabulary", vi: "Từ vựng", es: "Vocabulario" }, listening: { en: "Listening", vi: "Nghe", es: "Escuchar" }, reading: { en: "Reading", vi: "Đọc", es: "Leer" }, writing: { en: "Writing", vi: "Viết", es: "Escribir" } } },
        button: { en: "👍 Start with a 5-minute lesson", vi: "👍 Bắt đầu với bài học 5 phút", es: "👍 Comenzar con una lección de 5 minutos" }
    },
    aiRoleplay: {
        badge: { en: "AI SUGGESTION", vi: "GỢI Ý TỪ AI", es: "SUGERENCIA DE IA" },
        title: { en: "Level up your speaking with AI Roleplay scenarios.", vi: "Nâng cao kỹ năng nói của bạn với các tình huống Nhập vai AI.", es: "Mejora tu habla con escenarios de juego de rol con IA." },
        subtitle: { en: "Practice real-world conversations in a safe environment before stepping out.", vi: "Thực hành các cuộc trò chuyện thực tế trong môi trường an toàn trước khi bước ra ngoài.", es: "Practica conversaciones del mundo real en un entorno seguro antes de salir." },
        tag: { recommended: { en: "RECOMMENDED", vi: "KHUYẾN NGHỊ", es: "RECOMENDADO" }, speaking: { en: "SPEAKING", vi: "NÓI", es: "HABLAR" } },
        scenarios: {
            coffeeShop: {
                title: { en: "Coffee Shop Order", vi: "Gọi món tại quán cà phê", es: "Pedido en cafetería" },
                description: { en: "You'll act as a customer ordering a latte. The AI barista will ask for your preferences.", vi: "Bạn sẽ đóng vai một khách hàng gọi món latte. AI barista sẽ hỏi về sở thích của bạn.", es: "Actuarás como cliente pidiendo un café con leche. El barista de IA preguntará por tus preferencias." }
            },
            jobInterview: { title: { en: "Job Interview Prep", vi: "Chuẩn bị phỏng vấn xin việc", es: "Preparación para entrevista de trabajo" } },
            hotelCheckin: { title: { en: "Hotel Check-in", vi: "Nhận phòng khách sạn", es: "Check-in de hotel" } }
        },
        labels: { roleplay: { en: "AI ROLEPLAY", vi: "NHẬP VAI AI", es: "JUEGO DE ROL IA" }, speaking: { en: "Speaking", vi: "Nói", es: "Hablar" }, feedback: { en: "Feedback", vi: "Phản hồi", es: "Retroalimentación" }, duration: { en: "min", vi: "phút", es: "min" }, locked: { en: "Locked", vi: "Đã khóa", es: "Bloqueado" } },
        button: { en: "Start AI Conversation", vi: "Bắt đầu trò chuyện với AI", es: "Iniciar conversación con IA" }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
