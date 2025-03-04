// Константы и маппинг типов
const TYPE_MAPPING = {
    tech: ["tech", "engineering", "it", "машиностроение", "робототехника"],
    science: ["science", "research", "medicine", "биология", "физика"],
    social: ["social", "education", "psychology", "педагогика"],
    creative: ["creative", "art", "design", "архитектура"]
};

// Данные вузов (20 элементов)
const universities = 
    {
        name: "Московский государственный университет им. М.В. Ломоносова (МГУ)",
        type: "science",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Moscow_State_University_1.jpg",
        programs: ["Естественные науки", "Математика", "Физика", "Экономика", "IT", "Юриспруденция"],
        info: "Первый и крупнейший вуз России, известный фундаментальным подходом к науке.",
        budget: 3952,
        rating: 9.8
    },
    {
        name: "Московский государственный технический университет им. Н.Э. Баумана (МГТУ)",
        type: "tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Bauman_Moscow_State_Technical_University-8.jpg",
        programs: ["Инженерия", "Машиностроение", "Робототехника", "Информационные технологии"],
        info: "Ведущий технический университет с современными лабораториями.",
        budget: 2500,
        rating: 9.6
    },
    {
        name: "Московский государственный институт международных отношений (МГИМО)",
        type: "international",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/MGIMO_2015-04-18.jpg",
        programs: ["Международные отношения", "Дипломатия", "Международное право", "Политология"],
        info: "Элитный вуз для подготовки дипломатов и международных экспертов.",
        budget: 1200,
        rating: 9.7
    },
    {
        name: "Национальный исследовательский университет «Высшая школа экономики» (ВШЭ)",
        type: "economics",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/HSE_main_building_2017.jpg",
        programs: ["Экономика", "Социология", "Бизнес-информатика", "Дизайн"],
        info: "Лидер в области социально-экономического образования.",
        budget: 3500,
        rating: 9.5
    },
    {
        name: "Российский университет дружбы народов (РУДН)",
        type: "international",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/RUDN_University_2013-06-22_1.jpg",
        programs: ["Лингвистика", "Медицина", "Экономика", "Юриспруденция"],
        info: "Университет с мультикультурной средой и программами на 7 языках.",
        budget: 2800,
        rating: 9.3
    },
    {
        name: "Первый Московский государственный медицинский университет им. И.М. Сеченова)",
        type: "medical",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/I.M._Sechenov_First_MSMU_14-2015_img11.jpg",
        programs: ["Лечебное дело", "Стоматология", "Фармация", "Биомедицина"],
        info: "Главный медицинский вуз страны с клиническими базами.",
        budget: 1800,
        rating: 9.4
    },
    {
        name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)",
        type: "management",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/RANEPA_Building_on_Vernadskogo_Prospekt.jpg",
        programs: ["Государственное управление", "Менеджмент", "Юриспруденция"],
        info: "Подготовка управленцев для госслужбы и бизнеса.",
        budget: 2200,
        rating: 9.2
    },
    {
        name: "Московский государственный академический художественный институт им. В.И. Сурикова)",
        type: "art",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Surikov_Institute_2014.jpg",
        programs: ["Живопись", "Графика", "Скульптура", "Архитектура"],
        info: "Ведущий художественный вуз с вековыми традициями.",
        budget: 800,
        rating: 9.1
    },
    {
        name: "Московский финансово-юридический университет",
        type: "law",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
        programs: ["Финансы", "Юриспруденция", "Экономическое право"],
        info: "Специализация на юридическо-экономическом профиле.",
        budget: 1500,
        rating: 8.9
    },
    {
        name: "Национальный исследовательский технологический университет «МИСиС»",
        type: "tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/NUST_MISiS_2.JPG",
        programs: ["Материаловедение", "Нанотехнологии", "Горное дело"],
        info: "Передовые исследования в области материаловедения.",
        budget: 2000,
        rating: 9.0
    },
    {
        name: "Московский авиационный институт (МАИ)",
        type: "tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/MAI_Volokolamskoe_51-3.jpg",
        programs: ["Авиастроение", "Космические системы", "Радиоэлектроника"],
        info: "Ключевой вуз аэрокосмической отрасли России.",
        budget: 2300,
        rating: 9.3
    },
    {
        name: "Московский политехнический университет",
        type: "tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Moscow_Polytechnic_University_01.jpg",
        programs: ["Робототехника", "Цифровое производство", "Транспортный дизайн"],
        info: "Интеграция инженерии и креативных технологий.",
        budget: 2100,
        rating: 8.8
    },
    {
        name: "Московский энергетический институт (МЭИ)",
        type: "tech",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/07/MEI_main_building.jpg",
        programs: ["Электроэнергетика", "Теплоэнергетика", "Альтернативная энергетика"],
        info: "Лидер в подготовке энергетиков и электротехников.",
        budget: 1900,
        rating: 8.7
    },
    {
        name: "Российский государственный гуманитарный университет (РГГУ)",
        type: "humanities",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/RGGU_2015.jpg",
        programs: ["История", "Философия", "Культурология"],
        info: "Крупнейший центр гуманитарного образования.",
        budget: 1700,
        rating: 8.6
    },
    {
        name: "Московский педагогический государственный университет (МПГУ)",
        type: "education",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/MPGU_2015-04-18.jpg",
        programs: ["Педагогика", "Психология", "Иностранные языки"],
        info: "Старейший педагогический вуз с 150-летней историей.",
        budget: 1600,
        rating: 8.5
    },
    {
        name: "Московский государственный юридический университет им. О.Е. Кутафина (МГЮА)",
        type: "law",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/MSAL_2015-04-18.jpg",
        programs: ["Юриспруденция", "Международное право", "Уголовное право"],
        info: "Ведущий юридический вуз с акцентом на практику.",
        budget: 1300,
        rating: 9.4
    },
    {
        name: "Государственный университет управления (ГУУ)",
        type: "management",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Guu.jpg",
        programs: ["Менеджмент", "Экономика", "Управление персоналом"],
        info: "Подготовка топ-менеджеров для бизнеса и госсектора.",
        budget: 1400,
        rating: 8.7
    },
    {
        name: "Московский государственный строительный университет (МГСУ)",
        type: "engineering",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/MGSU_2015-04-18.jpg",
        programs: ["Архитектура", "Строительство", "Градостроительство"],
        info: "Лидер в области строительных технологий и урбанистики.",
        budget: 1800,
        rating: 8.4
    },
    {
        name: "Российский государственный социальный университет (РГСУ)",
        type: "social",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Russian_State_Social_University.jpg",
        programs: ["Социальная работа", "Психология", "Социология"],
        info: "Профильная подготовка социальных работников и психологов.",
        budget: 1100,
        rating: 8.3
    },
    {
        name: "Российский государственный университет нефти и газа им. И.М. Губкина",
        type: "engineering",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Gubkin_University_2015.jpg",
        programs: ["Нефтегазовое дело", "Химическая технология", "Геология"],
        info: "Главный вуз для нефтегазовой отрасли России.",
        budget: 2400,
        rating: 9.1
    }
];

