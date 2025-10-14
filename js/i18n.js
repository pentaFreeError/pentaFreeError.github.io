window.I18N = {
  fr: {
    brand: "Kalash Daniel",
    nav: { about: "À propos", projects: "Projets", contact: "Contact", cv: "Télécharger mon CV" },

    hero: {
      eyebrow: "Ingénieur • Caen, France",
      title: "Bonjour, je suis <strong>Kalash Daniel</strong>",
      subtitle: "Futur ingénieur informatique en cybersécurité et monétique, avec un double diplôme à l’ENSICAEN. Actuellement à la recherche d’un stage de fin d’études (PFE) de 6 mois afin de contribuer à des projets concrets tout en renforçant mes compétences techniques dans un cadre innovant et stimulant",
      view_projects: "Voir mes projets",
      download_cv: "Télécharger mon CV"
    },

    about: {
      title: "À propos",
      cv_view: "Voir le CV en PDF",
      cv_meta: "70 Ko • mis à jour août 2025"
    },
    
    projects: {
      title: "Projets",

p1: { 
  title: "Encodeur Parachute", 
  desc: "Application Qt pour encoder des messages en motifs binaires circulaires parachute.", 
  long: "<p><strong>Encodeur Parachute</strong> est une application graphique Qt qui encode un message texte en un motif parachute, une représentation circulaire utilisant des bits binaires disposés en pistes concentriques et secteurs radiaux.</p><p>Ce projet a été développé dans le cadre d’un devoir d’interface graphique, avec des fonctionnalités supplémentaires pour améliorer l’ergonomie, la personnalisation et l’utilisation.</p><h3>Fonctionnalités</h3><ul><li>Gestion du message via une classe modèle avec accès bit par bit.</li><li>Ajustement du nombre de secteurs et de pistes (curseur + spin box).</li><li>Double vue : parachute et binaire.</li><li>Barre de menus avec actions standards et raccourcis (Alt+O → Ouvrir, Ctrl+S → Sauvegarder).</li><li>Basculement de langue (français/anglais).</li><li>Mode sombre activable.</li><li>Ajout de métadonnées (utilisateur, date, version) dans les fichiers sauvegardés.</li><li>Choix du caractère de référence pour l’encodage (par défaut '@').</li><li>Personnalisation des couleurs des bits (1 et 0), avec option aléatoire.</li><li>Modes de génération aléatoire : message, secteurs, pistes.</li><li>Les secteurs doivent être choisis par multiples de 7 (7, 14, 21, ...).</li><li>Gestion robuste des erreurs si un message ne peut pas être encodé avec la configuration actuelle.</li></ul><h3>Stockage de configuration (format .pf)</h3><p>Tous les paramètres sont enregistrés dans des fichiers <code>.pf</code> chiffrés, accessibles uniquement sur la même machine.</p><pre>[Metadata]\nDate=2025-03-24T18:56:12\nAuthor=pentafreeerror\nAppVersion=1.0\n\n[Message]\nENSICAEN TEST\n\n[Parameters]\nSectors=28\nTracks=5\nLanguage=fr\nbit1_color=#45afab\nbit0_color=#bf0d83\noffsetChar=W\nbackGround=#1e1e1e</pre>", 
  img1: "Interface principale", 
  img2: "Vue parachute binaire", 
  tags: { a: "Qt", b: "C++", c: "GUI" } 
},

p2: { 
  title: "Calculatrice de Conversion de Devises", 
  desc: "Application Android pour convertir des valeurs entre plus de 160 devises avec calculatrice intégrée.", 
  long: "<p><strong>Calculatrice de Conversion de Devises</strong> est une application Android qui vous aide à convertir le total d’un panier d’achat ou tout autre montant entre la monnaie locale et votre devise préférée. Elle est conçue pour offrir une conversion précise et intuitive, ainsi que la gestion de calculs à grande échelle.</p><h3>Fonctionnalités principales</h3><ul><li>Conversion de devises: prend en charge plus de 160 monnaies dans le monde.</li><li>Prévention des erreurs: bloque les appuis de touches invalides pour éviter les résultats incorrects.</li><li>Calculs de grands nombres: gère des nombres extrêmement grands, limités uniquement par la mémoire RAM et l’espace de swap de l’appareil.</li><li>Conversion multi-devises: intègre un cache et une base locale pour réduire les appels API.</li><li>Interface intuitive: design simple pour une utilisation fluide, même avec des calculs complexes.</li><li>Performance optimisée: réponses rapides grâce au cache temporaire et au stockage local des taux, limitant la connexion internet nécessaire.</li></ul>",
  img1: "Calculatrice", 
  img2: "Sélecteur", 
  img3: "exemple",
  tags: { a: "Android", b: "Java", c: "API" } 
},

p3 : {
  title: "BookMarket", 
  desc: "Application web sécurisée de vente de livres avec gestion de base de données.", 
  long: "<p><strong>BookMarket</strong> est une application web qui simule une librairie en ligne. Elle permet de rechercher des livres et leurs auteurs, de gérer un panier d’achat, de suivre les visites en temps réel et de créer un compte utilisateur pour finaliser ses achats. L’application intègre des mécanismes de sécurité pour protéger les données et les interactions, ainsi qu’une gestion optimisée de la base de données PostgreSQL afin d’assurer des performances fiables et une organisation claire des informations.</p>",  
  img1: "bookmarket1", 
  img2: "bookmarket2", 
  img3: "bookmarket3",
  tags: { a: "web", b: "PostgreSQL", c: "Cybersécurité", d: "PHP" } 
},

p4: {
  title: "DiskAnalyzer", 
  desc: "Librairie en Go pour analyser des partitions de disque dur.", 
  long: "<p><strong>DiskAnalyzer</strong> est une librairie écrite en Go permettant d’analyser des partitions de disque dur formatées en Ext4, HFS+ ou APFS. Elle offre la possibilité de récupérer des informations sur les disques, partitions et fichiers, de visualiser l’arborescence, de consulter les métadonnées et de détecter l’espace libre ou perdu. Une API en JSON facilite l’accès aux fonctionnalités depuis n’importe quel langage, et une interface graphique illustre les usages. Ce projet a été réalisé en groupe de 5 et met en avant la maîtrise de Go, de l’API et des aspects forensics appliqués au stockage.</p>",  
  img1: "diskanalyzer1", 
  img2: "diskanalyzer2", 
  img3: "diskanalyzer3",
  img4: "diskanalyzer4",
  tags: { a: "Go", b: "API", c: "Disk", d: "Forensics" } 
},

p5: {
  title: "LCL SmartBot", 
  desc: "Chatbot intelligent conçu pour répondre aux questions sur les cartes bancaires.", 
  long: "<p><strong>LCL SmartBot</strong> est un assistant virtuel conçu lors d’un hackathon organisé par LCL et Google. Développé en équipe de 7, il permet aux utilisateurs d’obtenir des informations claires et rapides sur différents types de cartes bancaires : avantages, tarifs et couvertures d’assurance. Le projet combine plusieurs approches techniques comme le web scraping pour enrichir la base de données, l’utilisation du RAG (Retrieval-Augmented Generation) pour améliorer la pertinence des réponses et l’intégration des services d’IA proposés par Google Cloud et Dialogflow. Le tout est soutenu par une gestion de base de données efficace et une logique applicative en Python. Ce projet illustre la synergie entre intelligence artificielle, traitement de données et innovation bancaire.</p>",  
  img1: "lclsmartbot1", 
  img2: "lclsmartbot2", 
  img3: "lclsmartbot3",
  tags: { a: "AI", b: "Python", c: "Google", d: "Banque" } 
},

p6: {
  title: "EpidemicSim", 
  desc: "Simulation en C d’une épidémie dans une ville virtuelle.", 
  long: "<p><strong>EpidemicSim</strong> est une application développée dans le cadre du cours de systèmes d’exploitation. Elle simule la propagation d’une contamination virale dans une ville représentée par une grille, en mettant en avant différents acteurs et dynamiques. Le projet utilise des mécanismes systèmes tels que la mémoire partagée, les signaux, les tubes, les files de messages, les threads et les sémaphores. Une interface utilisateur, textuelle ou graphique, permet de suivre l’évolution de l’épidémie. Ce projet a été conçu et développé individuellement, mettant en avant une maîtrise complète de la programmation concurrente et de la communication interprocessus en C.</p>",  
  img1: "epidemicsim1", 
  img2: "epidemicsim2", 
  tags: { a: "C", b: "Simulation", c: "OS", d: "Multithreading" } 
},

p7: {
  title: "Corewar Project", 
  desc: "Application en Java simulant des combats entre programmes Redcode dans une mémoire virtuelle.", 
  long: "<p><strong>Corewar Project</strong> est une machine virtuelle capable d’exécuter des programmes écrits en Redcode, appelés guerriers. Ces derniers s’affrontent dans une mémoire virtuelle jusqu’à ce qu’il n’en reste plus qu’un actif. Le projet inclut un parseur et un interpréteur du langage Redcode réalisés en Java, ainsi qu’un algorithme de recuit simulé permettant d’optimiser automatiquement les stratégies de combat. Une interface graphique offre la possibilité de créer, modifier et tester les guerriers, puis de visualiser leurs affrontements. L’application peut être exécutée directement via Java ou à l’aide de Docker pour simplifier son lancement.</p>",  
  img1: "corewar1", 
  img2: "corewar2", 
  img3: "corewar3",
  tags: { a: "Docker", b: "Parser", c: "Interpreter", d: "Java", e: "Optimization" } 
},

p8: {
  title: "Archery", 
  desc: "Jeu de tir à l’arc en Java avec une architecture moderne et une trajectoire 3D.", 
  long: "<p><strong>Archery</strong> est un jeu de tir à l’arc où le joueur doit atteindre une cible le plus précisément possible, à des distances variables. Développé en Java et structuré selon le patron de conception MVP (Model-View-Presenter), il intègre JavaFX pour l’affichage, ainsi que des bibliothèques comme Gson, JUnit et Mockito pour la gestion des données et les tests. Le projet met en avant l’utilisation de design patterns avancés, une architecture logicielle maintenable et des pratiques modernes comme l’intégration continue (CI) et la gestion de version. Une trajectoire 3D permet une immersion plus réaliste, et un système de menus, de gameplay et de boutique vient enrichir l’expérience. Ce projet a été réalisé en équipe, soulignant la coordination et l’efficacité dans un cadre collaboratif.</p>",  
  img1: "archery1", 
  img2: "archery2", 
  img3: "archery3",
  tags: { a: "Design Pattern", b: "Travail d'équipe", c: "Java", d: "Trajectoire 3D", e: "Gradle" } 
},

p9: {
  title: "Tennis Club Manager", 
  desc: "Application web JSP pour gérer un club de tennis avec authentification et base de données sécurisée.", 
  long: "<p><strong>Tennis Club Manager</strong> est une application web permettant aux adhérents d’un club de tennis de consulter leur dossier personnel et de s’inscrire à des tournois en ligne. L’application est déployée sur un serveur Tomcat intégré et utilise Hibernate pour la persistance des données dans une base H2. L’architecture repose sur une servlet centrale qui redirige les actions utilisateurs vers les bons modules (connexion, dossier, inscription). La sécurité est renforcée par la gestion des sessions, la validation côté front-end et back-end des entrées utilisateur et le stockage des mots de passe de manière sécurisée. Des pages JSP dynamiques et un menu réutilisable assurent une navigation claire. Ce projet illustre la mise en œuvre d’une architecture web JavaEE moderne avec un accent sur la cybersécurité et la fiabilité.</p>",  
  img1: "tennis1", 
  img2: "tennis2", 
  img3: "tennis3",
  tags: { a: "Cybersécurité", b: "Web JSP", c: "Hibernate", d: "Tomcat", e: "H2 Database" } 
},

p10: {
  title: "LLM Security Evaluator", 
  desc: "Évaluation d’outils basés sur les LLM pour l’analyse des menaces en cybersécurité.", 
  long: "<p><strong>LLM Security Evaluator</strong> est un projet de recherche réalisé lors d’un stage à l’Université KU Leuven. Il consiste à analyser et comparer plusieurs outils de threat modeling automatisés utilisant des grands modèles de langage (LLM). L’objectif était de mesurer leur précision et leur fiabilité dans l’identification de menaces de sécurité et de vie privée à partir de cas d’étude concrets. Le travail a impliqué la création d’une baseline de référence, la conception d’un parser pour normaliser les données issues de milliers de menaces, ainsi que le développement d’outils d’automatisation pour l’évaluation et la visualisation des performances (similarité sémantique, clustering, PCA). Réalisé en Python avec l’intégration de bibliothèques spécialisées (sentence_transformers, pandas, sklearn, matplotlib), ce projet met en lumière les limites actuelles de l’IA appliquée à la cybersécurité tout en proposant des solutions pour fiabiliser les analyses.</p>",  
  img1: "llmsecurity1", 
  img2: "llmsecurity2", 
  img3: "llmsecurity3",
  tags: { a: "Cybersécurité", b: "LLM", c: "Python", d: "IA", e: "Threat Modeling" } 
},

p11: {
  title: "Portfolio Website", 
  desc: "Site vitrine moderne développé pour présenter et mettre en avant mes projets.", 
  long: "<p><strong>Portfolio Website</strong> est une application web entièrement réalisée côté client, destinée à centraliser et présenter différents projets. Le site adopte un design moderne et minimaliste, avec une navigation fluide. Il intègre plusieurs fonctionnalités interactives : changement de langue en temps réel, basculement entre mode jour et mode nuit, et interface responsive adaptée à tout support. L’ensemble offre une présentation claire et accessible des contenus, avec une mise en avant visuelle simple et efficace.</p>",  
  img1: "portfolio1", 
  tags: { a: "Frontend", b: "Déploiement", c: "UI/UX", d: "Multilingue", e: "Dark Mode" } 
},


    },
    
    contact: { 
      title: "Contact", 
      
      desc: 'Vous avez un projet, une opportunité ou simplement envie d’échanger&nbsp;? \
             N’hésitez pas à me contacter par email : \
             <a class="link" href="mailto:danielkalash14@gmail.com">danielkalash14@gmail.com</a> \
             ou via mes réseaux professionnels.'
    
    },
    meta: { title: { home: "Kalash Daniel"}},
    aria: { dark_mode: "Activer le mode sombre", light_mode: "Activer le mode clair" },
      
    project: {
      view_code: "Voir le code",
      view_demo: "Voir la démo",
      private: "Code privé",
      demo_soon: "Démo bientôt",
      nav_prev: "← Projet précédent",
      nav_next: "Projet suivant →",
      nav_back: "Retour à la liste"
    }
  },

  en: {
    brand: "Kalash Daniel",
    nav: { about: "About", projects: "Projects", contact: "Contact", cv: "Download my CV" },
    
    hero: {
        eyebrow: "Engineer • Caen, France",
        title: "Hi, I'm <strong>Kalash Daniel</strong>",
        subtitle: "Future computer engineer in cybersecurity and electronic payment systems, with a double degree at ENSICAEN. Currently seeking a 6-month final-year internship (PFE) to contribute to real-world projects while strengthening my technical skills in a dynamic and innovative environment.",
        view_projects: "See my projects",
        download_cv: "Download my CV"
      },

    about: {
      title: "About",
      cv_view: "View CV as PDF",
      cv_meta: "70 KB • updated August 2025"
    },
    
    projects: {
      title: "Projects",

p1: { 
  title: "Parachute Encoder", 
  desc: "Qt app to encode text messages into circular binary parachute patterns.", 
  long: "<p><strong>Parachute Encoder</strong> is a graphical Qt application that encodes a text message into a parachute pattern, a circular visual representation using binary bits arranged in concentric tracks and radial sectors.</p><p>This project was developed as part of a graphical interface assignment, with added features to enhance usability, customization, and functionality.</p><h3>Features</h3><ul><li>Message managed by a model class with access to individual bits.</li><li>Adjustable sectors and tracks via slider and spin box.</li><li>Dual view: parachute view and binary view.</li><li>Menu bar with standard actions and shortcuts (Alt+O → Open, Ctrl+S → Save).</li><li>Language switching (English/French).</li><li>Dark mode toggle.</li><li>Metadata (user, date, version) included in saved files.</li><li>Customizable encoding character (default '@').</li><li>Customizable bit colors (1 and 0), with optional random color mode.</li><li>Random generation modes for message, sectors, and tracks.</li><li>Sectors must be multiples of 7 (7, 14, 21, ...).</li><li>Robust error handling if a message cannot fit the current configuration.</li></ul><h3>Configuration Storage (.pf format)</h3><p>All parameters are saved in encrypted <code>.pf</code> files, accessible only on the same machine.</p><pre>[Metadata]\nDate=2025-03-24T18:56:12\nAuthor=pentafreeerror\nAppVersion=1.0\n\n[Message]\nENSICAEN TEST\n\n[Parameters]\nSectors=28\nTracks=5\nLanguage=fr\nbit1_color=#45afab\nbit0_color=#bf0d83\noffsetChar=W\nbackGround=#1e1e1e</pre>", 
  img1: "Main interface", 
  img2: "Binary parachute view", 
  tags: { a: "Qt", b: "C++", c: "GUI" } 
},

p2: { 
  title: "Currency Conversion Calculator", 
  desc: "Android app to convert values between more than 160 currencies with built-in calculator.", 
  long: "<p><strong>Currency Conversion Calculator</strong> is an Android application that helps you convert shopping basket totals or any other amounts between local currency and your preferred currency. It is designed for accurate and user-friendly currency conversion as well as large-scale calculations.</p><h3>Main Features</h3><ul><li>Currency Conversion: Convert values between more than 160 currencies worldwide.</li><li>Error Prevention: Prevents user mistakes by blocking invalid button presses.</li><li>Large Number Calculations: Perform calculations on extremely large numbers, limited only by your device’s RAM and swap memory.</li><li>Multi-Currency Conversion: Supports global currencies with caching and local database to reduce API calls.</li><li>Intuitive Interface: Simple design for fast and efficient use, even with complex calculations.</li><li>Optimized Performance: Faster responses thanks to temporary cache and local storage of rates, reducing the need for constant internet access.</li></ul>",
  img1: "Calculator", 
  img2: "Selector", 
  img3: "example",
  tags: { a: "Android", b: "Java", c: "API" } 
},

p3 : { 
  title: "BookMarket", 
  desc: "Secure online book selling web application with database management.", 
  long: "<p><strong>BookMarket</strong> is a web application that simulates an online bookstore. It allows users to search for books and authors, manage a shopping cart, track visits in real time, and create an account to complete purchases. The application integrates security mechanisms to protect user data and interactions, along with optimized PostgreSQL database management to ensure reliable performance and clear organization of information.</p>",  
  img1: "bookmarket1", 
  img2: "bookmarket2", 
  img3: "bookmarket3",
  tags: { a: "web", b: "PostgreSQL", c: "Cybersecurity", d: "PHP" } 
},

p4 : {
  title: "DiskAnalyzer", 
  desc: "Go library for disk partition analysis.", 
  long: "<p><strong>DiskAnalyzer</strong> is a Go library designed to analyze hard drive partitions formatted in Ext4, HFS+, or APFS. It enables retrieving detailed information about disks, partitions, and files, browsing directory trees, accessing metadata, and detecting free or lost space. A JSON-based API makes its features accessible from any language, and a graphical interface demonstrates its use cases. This project was developed by a team of 5 and highlights teamwork, API design, and applied forensics in storage systems.</p>",  
  img1: "diskanalyzer1", 
  img2: "diskanalyzer2", 
  img3: "diskanalyzer3",
  img4: "diskanalyzer4",
  tags: { a: "Go", b: "API", c: "Disk", d: "Forensics" } 
},

p5 : {
  title: "LCL SmartBot", 
  desc: "AI-powered chatbot built to answer questions about banking cards.", 
  long: "<p><strong>LCL SmartBot</strong> was created during a hackathon organized by LCL and Google. Developed in a team of 7, it provides users with quick and accurate information on different types of banking cards, including benefits, pricing, and insurance coverage. The solution combines multiple technical approaches such as web scraping to enhance the dataset, Retrieval-Augmented Generation (RAG) to improve answer accuracy, and integration of Google Cloud and Dialogflow AI services. The backend logic relies on Python and database management to deliver a smooth and reliable experience. This project highlights the intersection of AI, data processing, and innovation in the banking sector.</p>",  
  img1: "lclsmartbot1", 
  img2: "lclsmartbot2", 
  img3: "lclsmartbot3",
  tags: { a: "AI", b: "Python", c: "Google", d: "Banking" } 
},

p6: {
  title: "EpidemicSim", 
  desc: "C-based simulation of a viral outbreak in a virtual city.", 
  long: "<p><strong>EpidemicSim</strong> is a project developed as part of an Operating Systems course. It simulates the spread of a viral contamination in a city grid while modeling interactions between different entities. The implementation relies on system-level mechanisms such as shared memory, signals, pipes, message queues, threads, and semaphores. A user interface, either text-based or graphical, allows monitoring the epidemic’s evolution. This project was designed and implemented individually, showcasing full ownership of concurrency and interprocess communication in C.</p>",  
  img1: "epidemicsim1", 
  img2: "epidemicsim2", 
  tags: { a: "C", b: "Simulation", c: "OS", d: "Multithreading" } 
},

p7: {
  title: "Corewar Project", 
  desc: "Java-based virtual machine simulating battles between Redcode programs in memory.", 
  long: "<p><strong>Corewar Project</strong> is a virtual machine designed to run programs written in Redcode, known as warriors. These programs compete in virtual memory until only one remains active. The project includes a parser and interpreter for the Redcode language implemented in Java, along with a simulated annealing algorithm to automatically optimize combat strategies. A graphical interface allows users to design, edit, and test warriors, and to visualize their battles. The application can be run directly with Java or through Docker for simplified deployment.</p>",  
  img1: "corewar1", 
  img2: "corewar2", 
  img3: "corewar3",
  tags: { a: "Docker", b: "Parser", c: "Interpreter", d: "Java", e: "Optimization" } 
},

p8: {
  title: "Archery", 
  desc: "Java-based archery game with modern architecture and a 3D trajectory.", 
  long: "<p><strong>Archery</strong> is an archery game where players aim to shoot as close as possible to a target from varying distances. Developed in Java and structured using the MVP (Model-View-Presenter) design pattern, it leverages JavaFX for rendering, as well as libraries like Gson, JUnit, and Mockito for data handling and testing. The project emphasizes advanced design patterns, maintainable software architecture, and modern practices such as continuous integration (CI) and version control. A 3D trajectory enhances realism, while menus, gameplay mechanics, and a shop system enrich the overall experience. This project was developed collaboratively, highlighting teamwork and effective coordination.</p>",  
  img1: "archery1", 
  img2: "archery2", 
  img3: "archery3",
  tags: { a: "Design Pattern", b: "Teamwork", c: "Java", d: "3D trajectory", e: "Gradle" } 
},

p9: {
  title: "Tennis Club Manager", 
  desc: "JSP web application to manage a tennis club with authentication and secure database.", 
  long: "<p><strong>Tennis Club Manager</strong> is a web application that allows tennis club members to view their personal profile and register for tournaments online. It is deployed on an embedded Tomcat server and uses Hibernate for persistence with an H2 database. The architecture relies on a central servlet that redirects user actions to the appropriate modules (login, member profile, registration). Security is enforced through session management, both front-end and back-end input validation, and secure password storage. Dynamic JSP pages and a reusable navigation menu provide a clean user experience. This project showcases a modern JavaEE web architecture with a strong focus on cybersecurity and reliability.</p>",  
  img1: "tennis1", 
  img2: "tennis2", 
  img3: "tennis3",
  tags: { a: "Cybersecurity", b: "Web JSP", c: "Hibernate", d: "Tomcat", e: "H2 Database" } 
},

p10: {
  title: "LLM Security Evaluator", 
  desc: "Evaluation of LLM-based tools for cybersecurity threat modeling.", 
  long: "<p><strong>LLM Security Evaluator</strong> is a research project carried out during an internship at KU Leuven University. Its goal was to analyze and benchmark several automated threat modeling tools powered by Large Language Models (LLMs). The study assessed their accuracy and reliability in detecting security and privacy threats through real-world case studies. The work included building a reference baseline, designing a parser to normalize thousands of threat descriptions, and developing automation tools for evaluation and visualization (semantic similarity, clustering, PCA). Implemented in Python with libraries such as sentence_transformers, pandas, sklearn, and matplotlib, this project highlights both the potential and the current limitations of AI-driven approaches in cybersecurity risk analysis.</p>",  
  img1: "llmsecurity1", 
  img2: "llmsecurity2", 
  img3: "llmsecurity3",
  tags: { a: "Cybersecurity", b: "LLM", c: "Python", d: "AI", e: "Threat Modeling" } 
},

p11: {
  title: "Portfolio Website", 
  desc: "Modern showcase website built to present and highlight my projects.", 
  long: "<p><strong>Portfolio Website</strong> is a fully client-side web application designed to centralize and display different projects. The site features a modern and minimalist design with smooth navigation. It includes several interactive features: real-time language switching, dark/light mode toggling, and a responsive interface suitable for all devices. The result is a clear and accessible presentation of content with a simple and effective visual style.</p>",  
  img1: "portfolio1", 
  tags: { a: "Frontend", b: "Deployment", c: "UI/UX", d: "Multilingual", e: "Dark Mode" } 
},


    },

    contact: { 
      title: "Contact", 
    
      desc: 'Do you have a project, an opportunity, or just want to connect? \
             Feel free to contact me by email: \
             <a class="link" href="mailto:danielkalash14@gmail.com">danielkalash14@gmail.com</a> \
             or through my professional networks.'
    
    },
    meta: { title: { home: "Kalash Daniel" }},
    aria: { dark_mode: "Enable dark mode", light_mode: "Enable light mode" },
    
    project: {
      view_code: "View code",
      view_demo: "Live demo",
      private: "Private code",
      demo_soon: "Demo coming soon",
      nav_prev: "← Previous project",
      nav_next: "Next project →",
      nav_back: "Back to list"
    }
  },
};
