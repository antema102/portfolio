// Internationalization (i18n) for Portfolio
// Manages French and English translations

const translations = {
  fr: {
    // Meta tags
    metaTitle: "Antema Nirina Andriamihaja - Développeur Full Stack | Portfolio",
    metaDescription:
      "Portfolio d'Antema Nirina Andriamihaja - Développeur Full Stack passionné spécialisé en React JS, Node JS, Laravel et développement web moderne. Découvrez mes projets et compétences.",
    metaKeywords:
      "développeur full stack, développeur web, React JS, Node JS, MongoDB, Laravel, PHP, portfolio développeur, Madagascar",

    // Navigation
    navAbout: "A propos",
    navProjects: "Mes projets",
    navSkills: "Compétences",
    navServices: "Mes Services",
    navHome: "Accueil",
    navGallery: "Galerie",
    navContact: "Contact",
    skipToContent: "Aller au contenu principal",

    // Welcome Popup
    welcomeTitle: "Bienvenue sur mon Portfolio !",
    welcomeGreeting:
      "Bonjour et bienvenue ! Je suis <strong>Antema Nirina Andriamihaja</strong>, développeur Full Stack passionné.",
    welcomeDescription:
      "Découvrez mes projets, compétences et n'hésitez pas à me contacter pour toute collaboration !",
    welcomeFeature1: "Développement Web & Mobile",
    welcomeFeature2: "Solutions Innovantes",
    welcomeFeature3: "Passion & Créativité",
    welcomeButton: "Découvrir mon travail",

    // Hero Section
    heroIAm: "Je suis",
    heroName: "Antema Nirina",
    heroTyped:
      "Web Designer, Développeur Web, Front End Développeur, Back End Développeur, FullStack Développeur",

    // About Section
    aboutTitle: "A Propos",
    aboutParagraph1:
      "Je suis développeur web et mobile avec plus de 3 ans d'expérience en développement full-stack. En parallèle, je réalise des missions en freelance, ce qui me permet de travailler sur des projets variés et de renforcer ma polyvalence.",
    aboutParagraph2:
      "Je maîtrise plusieurs langages et technologies tels que JavaScript, TypeScript, Python, HTML, CSS, Sass, Tailwind, ainsi que d'autres frameworks et outils du développement moderne.",
    aboutParagraph3:
      "Si vous avez un projet à me confier, n'hésitez pas à me contacter. Je suis disponible pour en discuter et voir ensemble comment le concrétiser. Je reste également ouvert à échanger sur de nouvelles idées de collaboration.",
    aboutName: "Nom :",
    aboutAddress: "Adresse :",
    aboutPostalCode: "Code Postal :",
    aboutEmail: "Email :",
    aboutPhone: "Numéro :",
    aboutDownload: "Téléchargement :",
    aboutDownloadCV: "Télécharger mon CV",
    aboutInterests: "Centres d'intérêt :",
    aboutMusic: "Musique",
    aboutTravel: "Voyage",
    aboutMovies: "Film",
    aboutSports: "Sport",

    // Projects Section
    projectsTitle: "Mes Projets",
    projectsSubtitle: "Extrait des projets que j'ai réalisés",
    projectODCTitle: "Application Web Gestion et de Reservation Salle",
    projectODCDescription1:
      "Ce projet est un front-end pour la gestion des salles à l'Orange Digital Center Madagascar.",
    projectODCDescription2:
      "Il permet aux utilisateurs de visualiser les salles disponibles, de réserver des salles pour des événements spécifiques, de gérer les réservations existantes, etc.",
    projectWipTitle: "Site vitrine outsourcing",
    projectWipFeatures:
      "SEO optimisé, suivi des performances via Google Analytics, design responsive, chargement rapide et expérience utilisateur améliorée.",
    projectIloTitle: "Application Web de Gestion commerciale",
    projectIloDescription1:
      "Ce projet vise à développer un logiciel complet de gestion des stocks et de gestion commerciale avec une gamme de fonctionnalités essentielles.",
    projectIloDescription2:
      "Il comprendra plusieurs modules, tels que la gestion des factures, des proformas, des avoirs, la gestion des devis, des clients et des produits.",
    projectEcotreeTitle: "Site Vitrine",
    projectEcotreeDescription:
      "Création de quelques sites vitrines pour un client Freelance",
    frontEnd: "Front-End",
    backEnd: "Back-End",
    featuresOptimization: "Fonctionnalités & Optimisation",
    repository: "repository",
    demo: "Demo",
    viewProject: "Voir le projet",

    // Skills Section
    skillsTitle: "COMPÉTENCES FRONT & BACK-END",
    skillsDescription:
      "Maîtrise de plusieurs langage informatique et quelque logiciel de base nécessaire pour développement informatique , dont ces barres représente l'expérience par rapport aux logiciels et langages.",
    experienceTab: "Expérience",
    educationTab: "Education",

    // Experience
    exp1Title: "Développeur Front-end | Développeur Mobile",
    exp1Period: "Septembre 2024 - Actuel",
    exp1Company: "WipWork – Antananarivo – CDI",
    exp1Item1:
      "Développement d'interfaces utilisateur réactives et attrayantes avec HTML, CSS et JavaScript",
    exp1Item2:
      "Utilisation de React.js pour créer des interfaces dynamiques et performantes",
    exp1Item3:
      "Adaptation des pages web aux formats desktop, mobile et tablette (responsive design)",
    exp1Item4:
      "Optimisation du code front-end pour améliorer les performances",
    exp1Item5:
      "Collaboration avec les équipes de design pour transformer les maquettes Figma en applications fonctionnelles",

    exp2Title: "Développeur Full Stack Python",
    exp2Period: "Novembre 2024 - Actuel",
    exp2Company: "Maurice – Freelance",
    exp2Item1:
      "Réalisation de web scraping avancé avec Selenium, BeautifulSoup et Requests pour extraire des données dynamiques",
    exp2Item2:
      "Développement d'API REST légères et efficaces avec Flask pour exposer et structurer les données collectées",
    exp2Item3:
      "Automatisation de scripts Python pour des tâches répétitives : collecte de données, génération de rapports, traitement d'images",
    exp2Item4:
      "Adhésion aux bonnes pratiques : gestion des erreurs, temporisation, user-agents dynamiques, utilisation de proxies",
    exp2Item5:
      "Mise en place de cron jobs ou de déclencheurs automatiques pour exécuter les scripts à intervalles réguliers",

    exp3Title: "Intégrateur Web",
    exp3Period: "Mars 2024 - Septembre 2024",
    exp3Company: "Afi Assurance – Antananarivo – CDD",
    exp3Item1:
      "Collaboration étroite avec les designers pour l'intégration des maquettes en code sur des applications web et mobiles",
    exp3Item2:
      "Utilisation de React.js, Next.js, React Native pour le développement d'interfaces modernes et performantes",
    exp3Item3:
      "Mise en place de bonnes pratiques de performance : minification du code, optimisation des images et des scripts JavaScript",
    exp3Item4:
      "Adaptation du code aux standards SEO (balisage sémantique, accessibilité)",
    exp3Item5:
      "Amélioration de la responsivité pour une expérience optimale sur mobile et tablette",
    exp3Item6:
      "Développement back-end avec Node.js et gestion de version avec GitHub",
    exp3Item7:
      "Suivi de projet agile avec Jira et collaboration en équipe sur des plateformes de gestion (Trello, Slack, etc.)",

    exp4Title: "Développeur Full Stack",
    exp4Period: "Décembre 2023 - Février 2024",
    exp4Company: "Gate Company International – Antananarivo – Stage",
    exp4Description: "Projet Gestion des hôtellerie",
    exp4Item1:
      "Création des interfaces mobile (React Native) et web (React.js) en TypeScript, avec linting ESLint 7",
    exp4Item2:
      "Intégration front-end responsive, en collaboration avec le designer",
    exp4Item3:
      "Développement back-end avec Node.js, Express et MongoDB pour la gestion des réservations",
    exp4Item4: "Suivi de projet avec Jira, versioning via GitHub",

    exp5Title: "Stage de 6 mois en Développeur Full Stack",
    exp5Period: "Mai 2023 - Octobre 2023",
    exp5Company: "Orange Digital Center Madagascar",
    exp5Item1:
      "Projet pour le développement complet d'une application web de gestion de salles et de réservation",
    exp5Item2:
      "Conception avancée du frontend avec React JS, HTML, CSS et Bootstrap 4",
    exp5Item3:
      "Mise en place performante du backend avec MongoDB, Express et Node.js",

    exp6Title: "Stage de 3 mois en Développement Web PHP",
    exp6Period: "Juillet 2021 - Septembre 2021",
    exp6Company: "ILO Madagascar",
    exp6Item1:
      "Conception et développement d'une application web robuste destinée à la gestion complète des stocks et des activités commerciales",
    exp6Item2:
      "Technologies utilisées : PHP, Bootstrap, CSS, HTML, JavaScript, jQuery, Ajax, MySQL, Laravel",
    exp6Item3:
      "Mise en place des fonctionnalités avancées : gestion en temps réel des stocks, suivi des mouvements de stock",

    // Education
    edu1Title: "Universite CNTEMAD",
    edu1Description1:
      "CNTEMAD est le pionnier du télé-enseignement à Madagascar.",
    edu1Description2:
      "Il assure des formations à distance dans plusieurs domaines, permettant l'accès aux études supérieures à des milliers d'étudiants de l'île.",
    edu1MoreInfo: "Plus d'infos",
    edu1Path: "Parcours:",
    edu1PathDescription:
      "Informatique Base de données et Génie Logiciel (BDGL)",
    edu1Degree1: "Master 1 en Informatique (2021-2022)",
    edu1Degree2: "Licence en Informatique (2018-2021)",

    edu2Title: "Lycée Jules Ferry Faravohitra",
    edu2Description1:
      "Le lycée Jules Ferry est un lycée malgache public d'enseignement général. L'enseignement se fait en français et les élèves préparent un baccalauréat général littéraire ou scientifique.",
    edu2Description2:
      "Le lycée Jules Ferry est jumelé avec le lycée Grandmont de Tours depuis 1996. Des échanges pédagogiques et des actions de partenariat ont lieu chaque année.",
    edu2Period: "2018",
    edu2Degree: "Baccalauréat série D",

    // Services Section
    servicesTitle: "Mes Services",
    service1Title: "Développement d'applications (Programmation)",
    service1Description:
      "Aisance avec le langage Java pour la programmation d'applications (POO, JavaFX et Swing pour l'interface graphique)",
    service2Title: "Développement Web",
    service2Description:
      "Du côté back-end : bonne maîtrise du MVC avec des frameworks nécessaires côté back-end (Java JEE, Spring, EJB, Hibernate, PHP, CodeIgniter, Symfony, JavaScript, etc.) Du côté front-end : bonne maîtrise du langage JS & CSS avec quelques frameworks (Bootstrap, React JS, jQuery, etc.) Avec une bonne connaissance et expérience des web services (AZURE, Architecture REST - SOAP).",
    service3Title: "Développement Mobile",
    service3Description:
      "Développement mobile multi-plateforme avec Ionic 4, React Native, Flutter",
    service4Title: "Multimédia & Design",
    service4Description:
      "Une bonne maîtrise de Photoshop et une connaissance moyenne des logiciels de montage vidéo et 3D comme After Effects & Cinema 4D",

    // Contact Section
    contactTitle: "Contacts",
    contactDescription:
      "Voici ci-dessous mes contacts et mon adresse pour me contacter en cas de besoin. Je suis toujours disponible 24h/24 et 7j/7 pour tous services et contacts.",
    contactAddress: "Adresse",
    contactPhone: "Numéro :",
    contactEmail: "Email :",
    contactFollow: "Suivre :",
    contactFormName: "Votre Nom",
    contactFormEmail: "Votre Email",
    contactFormSubject: "Sujet",
    contactFormMessage: "Message",
    contactFormSend: "Envoyer Message",
    copyEmail: "Copier l'email",
    emailCopied: "Email copié!",

    // Footer
    footerCopyright: ", All Right Reserved.",

    // Form validation messages
    fillAllFields: "Veuillez remplir tous les champs.",
    invalidEmail: "Veuillez entrer un email valide.",
    sending: "Envoi en cours...",
    successMessage:
      "Message envoyé avec succès! ✅ Je vous répondrai bientôt.",
    errorMessage: "Erreur lors de l'envoi ❌ : ",
  },

  en: {
    // Meta tags
    metaTitle: "Antema Nirina Andriamihaja - Full Stack Developer | Portfolio",
    metaDescription:
      "Portfolio of Antema Nirina Andriamihaja - Passionate Full Stack Developer specialized in React JS, Node JS, Laravel and modern web development. Discover my projects and skills.",
    metaKeywords:
      "full stack developer, web developer, React JS, Node JS, MongoDB, Laravel, PHP, developer portfolio, Madagascar",

    // Navigation
    navAbout: "About",
    navProjects: "My Projects",
    navSkills: "Skills",
    navServices: "My Services",
    navHome: "Home",
    navGallery: "Gallery",
    navContact: "Contact",
    skipToContent: "Skip to main content",

    // Welcome Popup
    welcomeTitle: "Welcome to my Portfolio!",
    welcomeGreeting:
      "Hello and welcome! I'm <strong>Antema Nirina Andriamihaja</strong>, a passionate Full Stack developer.",
    welcomeDescription:
      "Discover my projects, skills and feel free to contact me for any collaboration!",
    welcomeFeature1: "Web & Mobile Development",
    welcomeFeature2: "Innovative Solutions",
    welcomeFeature3: "Passion & Creativity",
    welcomeButton: "Discover my work",

    // Hero Section
    heroIAm: "I am",
    heroName: "Antema Nirina",
    heroTyped:
      "Web Designer, Web Developer, Front End Developer, Back End Developer, FullStack Developer",

    // About Section
    aboutTitle: "About Me",
    aboutParagraph1:
      "I am a web and mobile developer with over 3 years of experience in full-stack development. At the same time, I carry out freelance missions, which allows me to work on various projects and strengthen my versatility.",
    aboutParagraph2:
      "I master several languages ​​and technologies such as JavaScript, TypeScript, Python, HTML, CSS, Sass, Tailwind, as well as other modern development frameworks and tools.",
    aboutParagraph3:
      "If you have a project to entrust to me, do not hesitate to contact me. I am available to discuss it and see together how to make it happen. I also remain open to exchanging new collaboration ideas.",
    aboutName: "Name:",
    aboutAddress: "Address:",
    aboutPostalCode: "Postal Code:",
    aboutEmail: "Email:",
    aboutPhone: "Phone:",
    aboutDownload: "Download:",
    aboutDownloadCV: "Download my CV",
    aboutInterests: "Interests:",
    aboutMusic: "Music",
    aboutTravel: "Travel",
    aboutMovies: "Movies",
    aboutSports: "Sports",

    // Projects Section
    projectsTitle: "My Projects",
    projectsSubtitle: "Extract of projects I have completed",
    projectODCTitle: "Room Management and Reservation Web Application",
    projectODCDescription1:
      "This project is a front-end for room management at the Orange Digital Center Madagascar.",
    projectODCDescription2:
      "It allows users to view available rooms, book rooms for specific events, manage existing reservations, etc.",
    projectWipTitle: "Outsourcing showcase website",
    projectWipFeatures:
      "Optimized SEO, performance tracking via Google Analytics, responsive design, fast loading and improved user experience.",
    projectIloTitle: "Business Management Web Application",
    projectIloDescription1:
      "This project aims to develop complete inventory management and business management software with a range of essential features.",
    projectIloDescription2:
      "It will include several modules, such as invoice management, proformas, credit notes, quote management, customers and products.",
    projectEcotreeTitle: "Showcase Website",
    projectEcotreeDescription:
      "Creation of some showcase sites for a Freelance client",
    frontEnd: "Front-End",
    backEnd: "Back-End",
    featuresOptimization: "Features & Optimization",
    repository: "repository",
    demo: "Demo",
    viewProject: "View project",

    // Skills Section
    skillsTitle: "FRONT & BACK-END SKILLS",
    skillsDescription:
      "Mastery of several computer languages ​​and some basic software necessary for computer development, of which these bars represent the experience compared to software and languages.",
    experienceTab: "Experience",
    educationTab: "Education",

    // Experience
    exp1Title: "Front-end Developer | Mobile Developer",
    exp1Period: "September 2024 - Present",
    exp1Company: "WipWork – Antananarivo – Permanent Contract",
    exp1Item1:
      "Development of responsive and attractive user interfaces with HTML, CSS and JavaScript",
    exp1Item2:
      "Using React.js to create dynamic and efficient interfaces",
    exp1Item3:
      "Adaptation of web pages to desktop, mobile and tablet formats (responsive design)",
    exp1Item4: "Front-end code optimization to improve performance",
    exp1Item5:
      "Collaboration with design teams to transform Figma mockups into functional applications",

    exp2Title: "Python Full Stack Developer",
    exp2Period: "November 2024 - Present",
    exp2Company: "Mauritius – Freelance",
    exp2Item1:
      "Performing advanced web scraping with Selenium, BeautifulSoup and Requests to extract dynamic data",
    exp2Item2:
      "Development of lightweight and efficient REST APIs with Flask to expose and structure collected data",
    exp2Item3:
      "Automation of Python scripts for repetitive tasks: data collection, report generation, image processing",
    exp2Item4:
      "Adherence to best practices: error handling, timing, dynamic user-agents, use of proxies",
    exp2Item5:
      "Setting up cron jobs or automatic triggers to execute scripts at regular intervals",

    exp3Title: "Web Integrator",
    exp3Period: "March 2024 - September 2024",
    exp3Company: "Afi Assurance – Antananarivo – Fixed-term Contract",
    exp3Item1:
      "Close collaboration with designers for the integration of mockups into code on web and mobile applications",
    exp3Item2:
      "Use of React.js, Next.js, React Native for the development of modern and efficient interfaces",
    exp3Item3:
      "Implementation of performance best practices: code minification, image and JavaScript script optimization",
    exp3Item4:
      "Code adaptation to SEO standards (semantic tagging, accessibility)",
    exp3Item5:
      "Improved responsiveness for optimal mobile and tablet experience",
    exp3Item6: "Back-end development with Node.js and version management with GitHub",
    exp3Item7:
      "Agile project tracking with Jira and team collaboration on management platforms (Trello, Slack, etc.)",

    exp4Title: "Full Stack Developer",
    exp4Period: "December 2023 - February 2024",
    exp4Company: "Gate Company International – Antananarivo – Internship",
    exp4Description: "Hotel Management Project",
    exp4Item1:
      "Creation of mobile (React Native) and web (React.js) interfaces in TypeScript, with ESLint 7 linting",
    exp4Item2:
      "Responsive front-end integration, in collaboration with the designer",
    exp4Item3:
      "Back-end development with Node.js, Express and MongoDB for reservation management",
    exp4Item4: "Project tracking with Jira, versioning via GitHub",

    exp5Title: "6-month internship as Full Stack Developer",
    exp5Period: "May 2023 - October 2023",
    exp5Company: "Orange Digital Center Madagascar",
    exp5Item1:
      "Project for the complete development of a web application for room management and reservation",
    exp5Item2:
      "Advanced frontend design with React JS, HTML, CSS and Bootstrap 4",
    exp5Item3:
      "High-performance backend implementation with MongoDB, Express and Node.js",

    exp6Title: "3-month internship in PHP Web Development",
    exp6Period: "July 2021 - September 2021",
    exp6Company: "ILO Madagascar",
    exp6Item1:
      "Design and development of a robust web application for complete inventory management and commercial activities",
    exp6Item2:
      "Technologies used: PHP, Bootstrap, CSS, HTML, JavaScript, jQuery, Ajax, MySQL, Laravel",
    exp6Item3:
      "Implementation of advanced features: real-time inventory management, inventory movement tracking",

    // Education
    edu1Title: "CNTEMAD University",
    edu1Description1:
      "CNTEMAD is the pioneer of distance learning in Madagascar.",
    edu1Description2:
      "It provides distance training in several areas, allowing access to higher education to thousands of students on the island.",
    edu1MoreInfo: "More info",
    edu1Path: "Path:",
    edu1PathDescription: "Computer Science Database and Software Engineering (BDGL)",
    edu1Degree1: "Master 1 in Computer Science (2021-2022)",
    edu1Degree2: "Bachelor's Degree in Computer Science (2018-2021)",

    edu2Title: "Jules Ferry Faravohitra High School",
    edu2Description1:
      "Jules Ferry High School is a Malagasy public general education high school. Teaching is in French and students prepare for a general literary or scientific baccalaureate.",
    edu2Description2:
      "Jules Ferry High School has been twinned with the Grandmont High School in Tours since 1996. Educational exchanges and partnership actions take place every year.",
    edu2Period: "2018",
    edu2Degree: "Baccalaureate series D",

    // Services Section
    servicesTitle: "My Services",
    service1Title: "Application Development (Programming)",
    service1Description:
      "Proficiency with Java for application programming (OOP, JavaFX and Swing for graphical interface)",
    service2Title: "Web Development",
    service2Description:
      "On the back-end side: good mastery of MVC with necessary frameworks on the back-end side (Java JEE, Spring, EJB, Hibernate, PHP, CodeIgniter, Symfony, JavaScript, etc.) On the front-end side: good mastery of JS & CSS language with some frameworks (Bootstrap, React JS, jQuery, etc.) With good knowledge and experience of web services (AZURE, REST - SOAP Architecture).",
    service3Title: "Mobile Development",
    service3Description:
      "Multi-platform mobile development with Ionic 4, React Native, Flutter",
    service4Title: "Multimedia & Design",
    service4Description:
      "Good mastery of Photoshop and average knowledge of video editing and 3D software such as After Effects & Cinema 4D",

    // Contact Section
    contactTitle: "Contact",
    contactDescription:
      "Here below are my contacts and my address to contact me if needed. I am always available 24/7 for all services and contacts.",
    contactAddress: "Address",
    contactPhone: "Phone:",
    contactEmail: "Email:",
    contactFollow: "Follow:",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email",
    contactFormSubject: "Subject",
    contactFormMessage: "Message",
    contactFormSend: "Send Message",
    copyEmail: "Copy email",
    emailCopied: "Email copied!",

    // Footer
    footerCopyright: ", All Rights Reserved.",

    // Form validation messages
    fillAllFields: "Please fill in all fields.",
    invalidEmail: "Please enter a valid email.",
    sending: "Sending...",
    successMessage:
      "Message sent successfully! ✅ I will reply to you soon.",
    errorMessage: "Error sending ❌ : ",
  },
};

