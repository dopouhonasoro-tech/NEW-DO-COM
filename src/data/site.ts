/**
 * Source unique de vérité pour l'identité, la navigation et les données éditoriales.
 * Toute modification de contenu structurel passe par ce fichier.
 */

export const SITE = {
  name: 'DO COM',
  signature: 'Voyez plus loin, digitalement.',
  /** Domaine de production. À ajuster le jour du branchement du nom de domaine. */
  url: 'https://docom.ci',
  email: 'docommunication.ci@gmail.com',
  telephone: '+225 07 11 35 86 23',
  telephoneE164: '+2250711358623',
  whatsapp: 'https://wa.me/2250711358623',
  ville: 'Abidjan',
  quartier: 'Cocody Angré',
  pays: 'Côte d’Ivoire',
  fondateur: 'Emmanuel Soro',
} as const;

export const NAV = [
  { href: '/solutions/', label: 'Solutions', key: 'solutions' },
  { href: '/approche/', label: 'Notre approche', key: 'approche' },
  { href: '/realisations/', label: 'Réalisations', key: 'realisations' },
  { href: '/a-propos/', label: 'À propos', key: 'a-propos' },
] as const;

export type Solution = {
  slug: string;
  index: string;
  titre: string;
  /** Phrase de nav / carte — ce que ça fait, en une ligne. */
  accroche: string;
  probleme: string;
  problemeDetails: string[];
  approche: string;
  approcheEtapes: { titre: string; texte: string }[];
  valeur: string;
  valeurPoints: string[];
  action: string;
  seoTitre: string;
  seoDescription: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: 'transformation-digitale',
    index: '01',
    titre: 'Transformation digitale',
    accroche:
      'Cartographier vos processus, identifier ce qui peut être digitalisé, et le construire dans le bon ordre.',
    probleme: 'Votre organisation fonctionne. Mais elle fonctionne à la main.',
    problemeDetails: [
      'Les informations vivent dans plusieurs têtes et plusieurs fichiers Excel.',
      'Les décisions attendent qu’une personne précise soit disponible.',
      'Personne ne sait dire, chiffres en main, où le travail passe le plus de temps à attendre.',
      'Chaque nouveau collaborateur réapprend les procédures oralement.',
    ],
    approche:
      'On ne commence jamais par choisir un outil. On commence par regarder comment le travail circule réellement.',
    approcheEtapes: [
      {
        titre: 'Cartographie des processus',
        texte:
          'Entretiens avec les personnes qui font le travail, pas seulement avec la direction. On trace le parcours réel d’une commande, d’un dossier ou d’un client, du premier contact à l’archivage.',
      },
      {
        titre: 'Identification des points de friction',
        texte:
          'Ressaisies, attentes, allers-retours, informations introuvables. Chaque friction est quantifiée en temps et en risque d’erreur.',
      },
      {
        titre: 'Feuille de route priorisée',
        texte:
          'Ce qui se digitalise maintenant, ce qui attend, ce qui ne doit surtout pas être digitalisé. Classé par rapport effort / impact.',
      },
      {
        titre: 'Construction par paliers',
        texte:
          'On livre un palier utilisable avant de passer au suivant. Aucun projet où vous attendez six mois pour voir quelque chose fonctionner.',
      },
    ],
    valeur:
      'Vous arrêtez de payer le coût invisible de l’informel : le temps perdu à chercher, ressaisir et vérifier.',
    valeurPoints: [
      'Une vision claire de ce qui vous ralentit, documentée et chiffrée',
      'Un plan séquencé, pas une liste de souhaits',
      'Des processus qui survivent au départ d’une personne clé',
    ],
    action: 'Faire cartographier vos processus',
    seoTitre: 'Transformation digitale en Côte d’Ivoire',
    seoDescription:
      'Nous analysons vos processus, identifions ce qui peut être digitalisé et automatisé, et construisons la solution par paliers. Abidjan, Côte d’Ivoire.',
  },
  {
    slug: 'sites-web-plateformes',
    index: '02',
    titre: 'Sites web & plateformes',
    accroche:
      'Des sites rapides, mesurables et orientés conversion — pas des vitrines décoratives.',
    probleme:
      'Un site qui ne fait qu’« exister » vous coûte de l’argent au lieu d’en rapporter.',
    problemeDetails: [
      'Le site est joli mais personne ne sait combien de contacts il génère.',
      'Il met plusieurs secondes à s’afficher sur une connexion mobile locale.',
      'Il n’apparaît pas dans les recherches sur votre métier et votre ville.',
      'Chaque modification demande de rappeler le prestataire.',
    ],
    approche:
      'Un site est un système. Chaque page a un objectif, une audience et une mesure.',
    approcheEtapes: [
      {
        titre: 'Objectif par page',
        texte:
          'Avant la moindre maquette : que doit faire le visiteur sur cette page, et comment on saura qu’il l’a fait.',
      },
      {
        titre: 'Architecture et contenu',
        texte:
          'Arborescence, hiérarchie des messages, rédaction orientée décision. Le texte est conçu avant le design, pas rempli après.',
      },
      {
        titre: 'Construction technique',
        texte:
          'Génération de pages statiques, images optimisées, chargement minimal de JavaScript. Le site doit rester rapide sur un réseau mobile ivoirien, pas seulement sur la fibre.',
      },
      {
        titre: 'Mesure et suivi',
        texte:
          'Suivi des conversions installé dès la mise en ligne. Un site sans mesure est une dépense, pas un investissement.',
      },
    ],
    valeur:
      'Un canal que vous pouvez piloter avec des chiffres, et faire évoluer sans tout reconstruire.',
    valeurPoints: [
      'Vitesse et Core Web Vitals traités comme une exigence, pas comme une option',
      'Référencement technique en place dès le premier jour',
      'Une base sur laquelle greffer plus tard un espace client ou un outil métier',
    ],
    action: 'Parler de votre site',
    seoTitre: 'Création de site web en Côte d’Ivoire',
    seoDescription:
      'Création de sites web et de plateformes rapides, référencées et orientées conversion. Agence web à Abidjan, Côte d’Ivoire.',
  },
  {
    slug: 'marketing-digital',
    index: '03',
    titre: 'Marketing digital',
    accroche:
      'Des stratégies d’acquisition, de visibilité et de conversion pilotées par les chiffres.',
    probleme:
      'De la visibilité sans acquisition, c’est de la dépense sans retour.',
    problemeDetails: [
      'Des publications régulières, mais aucun contact commercial identifiable.',
      'Des rapports en impressions et en portée, jamais en coût par résultat.',
      'Un budget publicitaire engagé sans savoir quelle campagne le justifie.',
      'Aucune idée du chemin réel entre la première vue et la vente.',
    ],
    approche:
      'On remonte du résultat commercial vers le canal, jamais l’inverse.',
    approcheEtapes: [
      {
        titre: 'Définition du résultat attendu',
        texte:
          'Un nombre de contacts, de rendez-vous ou de ventes sur une période donnée. Sans ce point de départ, aucune campagne n’est évaluable.',
      },
      {
        titre: 'Choix des canaux',
        texte:
          'Meta, Google, TikTok, LinkedIn, WhatsApp Business, référencement. Le choix dépend de là où se trouve réellement votre cible, pas des modes.',
      },
      {
        titre: 'Mesure et attribution',
        texte:
          'Suivi installé avant le lancement. Dépense, résultats, coût par résultat — les trois lignes qui comptent.',
      },
      {
        titre: 'Optimisation continue',
        texte:
          'Arbitrage régulier du budget vers ce qui fonctionne. Une campagne qui ne produit pas est arrêtée, pas prolongée.',
      },
    ],
    valeur:
      'Vous savez ce que chaque franc engagé produit, et vous décidez sur des chiffres.',
    valeurPoints: [
      'Un cadre de mesure partagé entre vous et nous',
      'Des arbitrages budgétaires argumentés',
      'Un rapport lisible par un dirigeant, pas par un spécialiste',
    ],
    action: 'Structurer votre acquisition',
    seoTitre: 'Marketing digital en Côte d’Ivoire',
    seoDescription:
      'Stratégies d’acquisition et de conversion pilotées par les chiffres : publicité digitale, référencement, canaux sociaux. Agence marketing digital à Abidjan.',
  },
  {
    slug: 'creation-de-contenus',
    index: '04',
    titre: 'Création de contenus',
    accroche:
      'Des contenus qui servent un objectif commercial précis, pas un calendrier à remplir.',
    probleme: 'Publier n’est pas communiquer. Et communiquer n’est pas vendre.',
    problemeDetails: [
      'Le calendrier éditorial est tenu, mais aucun contenu ne fait avancer une vente.',
      'Le ton change d’une publication à l’autre selon qui rédige.',
      'Les contenus les plus travaillés sont ceux que personne ne voit.',
      'Rien n’est réutilisable : chaque publication repart de zéro.',
    ],
    approche:
      'Chaque contenu répond à une question que se pose une personne précise, à un moment précis de sa décision.',
    approcheEtapes: [
      {
        titre: 'Cadrage éditorial',
        texte:
          'À qui on parle, ce qu’on veut qu’il comprenne, et ce qu’il doit faire ensuite. Sans ces trois réponses, on ne produit pas.',
      },
      {
        titre: 'Ligne et voix de marque',
        texte:
          'Un cadre écrit — vocabulaire, ton, interdits — pour que le contenu reste cohérent quel que soit le rédacteur.',
      },
      {
        titre: 'Production',
        texte:
          'Textes, visuels, formats vidéo courts, supports imprimés. La production est industrialisée quand elle peut l’être, sans perdre la justesse du message.',
      },
      {
        titre: 'Recyclage structuré',
        texte:
          'Un contenu de fond est découpé en formats dérivés. On produit une fois, on diffuse plusieurs fois.',
      },
    ],
    valeur:
      'Un flux de contenus tenable dans la durée, cohérent, et rattaché à un objectif commercial.',
    valeurPoints: [
      'Une voix de marque documentée, transmissible à un collaborateur',
      'Un rythme de publication réaliste plutôt qu’ambitieux puis abandonné',
      'Des contenus qui alimentent l’acquisition, pas seulement la présence',
    ],
    action: 'Cadrer votre ligne éditoriale',
    seoTitre: 'Création de contenus pour entreprises',
    seoDescription:
      'Contenus éditoriaux, visuels et vidéo au service d’un objectif commercial. Ligne éditoriale, voix de marque et production. Abidjan, Côte d’Ivoire.',
  },
  {
    slug: 'ia-et-automatisation',
    index: '05',
    titre: 'IA & automatisation',
    accroche:
      'Identifier les tâches répétitives qui peuvent être déléguées à une machine — et seulement celles-là.',
    probleme:
      'Vos équipes passent leurs journées sur des tâches qu’aucune personne qualifiée ne devrait faire.',
    problemeDetails: [
      'Recopier des informations d’un outil vers un autre, tous les jours.',
      'Relancer manuellement chaque client, un par un.',
      'Produire le même document en changeant trois lignes.',
      'Répondre vingt fois par jour à la même question de client.',
    ],
    approche:
      'L’intelligence artificielle n’est pas un objectif. C’est un outil qu’on emploie quand il est le bon.',
    approcheEtapes: [
      {
        titre: 'Inventaire des tâches répétitives',
        texte:
          'Fréquence, durée, niveau de jugement requis. Une tâche fréquente, longue et peu décisionnelle est une bonne candidate. Une tâche rare et sensible n’en est pas une.',
      },
      {
        titre: 'Choix du bon mécanisme',
        texte:
          'Beaucoup de problèmes se résolvent par une automatisation simple et prévisible, sans IA. On ne mobilise un modèle que quand la tâche demande de comprendre du langage ou de produire du contenu.',
      },
      {
        titre: 'Mise en place avec garde-fous',
        texte:
          'Ce qui est automatisé reste vérifiable. Les décisions engageantes gardent une validation humaine. Le système trace ce qu’il fait.',
      },
      {
        titre: 'Mesure du temps récupéré',
        texte:
          'On compare le temps passé avant et après. Si le gain n’est pas mesurable, l’automatisation ne se justifie pas.',
      },
    ],
    valeur:
      'Du temps rendu à vos équipes pour le travail que la machine ne sait pas faire.',
    valeurPoints: [
      'Moins de ressaisies, donc moins d’erreurs',
      'Des opérations qui tiennent quand le volume augmente',
      'Une IA employée là où elle crée de la valeur, pas là où elle fait joli',
    ],
    action: 'Identifier ce qui peut être automatisé',
    seoTitre: 'IA et automatisation pour entreprises',
    seoDescription:
      'Automatisation des tâches répétitives et intégration de l’IA là où elle crée de la valeur. Pour les entreprises en Côte d’Ivoire.',
  },
  {
    slug: 'solutions-sur-mesure',
    index: '06',
    titre: 'Solutions digitales sur mesure',
    accroche:
      'Concevoir et développer l’outil que votre métier réclame et qu’aucun logiciel du marché ne couvre.',
    probleme:
      'Votre métier a une spécificité. Les logiciels génériques vous demandent de vous y plier.',
    problemeDetails: [
      'Vous payez plusieurs abonnements pour n’utiliser que 10 % de chaque outil.',
      'Les outils ne se parlent pas : les données sont ressaisies entre eux.',
      'Le logiciel choisi impose une façon de travailler qui ne correspond pas à la vôtre.',
      'Les informations critiques finissent quand même dans un fichier partagé à côté.',
    ],
    approche: 'On construit petit, on livre tôt, on étend selon l’usage réel.',
    approcheEtapes: [
      {
        titre: 'Cahier des charges honnête',
        texte:
          'Ce qui est possible, ce qui ne l’est pas, ce que ça implique. Les limites techniques sont écrites avant le devis, pas découvertes à la livraison.',
      },
      {
        titre: 'Premier périmètre utilisable',
        texte:
          'Un module qui résout déjà un vrai problème, mis entre les mains des utilisateurs rapidement. C’est l’usage qui dicte la suite.',
      },
      {
        titre: 'Extension par modules',
        texte:
          'Chaque phase ajoute une capacité complète plutôt qu’une fonctionnalité partielle répartie sur tout l’outil.',
      },
      {
        titre: 'Transmission',
        texte:
          'Documentation, accès, comptes administrateurs. L’outil vous appartient et reste exploitable sans nous.',
      },
    ],
    valeur:
      'Un outil qui épouse votre façon de travailler, au lieu de l’inverse.',
    valeurPoints: [
      'Un périmètre livré et utilisé plutôt qu’un projet complet jamais fini',
      'Des données centralisées dans un seul endroit',
      'Une propriété pleine et entière de l’outil et de ses données',
    ],
    action: 'Décrire votre besoin métier',
    seoTitre: 'Solution digitale sur mesure pour entreprise',
    seoDescription:
      'Conception et développement d’outils numériques sur mesure : plateformes métier, espaces clients, systèmes de gestion. Abidjan, Côte d’Ivoire.',
  },
];

