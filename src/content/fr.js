export default {
  lang: 'fr', locale: 'fr_CA', path: '/', alternate: '/en/', privacyPath: '/confidentialite/',
  title: 'Angany AI — Le labo de Sylvain Boily',
  description: 'Angany AI, le labo personnel de Sylvain Boily. Projets, expérimentations et retours d’expérience autour de la voix, de l’IA et de l’open source.',
  skip: 'Aller au contenu', menu: 'Ouvrir le menu', close: 'Fermer le menu', navigation: 'Navigation principale', switchLanguage: 'Read in English',
  nav: [['projets', 'Projets'], ['parcours', 'Parcours'], ['notes', 'Notes'], ['hors-piste', 'Hors piste']],
  contactLink: 'Échangeons', back: 'Retour au labo',
  hero: {
    introduction: 'Sylvain Boily', roles: 'Entrepreneur · Développeur · Explorateur', tagline: 'Mon labo, en partage.',
    description: 'J’explore la voix, l’IA et l’open source. Ici, je partage mes projets, mes expérimentations et ce que j’apprends en construisant.',
    current: 'Aujourd’hui, CTO chez', company: 'Tchat N Sign', cta: 'Explorer mes projets', location: 'Québec, Canada',
    imageAlt: 'Reliefs montagneux vus du ciel, photographiés par Hanson Lu', imageCaption: 'Garder le goût d’explorer', imageSub: 'Dans le code. Et au grand air.', imageIndex: 'Carnet de bord / 01',
    note: 'Depuis 2004', noteDetail: 'Des idées devenues des projets', scroll: 'La suite du carnet',
  },
  now: {
    label: '01 / En ce moment', title: 'Ce qui m’anime aujourd’hui', intro: 'De nouvelles façons de travailler ensemble. Des briques ouvertes pour les construire.',
    luge: { type: 'Projet actif', title: 'Luge', subtitle: 'Un collègue IA dans l’équipe', description: 'De la mémoire, des outils et la capacité d’agir. Je construis Luge pour faire de l’IA un participant au travail de l’entreprise.', link: 'Parlons de Luge', tags: ['IA', 'Collaboration', 'Automatisation'], center: 'Un objectif', orbit: ['Mémoire', 'Outils', 'Actions'], graphicLabel: 'Luge relie un objectif à la mémoire, aux outils et aux actions.' },
    roomkit: { type: 'Fondateur · Open source', title: 'RoomKit', subtitle: 'Une conversation, tous les canaux', description: 'Un framework Python pour réunir voix, messages, humains et agents IA dans un même espace de conversation.', link: 'Découvrir RoomKit', tags: ['Python', 'Voice AI', 'MIT'], codeComment: 'Une room. Toutes les possibilités.', graphicLabel: 'Une même conversation relie la voix, les messages et les agents.', channels: ['Voix', 'Messages', 'Agents'] },
    role: 'Mon quotidien', roleText: 'CTO chez Tchat N Sign', roleDetail: 'Communication, signature électronique et IA pour les services financiers.', roleLink: 'Découvrir l’entreprise',
  },
  openSource: {
    label: '02 / En partage', title: 'Du code qui circule', intro: 'Des projets personnels et des contributions. À explorer, à utiliser, à faire évoluer.',
    filters: [['all', 'Tout'], ['ai', 'IA & automatisation'], ['telecom', 'Télécoms'], ['home', 'Domotique']], filterLabel: 'Filtrer les projets open source', result: 'projets affichés', link: 'Tout mon GitHub',
    descriptions: [
      'Un client Python asynchrone et un cœur Rust pour connecter les agents à Buzz, l’espace collaboratif de Block.',
      'La téléphonie Wazo dans les workflows visuels de Node-RED.',
      'Mes contributions aux appels natifs iOS et Android dans l’écosystème React Native WebRTC.',
      'Des flux audio et vidéo RTP/RTCP, directement en Python asynchrone.',
      'Une bibliothèque SIP légère pour relier téléphonie et applications d’IA vocale.',
      'Un pont entre les conversations Open WebUI et les automatisations n8n.',
      'La découverte de services Consul appliquée aux infrastructures Asterisk.',
      'Piloter les équipements Hubitat et réagir aux événements de la maison depuis n8n, avec des outils pour les agents IA.',
    ],
  },
  journey: {
    label: '03 / Le chemin parcouru', title: 'Tout commence\npar la curiosité', intro: 'Un PC sous DOS, sans disque dur. Linux quelques années plus tard. Puis l’envie d’en faire mon métier, et de construire mes propres entreprises.',
    years: [
      { date: '≈ 1988', title: 'Le premier ordinateur', text: 'Un PC sous DOS, sans disque dur. Le début de l’histoire.' },
      { date: '1998', title: 'La découverte de Linux', text: 'L’entrée dans un univers de logiciels que l’on peut explorer, comprendre et modifier.' },
      { date: '2001', title: 'L’informatique devient mon métier', text: 'Le passage de la découverte au travail de terrain.' },
      { date: '2004', title: 'L’aventure entrepreneuriale', text: 'Je me lance dans l’entrepreneuriat. Le début de plusieurs aventures dans la communication et le logiciel libre.' },
    ],
    venturesTitle: 'Des aventures qui ont compté',
    ventures: [
      { name: 'XiVO', role: 'À l’origine du projet', text: 'Rendre la téléphonie d’entreprise ouverte, accessible et adaptable.', url: 'https://www.xivo.solutions/' },
      { name: 'Wazo', role: 'Fondateur', text: 'Faire des communications une plateforme programmable, portée par les API et l’open source.', url: 'https://wazo.io/' },
    ],
    today: 'Aujourd’hui', todayText: 'Luge, RoomKit et Tchat N Sign. L’exploration continue.', statement: 'Construire des outils utiles.\nPartager ce que j’apprends.',
  },
  notes: {
    label: '04 / Notes & prises de parole', title: 'Quelques idées en chemin', intro: 'Retours d’expérience, conversations et explorations techniques.', more: 'Mes publications sur LinuxFr',
    items: [
      { type: 'Interview', year: '2026', title: 'Vingt ans de télécoms, et la suite', description: 'Mon parcours et ma vision de l’IA vocale.', source: 'Voice AI Space', language: 'EN', number: '01' },
      { type: 'Article', year: '2026', title: 'Un assistant vocal, sans le cloud', description: 'Explorer une chaîne vocale entièrement locale.', source: 'Blog RoomKit', language: 'EN', number: '02' },
      { type: 'Article', year: '2026', title: 'Quand RoomKit rencontre Buzz', description: 'Des agents au sein d’un espace de travail Nostr.', source: 'Blog RoomKit', language: 'EN', number: '03' },
      { type: 'Conférence · PDF', year: '2019', title: 'Having fun with telecommunication', description: 'Une présentation à Kamailio World.', source: 'Kamailio World', language: 'EN', number: '04' },
    ],
  },
  offscreen: {
    label: '05 / Hors piste', title: 'La curiosité\nne prend pas de congé', intro: 'Certains projets commencent simplement par « et si on essayait ? ».',
    games: [
      { name: 'Dragon & Phoenix', type: 'Jeu de cartes', title: 'Une partie de Gang of Four ?', description: 'Mon projet de jeu personnel. Des cartes, de la stratégie et le plaisir de construire quelque chose pour jouer.', link: 'À vous de jouer', url: 'https://www.dragon-and-phoenix-game.com/', visual: 'cards', tags: 'Jeu · Stratégie · Loisir' },
      { name: 'DnDKit', type: 'Donjons & Dragons', title: 'Et si l’IA menait l’aventure ?', description: 'Un maître du jeu IA pour D&D 5e. À plusieurs, à la voix, avec RoomKit. Le serveur suit les dés, les personnages et les combats.', link: 'Explorer DnDKit', url: 'https://github.com/sboily/dndkit', visual: 'dice', tags: 'Jeu de rôle · Voix · MCP' },
    ],
    personalTitle: 'Et quand je ferme le laptop…', personal: 'Je suis père de deux filles, pilote privé, et j’aime le ski et la guitare. Il y a aussi beaucoup à explorer loin d’un écran.',
    interests: [['airplane-tilt', 'Pilote privé'], ['mountains', 'Ski'], ['guitar', 'Guitare'], ['users', 'Père de deux filles']],
    dndCredit: 'DnDKit est issu de gamemaster-mcp, puis largement réécrit pour le jeu vocal et multijoueur.',
  },
  contact: {
    label: 'Le prochain chapitre', title: 'Une idée à partager ?', text: 'Entreprendre, contribuer, parler voix ou IA… Les belles aventures commencent souvent par une conversation.', cta: 'Écrivons la suite', copy: 'Copier l’adresse', copied: 'Adresse copiée', copyError: 'Copie indisponible. Vous pouvez sélectionner l’adresse.',
  },
  footer: { signature: 'Le labo de Sylvain Boily, depuis le Québec.', top: 'Retour en haut', privacy: 'Confidentialité', photo: 'Photo : Hanson Lu / Unsplash', source: 'Le code de ce site' },
  privacy: {
    title: 'Un site simple, jusque dans vos données',
    paragraphs: [
      'Ce site personnel est édité par Sylvain Boily. Vous pouvez me joindre à sylvainboilydroid@gmail.com.',
      'Le site ne dépose aucun cookie, n’intègre aucun outil de mesure d’audience et n’utilise aucun stockage local dans votre navigateur. Les polices et les images sont hébergées avec le site.',
      'Les liens vers mes projets et réseaux sociaux vous conduisent sur des sites externes, qui appliquent leurs propres politiques de confidentialité. Le lien de contact ouvre votre application de courriel.',
      'Comme sur tout site web, l’hébergeur peut traiter des données techniques nécessaires à la livraison des pages, notamment votre adresse IP et les journaux de requêtes.',
      'Le portrait provient de mon profil GitHub. La photographie de montagne est de Hanson Lu, sur Unsplash. Les icônes sont issues de Phosphor Icons et la police Manrope est distribuée sous licence SIL Open Font License.',
    ],
  },
  notFound: { title: 'Un petit détour', text: 'Cette page n’existe pas, ou a changé d’adresse. Le carnet de bord vous attend juste ici.', link: 'Retrouver le chemin' },
};