// Language Manager Class
class LanguageManager {
  constructor() {
    this.currentLang = this.getStoredLanguage() || "fr"; // Default to French
    this.translations = translations;
  }

  // Get stored language from localStorage
  getStoredLanguage() {
    return localStorage.getItem("preferredLanguage");
  }

  // Set and store language
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem("preferredLanguage", lang);
      this.updatePageContent();
      this.updateMetaTags();
      this.updateHtmlLang();
      this.updateActiveButton();
    }
  }

  // Get translation by key
  t(key) {
    return this.translations[this.currentLang][key] || key;
  }

  // Update HTML lang attribute
  updateHtmlLang() {
    document.documentElement.lang = this.currentLang;
  }

  // Update meta tags
  updateMetaTags() {
    document.title = this.t("metaTitle");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", this.t("metaDescription"));
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", this.t("metaKeywords"));
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute(
        "content",
        this.currentLang === "fr"
          ? "Antema Nirina Andriamihaja - Développeur Full Stack"
          : "Antema Nirina Andriamihaja - Full Stack Developer"
      );
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        this.currentLang === "fr"
          ? "Portfolio d'un développeur Full Stack passionné - Spécialiste React JS, Node JS, Laravel"
          : "Portfolio of a passionate Full Stack Developer - Specialist React JS, Node JS, Laravel"
      );
  }

  // Update active language button
  updateActiveButton() {
    document
      .querySelectorAll(".lang-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(`.lang-btn[data-lang="${this.currentLang}"]`)
      ?.classList.add("active");
  }

  // Update all page content
  updatePageContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.t(key);

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else if (element.hasAttribute("data-i18n-html")) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Update typed text for hero section
    const typedTextElement = document.querySelector(".typed-text");
    if (typedTextElement) {
      typedTextElement.textContent = this.t("heroTyped");
      // Reinitialize Typed.js if it exists
      this.reinitializeTyped();
    }

    // Update aria-label attributes
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria");
      element.setAttribute("aria-label", this.t(key));
    });
  }

  // Reinitialize Typed.js animation
  reinitializeTyped() {
    if (typeof Typed !== "undefined" && document.querySelector(".typed-text-output")) {
      // Destroy existing instance if any
      const existingTyped = document.querySelector(".typed-text-output")?._typed;
      if (existingTyped) {
        existingTyped.destroy();
      }

      // Create new instance
      const typedStrings = this.t("heroTyped");
      new Typed(".typed-text-output", {
        strings: typedStrings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  }

  // Initialize language system
  init() {
    this.updateHtmlLang();
    this.updateMetaTags();
    this.updatePageContent();
    this.updateActiveButton();

    // Add event listeners to language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = btn.getAttribute("data-lang");
        this.setLanguage(lang);
      });
    });
  }
}

// Initialize language manager when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  window.langManager = new LanguageManager();
  window.langManager.init();
});
