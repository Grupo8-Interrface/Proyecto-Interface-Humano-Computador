const translations = {
    en: {
      heroTitle: "Welcome to Relto",
      heroDescription: "Welcome to Relto! A platform of e-books that will take you to discover new worlds and adventures. Explore our collection of titles and find your next favorite fantasy read.",
      categoriesTitle: "Book Categories",
      categoryFantasy: "Fantasy",
      categorySciFi: "Science Fiction",
      categoryRomance: "Romance",
      categoryMystery: "Mystery",
      categoryHistorical: "Historical"
    },
    fr: {
      heroTitle: "Bienvenue sur Relto",
      heroDescription: "Bienvenue sur Relto ! Une plateforme de livres électroniques qui vous fera découvrir de nouveaux mondes et aventures. Explorez notre collection de titres et trouvez votre prochaine lecture fantastique préférée.",
      categoriesTitle: "Catégories de Livres",
      categoryFantasy: "Fantaisie",
      categorySciFi: "Science-Fiction",
      categoryRomance: "Romance",
      categoryMystery: "Mystère",
      categoryHistorical: "Historique"
    },
    de: {
      heroTitle: "Willkommen bei Relto",
      heroDescription: "Willkommen bei Relto! Eine Plattform für E-Books, die Sie zu neuen Welten und Abenteuern führt. Entdecken Sie unsere Sammlung von Titeln und finden Sie Ihren nächsten Lieblingsroman.",
      categoriesTitle: "Buchkategorien",
      categoryFantasy: "Fantasie",
      categorySciFi: "Science-Fiction",
      categoryRomance: "Romantik",
      categoryMystery: "Geheimnis",
      categoryHistorical: "Historisch"
    }
  };
  
  function changeLanguage(lang) {
    const elementsToTranslate = [
      "heroTitle",
      "heroDescription",
      "categoriesTitle",
      "categoryFantasy",
      "categorySciFi",
      "categoryRomance",
      "categoryMystery",
      "categoryHistorical"
    ];
  
    elementsToTranslate.forEach(id => {
      document.getElementById(id).textContent = translations[lang][id];
    });
  }
  
  function toggleLanguageMenu() {
    const menu = document.getElementById("languageMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  