// Глобальные переменные
let currentUni = null;
let currentTheme = localStorage.getItem('theme') || 'light';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadUniversities();
    loadProfessions();
    setupEventListeners();
});

// Загрузка вузов
function loadUniversities() {
    renderUniversities(universities);
}

// Рендер карточек вузов
function renderUniversities(data) {
    const container = document.getElementById('all-unis');
    container.innerHTML = data.map(uni => `
        <article class="uni-card" onclick="openUniModal('${uni.name}')">
            <div class="uni-image">
                <img src="${uni.image}" alt="${uni.name}" loading="lazy">
            </div>
            <div class="uni-content">
                <h4>${uni.name}</h4>
                <p class="preview-info">${uni.info}</p>
                <div class="uni-meta">
                    <span class="uni-rating">★ ${uni.rating}</span>
                    <span class="uni-budget">🎓 ${uni.budget}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Модальное окно вуза
function openUniModal(uniName) {
    currentUni = universities.find(u => u.name === uniName);
    
    document.getElementById('uni-modal-title').textContent = currentUni.name;
    document.getElementById('uni-modal-image').src = currentUni.image;
    document.getElementById('uni-programs').textContent = currentUni.programs.join(', ');
    document.getElementById('uni-info').textContent = currentUni.info;
    document.getElementById('uni-budget').textContent = currentUni.budget;
    
    document.getElementById('uni-modal').style.display = 'block';
}

// Обработчики событий
function setupEventListeners() {
    // Закрытие модалок
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close')) {
                modal.style.display = 'none';
            }
        });
    });

    // Фильтрация вузов
    document.getElementById('uni-filter').addEventListener('change', function() {
        const type = this.value;
        const filtered = type === 'all' 
            ? universities 
            : universities.filter(uni => 
                uni.type === type || 
                uni.programs.some(p => 
                    TYPE_MAPPING[type]?.some(t => p.toLowerCase().includes(t))
                )
            );
        renderUniversities(filtered);
    });

    // Профориентационный тест
    document.getElementById('career-test').addEventListener('submit', (e) => {
        e.preventDefault();
        const answers = new FormData(e.target);
        const result = { tech: 0, science: 0, social: 0, creative: 0 };

        answers.forEach(value => {
            if (result.hasOwnProperty(value)) result[value] += 1;
        });

        const maxType = Object.keys(result).reduce((a, b) => 
            result[a] > result[b] ? a : b
        );
        
        showTestResults(maxType);
    });

    // Переключение темы
    document.querySelector('.theme-switch').addEventListener('click', toggleTheme);
}

// Показать результаты теста
function showTestResults(type) {
    document.getElementById('test').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    const relevantTypes = TYPE_MAPPING[type];
    const filteredUnis = universities.filter(uni => 
        relevantTypes.includes(uni.type) ||
        uni.programs.some(p => 
            relevantTypes.some(t => p.toLowerCase().includes(t))
    );

    document.getElementById('result-text').innerHTML = `
        <h3>Рекомендуем: ${typeToLabel(type)}</h3>
        <p>Найдено ${filteredUnis.length} вузов</p>
    `;

    renderUniversities(filteredUnis, '#uni-list');
}

// Работа с избранным
function addToFavorites(uniName) {
    const favorites = new Set(JSON.parse(localStorage.getItem('favorites') || []);
    if (!favorites.has(uniName)) {
        favorites.add(uniName);
        localStorage.setItem('favorites', JSON.stringify([...favorites]));
        showToast('Добавлено в избранное!');
    }
}

// Показать уведомление
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Работа с темой
function initTheme() {
    document.body.className = currentTheme;
    document.querySelector('.theme-switch').textContent = 
        currentTheme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    initTheme();
}

// Вспомогательные функции
function typeToLabel(type) {
    const labels = {
        tech: 'Технические',
        science: 'Научные',
        social: 'Социальные', 
        creative: 'Творческие'
    };
    return labels[type] || type;
}
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​