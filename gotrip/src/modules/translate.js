// Translate

export const languages = {
  en: {
    100: 'GoTrip',
    0: 'Home',
    1: 'Services',
    2: 'Pricing',
    3: 'Contacts',
    5: 'En',
    6: 'explore the world',
    7: 'Explore The Natural Beauty Of Halmahera With Us',
    8: 'explore the beauty of gods earth in a beautiful forest and have fun',
    9: 'Explore Now',
    10: 'Choice Of',
    11: 'Destinations',
    12: 'explore the beauty of gods earth in a beautiful forest and have fun',
    13: 'What do customers say about us?',
    14: 'Alpanasap',
    15: 'Japung, Indonesia',
    16: 'Very satisfying service makes it comfortable, a beautiful place in the world.',
    17: 'Prepare Yourself And Start Exploring With Us.',
    18: 'There is the best discount for you today.',
    19: 'Get Started',
    20: 'Subscribe To Our Newsletter',
    21: 'Subscribe',
  },

  ru: {
    100: 'Поход',
    0: 'Главная',
    1: 'Услуги',
    2: 'Цены',
    3: 'Контакты',
    5: 'Ru',
    6: 'исследовать мир',
    7: 'Исследуйте Природу Красоты Хальмахеры С Нами',
    8: 'исследуйте красоту божьей земли в красивом лесу и получайте удовольствие',
    9: 'Исследуйте',
    10: 'Выбор',
    11: 'Направления',
    12: 'исследуйте красоту божьей земли в красивом лесу',
    13: 'Что клиенты говорят о нас?',
    14: 'Алпанасап',
    15: 'Джапунг, Индонезия',
    16: 'Очень приятное обслуживание делает его удобным, красивым местом в мире.',
    17: 'Подготовьтесь И Начните Исследовать Вместе.',
    18: 'Сегодня для вас лучшая скидка.',
    19: 'Начать',
    20: 'Подписаться На Рассылку',
    21: 'Подписаться',
  },
};

export const language = document.querySelectorAll('.language');

export const setTexts = () => {
  const lang = localStorage.getItem('lang') || 'ru';
  const content = languages[lang];
  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text="${key}"]`);
    items.forEach((item) => (item.innerText = value));
  });
};

export const toggleLanguage = ({ target }) => {
  const { lang } = target.dataset;
  if (!lang) return;
  localStorage.setItem('lang', lang);
  setTexts();
};
setTexts();

language.forEach((lang) => lang.addEventListener('click', toggleLanguage));
setTexts();