export const PROCESSUS = [
  {
    num: '01',
    titre: 'Comprendre',
    texte:
      'Votre activité, votre modèle économique, vos contraintes. On écoute les personnes qui font le travail, pas seulement celles qui le décrivent.',
  },
  {
    num: '02',
    titre: 'Diagnostiquer',
    texte:
      'Où le travail attend, où l’information se perd, où l’argent fuit. Les problèmes sont nommés et hiérarchisés avant qu’une solution soit évoquée.',
  },
  {
    num: '03',
    titre: 'Concevoir',
    texte:
      'La stratégie et la solution. Le périmètre exact, ce qui est exclu, la séquence de livraison. Écrit, chiffré, validable.',
  },
  {
    num: '04',
    titre: 'Construire',
    texte:
      'Développement, contenus, campagnes, automatisations. Par paliers utilisables, jamais en un seul bloc livré à la fin.',
  },
  {
    num: '05',
    titre: 'Déployer',
    texte:
      'Mise en production, formation des utilisateurs, transmission des accès. Le passage à l’usage réel fait partie du projet.',
  },
  {
    num: '06',
    titre: 'Optimiser',
    texte:
      'Mesure de ce qui se passe réellement, corrections, évolutions. Ce qui ne produit pas est arrêté plutôt que reconduit.',
  },
] as const;

