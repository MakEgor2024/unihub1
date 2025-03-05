/* Данные вузов */
const universities = [
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
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/MAI_Volokolamskoe_51-3.jpg", // Исправленная строка
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

/* Массив вопросов теста (10 вопросов, 4 варианта ответов) */
const testQuestions = [
  {
    question: "1. Какой предмет в школе вам нравится больше всего?",
    options: [
      { text: "Математика и физика", value: "science" },
      { text: "Информатика и программирование", value: "tech" },
      { text: "История и обществознание", value: "social" },
      { text: "Изобразительное искусство", value: "creative" }
    ]
  },
  {
    question: "2. Как вы предпочитаете проводить свободное время?",
    options: [
      { text: "Решать головоломки и логические игры", value: "science" },
{ text: "Заниматься компьютерами и технологиями", value: "tech" },
      { text: "Общаться с друзьями и помогать другим", value: "social" },
      { text: "Рисовать, играть на инструментах, творить", value: "creative" }
    ]
  },
  {
    question: "3. Какой вид деятельности вам кажется наиболее интересным?",
    options: [
      { text: "Научные исследования и эксперименты", value: "science" },
      { text: "Разработка новых технологий и гаджетов", value: "tech" },
      { text: "Работа в команде и социальные проекты", value: "social" },
      { text: "Творческое самовыражение через искусство", value: "creative" }
    ]
  },
  {
    question: "4. Как вы относитесь к лабораторным экспериментам?",
    options: [
      { text: "Люблю эксперименты и научные открытия", value: "science" },
      { text: "Предпочитаю работать с современными технологиями", value: "tech" },
      { text: "Мне комфортнее работать в коллективе", value: "social" },
      { text: "Больше люблю творческие студии, чем лаборатории", value: "creative" }
    ]
  },
  {
    question: "5. Какую роль вы бы выбрали в школьном проекте?",
    options: [
      { text: "Исследователь, собирающий данные", value: "science" },
      { text: "Технический специалист, решающий задачи", value: "tech" },
      { text: "Лидер команды, организующий работу", value: "social" },
      { text: "Художник, разрабатывающий креативный дизайн", value: "creative" }
    ]
  },
  {
    question: "6. Какая профессия кажется вам наиболее привлекательной?",
    options: [
      { text: "Ученый, исследователь, биолог", value: "science" },
      { text: "Инженер, программист, разработчик", value: "tech" },
      { text: "Психолог, юрист, менеджер", value: "social" },
      { text: "Художник, дизайнер, архитектор", value: "creative" }
    ]
  },
  {
    question: "7. Как вы предпочитаете решать проблемы?",
    options: [
      { text: "Анализируя и проводя эксперименты", value: "science" },
      { text: "Используя современные технологии", value: "tech" },
      { text: "Обсуждая с людьми и находя компромисс", value: "social" },
      { text: "Ища нестандартные творческие решения", value: "creative" }
    ]
  },
  {
    question: "8. Какой тип задач вам больше нравится?",
    options: [
      { text: "Логические и математические задачи", value: "science" },
      { text: "Задачи по программированию и робототехнике", value: "tech" },
      { text: "Социальные задачи и работа с людьми", value: "social" },
      { text: "Задачи, связанные с дизайном и искусством", value: "creative" }
    ]
  },
  {
    question: "9. Какую деятельность вы выберете в летнем лагере?",
    options: [
      { text: "Научные эксперименты и исследования", value: "science" },
      { text: "Технические мастер-классы и робототехника", value: "tech" },
      { text: "Командные игры и волонтёрские проекты", value: "social" },
      { text: "Творческие мастерские и арт-курсы", value: "creative" }
    ]
  },
  {
    question: "10. Какая из этих сфер кажется вам наиболее вдохновляющей?",
    options: [
      { text: "Мир науки и открытий", value: "science" },
      { text: "Инновационные технологии и гаджеты", value: "tech" },
      { text: "Социальные проекты и помощь людям", value: "social" },
      { text: "Искусство, музыка и креатив", value: "creative" }
    ]
  }
];

/* Маппинг категорий на примерные профессии */
const categoryToProfessions = {
  tech: "Инженер, программист, разработчик, робототехник",
  science: "Ученый, исследователь, биолог, химик",
  social: "Психолог, юрист, менеджер, социальный работник",
  creative: "Художник, дизайнер, архитектор, педагог искусства"
};

/* Маппинг категорий на типы вузов */
const categoryToUniversityTypes = {
  tech: ["tech", "engineering"],
  science: ["science", "medical"],
  social: ["social", "management", "law"],
  creative: ["art", "education", "humanities"]
};

let currentUni = null;

/* Функция для загрузки карточек вузов */
function loadUniversities() {
  const container = document.getElementById('all-unis');
  container.innerHTML = universities.map(uni => `
<div class="uni-card" onclick="openUniModal('${uni.name}')">
      <div class="uni-image">
        <img src="${uni.image}" alt="${uni.name}">
      </div>
      <div class="uni-content">
        <h4>${uni.name}</h4>
        <p class="preview-info">${uni.info}</p>
        <div class="uni-meta">
          <span class="uni-rating">★ ${uni.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openUniModal(uniName) {
  currentUni = universities.find(u => u.name === uniName);
  if (currentUni) {
    document.getElementById('uni-modal-title').textContent = currentUni.name;
    document.getElementById('uni-modal-image').src = currentUni.image;
    document.getElementById('uni-programs').textContent = currentUni.programs.join(', ');
    document.getElementById('uni-info').textContent = currentUni.info;
    document.getElementById('uni-budget').textContent = currentUni.budget;
    document.getElementById('uni-modal').style.display = 'block';
  }
}

/* Обновленный обработчик событий */
document.addEventListener('DOMContentLoaded', () => {
  loadUniversities();
  setupEventListeners();
  initTheme();
  
  // Исправление для кнопки старта теста
  document.getElementById('start-test-btn').addEventListener('click', () => {
    document.getElementById('test-start').classList.add('hidden');
    document.getElementById('career-test').classList.remove('hidden');
    renderTestQuestions();
  });

  // Исправление для закрытия модальных окон
  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  // Обработчик для переключения темы
  document.querySelector('.theme-switch').addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelector('.theme-switch').textContent = isDark ? '☀️' : '🌙';
  });

  // Обработчик для кнопки профиля
  document.getElementById('profile-btn').addEventListener('click', () => {
    document.getElementById('profile-modal').style.display = 'block';
  });
});

/* Функция для рендеринга вопросов теста */
function renderTestQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = testQuestions.map((q, index) => {
    return `
      <div class="question">
        <p>${q.question}</p>
        <div class="options">
          ${q.options.map(option => `
            <label>
              <input type="radio" name="q${index + 1}" value="${option.value}" required>
              ${option.text}
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* Обработка отправки теста */
function handleTestSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const scores = { science: 0, tech: 0, social: 0, creative: 0 };
  
  for (let [key, value] of formData.entries()) {
    if (scores.hasOwnProperty(value)) {
      scores[value]++;
    }
  }
  
  let resultCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  showResults(resultCategory);
}

/* Функция показа результатов теста */
function showResults(category) {
  document.getElementById('test').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');
  
  const resultText = `
    <h3>Ваше направление: ${
      category === "tech" ? "Техническое" : 
      category === "science" ? "Научное" : 
      category === "social" ? "Социальное" : "Творческое"
    }</h3>
    <p>Примерные профессии: ${categoryToProfessions[category]}</p>
  `;
  document.getElementById('result-text').innerHTML = resultText;
  
  const allowedTypes = categoryToUniversityTypes[category];
  const filteredUnis = universities.filter(uni => allowedTypes.includes(uni.type));
  
  document.getElementById('uni-list').innerHTML = filteredUnis.map(uni => `
    <div class="uni-card" onclick="openUniModal('${uni.name}')">
      <div class="uni-image">
        <img src="${uni.image}" alt="${uni.name}">
      </div>
      <div class="uni-content">
        <h4>${uni.name}</h4>
        <p class="preview-info">${uni.info}</p>
        <div class="uni-meta">
          <span class="uni-rating">★ ${uni.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* Функция для инициализации темы */
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
  document.querySelector('.theme-switch').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

/* Функция для фильтрации вузов */
function setupEventListeners() {
  document.getElementById('uni-filter').addEventListener('change', function() {
    const filterValue = this.value;
    const container = document.getElementById('all-unis');
    if (filterValue === 'all') {
      loadUniversities();
    } else {
      container.innerHTML = universities.filter(uni => uni.type === filterValue).map(uni => `
        <div class="uni-card" onclick="openUniModal('${uni.name}')">
          <div class="uni-image">
            <img src="${uni.image}" alt="${uni.name}">
          </div>
<div class="uni-content">
            <h4>${uni.name}</h4>
            <p class="preview-info">${uni.info}</p>
            <div class="uni-meta">
              <span class="uni-rating">★ ${uni.rating}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  });
}

/* Заглушки для дополнительных функций */
function addToFavorites(uniName) {
  alert(`Добавлено в избранное: ${uniName}`);
}

function saveResult() {
  alert("Результат сохранен");
}

/* Оборачиваем все привязки событий в DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  loadUniversities();
  setupEventListeners();
  initTheme();
  
  document.getElementById('start-test-btn').addEventListener('click', () => {
    document.getElementById('test-start').classList.add('hidden');
    document.getElementById('career-test').classList.remove('hidden');
    renderTestQuestions();
  });
  
  document.getElementById('career-test').addEventListener('submit', handleTestSubmit);
  
  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    });
  });
});