/**
 * Questions fréquentes.
 * Règle : aucune réponse ne contient de tarif, de délai chiffré ou de résultat
 * que DO COM ne pourrait pas tenir. Les réponses qui touchent au prix renvoient
 * à la logique de devis, jamais à un montant.
 */
export type Question = { q: string; r: string };
export type GroupeFaq = { id: string; titre: string; questions: Question[] };

export const FAQ: GroupeFaq[] = [
  {
    id: 'travailler-ensemble',
    titre: 'Travailler avec DO COM',
    questions: [
      {
        q: 'Concrètement, comment démarre un projet avec vous ?',
        r: 'Vous décrivez votre situation depuis le formulaire de contact ou sur WhatsApp. Nous répondons sous 24 h ouvrées. Si le besoin est déjà clair, nous proposons directement une approche et un ordre de grandeur. S’il ne l’est pas encore, nous proposons un diagnostic de 45 minutes, sans engagement, pour comprendre comment votre activité fonctionne avant de proposer quoi que ce soit.',
      },
      {
        q: 'Le diagnostic est-il vraiment gratuit ?',
        r: 'Oui, et il est utile même si vous ne travaillez jamais avec nous. En 45 minutes, en visio ou sur WhatsApp, nous cartographions rapidement votre façon de travailler et nous repérons ce qui peut être digitalisé, automatisé ou simplement supprimé. Vous repartez avec des pistes concrètes que vous êtes libre de mettre en œuvre seul ou avec un autre prestataire.',
      },
      {
        q: 'Faut-il être à Abidjan pour travailler avec vous ?',
        r: 'Non. Nous sommes basés à Abidjan et une partie de nos projets s’y déroule, mais l’essentiel du travail se mène à distance. Nous intervenons en Côte d’Ivoire, au Sénégal, au Bénin, au Togo et plus largement en Afrique francophone, ainsi qu’en Europe francophone quand le projet s’y prête.',
      },
      {
        q: 'Est-ce que vous refusez des projets ?',
        r: 'Oui, régulièrement. Quand un besoin sort de notre périmètre, quand un calendrier n’est pas tenable, ou quand notre diagnostic conclut que le projet ne vaut pas l’investissement, nous le disons plutôt que de signer puis de décevoir. Le cas échéant, nous vous orientons vers quelqu’un de plus pertinent.',
      },
      {
        q: 'Travaillez-vous avec de très petites structures ?',
        r: 'Oui. Une partie de nos clients sont des entrepreneurs et des TPE dont l’activité tient sur une seule personne. Le périmètre est simplement adapté : sur une petite structure, l’enjeu est rarement de construire une plateforme, mais de structurer ce qui existe et d’automatiser deux ou trois tâches qui mangent les journées.',
      },
    ],
  },
  {
    id: 'budget',
    titre: 'Budget, devis et facturation',
    questions: [
      {
        q: 'Combien coûte un projet ?',
        r: 'Il n’y a pas de tarif affiché, parce qu’il n’y a pas de projet standard : le prix dépend du périmètre, et le périmètre se définit après avoir compris le problème. Le formulaire de contact propose des fourchettes de budget indicatives, uniquement pour que nous puissions vous proposer un périmètre réaliste dès le premier échange. Cette information ne détermine pas notre réponse.',
      },
      {
        q: 'Comment se passe le paiement ?',
        r: 'Un acompte de 50 % est demandé à la commande, le solde selon l’échéancier fixé dans le devis. Nous acceptons les paiements par Wave, Orange Money, MTN, Moov et virement bancaire. Les projets peuvent être facturés en francs CFA ou en euros selon votre situation.',
      },
      {
        q: 'Le devis peut-il évoluer en cours de projet ?',
        r: 'Le périmètre écrit au départ fait foi. S’il évolue à votre demande en cours de route, l’impact est chiffré et validé par vous avant que le travail correspondant soit engagé. Vous ne découvrez pas un dépassement à la facture finale.',
      },
      {
        q: 'Comment se signe le contrat ?',
        r: 'À distance. Le contrat vous est envoyé par lien, vous le lisez et le signez en ligne, sans imprimer ni scanner. Le texte est figé au moment de l’envoi et la signature est horodatée. Vous pouvez demander une modification depuis ce même lien avant de signer.',
      },
    ],
  },
  {
    id: 'methode',
    titre: 'Méthode et déroulement',
    questions: [
      {
        q: 'Pourquoi commencez-vous par le diagnostic plutôt que par la solution ?',
        r: 'Parce que digitaliser un processus mal défini ne le corrige pas : cela l’enferme dans un logiciel, où il devient plus difficile à changer qu’avant. C’est la raison pour laquelle tant d’entreprises ont un outil coûteux que personne n’utilise, et un fichier Excel à côté qui fait le vrai travail. Les trois premières étapes de notre méthode servent à éviter exactement ça.',
      },
      {
        q: 'Combien de temps prend un projet ?',
        r: 'Le délai dépend entièrement du périmètre et il est fixé dans le devis, pas avant. Ce que nous pouvons garantir sur la forme : nous livrons par paliers utilisables. Vous voyez quelque chose fonctionner tôt, et l’usage réel oriente la suite — plutôt que d’attendre plusieurs mois une livraison unique.',
      },
      {
        q: 'Qu’attendez-vous de nous pendant le projet ?',
        r: 'Trois choses, et elles pèsent souvent plus sur le résultat que notre propre travail : l’accès aux personnes qui exécutent le travail et pas seulement à la direction, des réponses franches sur ce qui a déjà échoué avant nous, et une validation à chaque palier. Un projet qui attend trois semaines une réponse prend trois semaines de retard.',
      },
      {
        q: 'Que se passe-t-il si le projet ne donne pas les résultats attendus ?',
        r: 'C’est écrit dans le point de mesure plutôt que contourné. Notre méthode prévoit une étape d’optimisation : on regarde ce que les chiffres disent réellement, on corrige, et ce qui ne produit pas est arrêté plutôt que reconduit par habitude.',
      },
    ],
  },
  {
    id: 'technique',
    titre: 'Technique, IA et propriété',
    questions: [
      {
        q: 'Utilisez-vous l’intelligence artificielle sur tous les projets ?',
        r: 'Non. Beaucoup de problèmes se résolvent par une automatisation simple et prévisible, sans IA — et c’est souvent la meilleure solution parce qu’elle est plus fiable et moins coûteuse à maintenir. Nous mobilisons un modèle quand la tâche demande de comprendre du langage ou de produire du contenu, pas pour l’argument commercial.',
      },
      {
        q: 'À qui appartient ce que vous construisez ?',
        r: 'À vous. Code, accès, comptes administrateurs, documentation : tout vous est transmis. L’objectif est que vous restiez capables d’exploiter et de faire évoluer l’outil, avec ou sans nous. Nous ne construisons pas de dépendance délibérée.',
      },
      {
        q: 'Pouvez-vous reprendre un site ou un outil existant ?',
        r: 'Souvent, oui. Nous commençons par regarder ce qui existe : une partie est fréquemment récupérable, et refaire à neuf n’est pas toujours le bon calcul. Si en revanche la base rend chaque évolution plus coûteuse que la reconstruire, nous vous le disons avec les raisons.',
      },
      {
        q: 'Est-il possible d’empêcher totalement la copie d’un contenu en ligne ?',
        r: 'Non, et méfiez-vous de tout prestataire qui vous l’affirme. Aucune plateforme ne peut bloquer une capture d’écran ni la photo d’un écran : ce sont des fonctions du système d’exploitation, hors de portée d’un site web. Ce qui est réellement possible : empêcher le téléchargement du fichier d’origine, bloquer l’impression et la copie, rendre l’extraction massive impraticable, et identifier chaque lecteur par un filigrane personnel. C’est l’objectif réaliste, et nous l’écrivons avant la signature.',
      },
      {
        q: 'Vos sites fonctionnent-ils correctement sur les connexions locales ?',
        r: 'C’est une contrainte de conception, pas un détail. Nous générons des pages statiques, optimisons les images et limitons au maximum le JavaScript envoyé au navigateur. Un site doit rester rapide sur un réseau mobile ivoirien, pas seulement sur une connexion fibre.',
      },
    ],
  },
];
