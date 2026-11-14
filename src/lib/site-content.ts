export const disciplines = [
  {
    id: "strategie",
    title: "Stratégie et économie",
    lead: "Ce que l’entreprise doit pouvoir faire dans deux ans, compte tenu de ses contraintes réelles.",
    body: "Une transformation qui ignore la position concurrentielle produit des projets techniques sans enjeu. EXIOR part de l’activité : offre, clients, marges, dépendances, saisonnalité, capacité de financement. Le plan ne propose pas « d’innover ». Il dit quelles capacités doivent exister pour que l’entreprise reste jouable — et lesquelles peuvent attendre.",
    method: [
      "Lecture de l’activité : chaîne de valeur, unités de marge, goulots.",
      "Contraintes non négociables : cash, réglementation, personnes clés, contrats.",
      "Choix explicites : ce qu’on renforce, ce qu’on arrête, ce qu’on ne touche pas.",
    ],
  },
  {
    id: "organisation",
    title: "Organisation",
    lead: "Des fonctions et des responsabilités qui rendent l’exécution lisible.",
    body: "La plupart des entreprises grandissent par ajout : un outil, un rôle, une exception. Au bout d’un moment, personne ne sait plus qui détient la décision. EXIOR redessine les fonctions, les interfaces et les instances. L’objectif n’est pas un organigramme plus plat. C’est une coordination plus courte entre ce qui crée de la valeur et ce qui la livre.",
    method: [
      "Cartographie des fonctions actuelles et des zones grises.",
      "Organisation cible : pôles, responsabilités, interfaces.",
      "Rituels de décision : fréquence, entrée, sortie, arbitrage.",
    ],
  },
  {
    id: "processus",
    title: "Processus et optimisation",
    lead: "Décomposer avant d’automatiser. Modéliser avant de promettre un gain.",
    body: "Un processus mal décrit ne s’automatise pas : il se rigidifie. Nous décomposons les activités critiques en étapes, objets, règles et exceptions. Quand le problème s’y prête — ordonnancement, affectation, files, stocks, tournées, capacité — nous le formulons comme un problème d’optimisation : objectif, variables, contraintes. Le plan indique alors le chemin retenu, les hypothèses, et ce qui reste du jugement humain. Nous nous appuyons sur les méthodes classiques de recherche opérationnelle (programmation linéaire et en nombres entiers, heuristiques, simulation de files) sans prétendre qu’un solveur remplace la direction.",
    method: [
      "Décomposition : entrées, transformations, sorties, exceptions.",
      "Formulation : objectif, contraintes, ce qui est mesurable.",
      "Recomposition : processus cible, contrôles, ordre de mise en œuvre.",
    ],
  },
  {
    id: "macro",
    title: "Veille macroéconomique",
    lead: "Lire le cycle pour ne pas transformer l’entreprise contre le vent.",
    body: "Une architecture pensée dans le vide ignore le coût du capital, la demande, l’inflation des intrants, le marché du travail. Le plan intègre une lecture macro courte et sourcée : croissance, prix, conditions de financement, emploi, commerce extérieur quand ils touchent l’activité. Les références de travail sont publiques et traçables — BCE, INSEE, Eurostat, FMI, OCDE — croisées, pas recopiées. Il ne s’agit pas d’une prévision propriétaire. Il s’agit d’éviter de figer des investissements qui ne tiennent que dans un seul scénario.",
    method: [
      "Indicateurs qui touchent vraiment votre modèle, pas un tableau de bord générique.",
      "Deux ou trois scénarios simples : base, tension, détente.",
      "Conséquences sur le séquencement de la feuille de route.",
    ],
  },
  {
    id: "secteur",
    title: "Veille sectorielle",
    lead: "Savoir contre qui vous vous battez, et sur quels standards.",
    body: "La compétitivité se mesure à l’intérieur d’un secteur : délais, taux de service, coût de revient, acquisition, rétention, conformité. EXIOR situe l’entreprise par rapport aux pratiques observables des pairs et aux mouvements structurants du métier — sans inventer un classement. Les matériaux sont les statistiques sectorielles, les publications des fédérations, les rapports d’analystes quand ils existent, et ce que vos propres chiffres disent déjà. Le plan traduit cette lecture en priorités : où un retard est dangereux, où copier le marché serait une erreur.",
    method: [
      "Périmètre concurrentiel réel, pas le secteur statistique le plus proche.",
      "Quelques ratios qui comptent pour votre modèle.",
      "Implications pour l’organisation et pour les cas d’usage IA.",
    ],
  },
  {
    id: "ia",
    title: "Intelligence artificielle",
    lead: "Des agents là où ils tiennent. Un harness, pas un chatbot collé au métier.",
    body: "Un agent fiable n’est pas un modèle plus gros. C’est un système borné : un objectif, un contexte, des outils autorisés, une mémoire utile, une sortie vérifiable, une personne qui peut l’arrêter. EXIOR spécifie ces harness métier par métier. Le protocole de contexte (MCP) sert à brancher outils et données de façon explicite, plutôt que par des intégrations opaques. Les skills sont des capacités réutilisables — extraire, classer, rédiger un brouillon, contrôler une cohérence — jamais une délégation de la décision quand l’enjeu l’interdit.",
    method: [
      "Cas d’usage candidats, puis filtre de valeur, de risque et de donnée.",
      "Harness : rôle, outils, limites, validation, journal.",
      "Ce qui reste humain, nommément.",
    ],
  },
  {
    id: "data",
    title: "Données et systèmes",
    lead: "Une architecture qui relie l’existant au lieu de le remplacer.",
    body: "Les entreprises n’ont pas un problème d’outils. Elles ont un problème de connexions, de doublons et de définitions contradictoires. Le plan décrit le paysage actuel, les objets métier qui doivent avoir une définition unique, et les flux qui doivent exister. L’architecture cible est évolutive : on peut ajouter une capacité plus tard sans reprendre les fondations. On dit aussi ce qu’il ne faut pas migrer.",
    method: [
      "Inventaire honnête des systèmes et de leurs propriétaires.",
      "Objets métier et définitions.",
      "Connexions prioritaires et dette assumée.",
    ],
  },
  {
    id: "securite",
    title: "Souveraineté et cybersécurité",
    lead: "Où vivent les données, qui y touche, quelle trace reste.",
    body: "La souveraineté n’est pas un slogan. C’est le lieu de traitement, le lieu de stockage, les sous-traitants, les clés, les journaux. La cybersécurité du plan s’appuie sur des principes connus et exigibles : moindre privilège, séparation des environnements, traçabilité des actions d’agents, gestion des secrets, reprise. Les cadres de référence sont ceux que vos équipes et vos auditeurs reconnaissent déjà — recommandations ANSSI, principes ISO 27001, contrôles de type NIST — utilisés comme grille de conception, pas comme une certification que nous n’attribuons pas.",
    method: [
      "Classification simple des données : publique, interne, sensible.",
      "Résidence et sous-traitance explicites.",
      "Contrôles minimum avant tout agent en production.",
    ],
  },
] as const;

export const sources = [
  {
    group: "Macroéconomie",
    items: [
      "Banque centrale européenne — conditions monétaires et de crédit",
      "INSEE et Eurostat — prix, emploi, production, commerce",
      "FMI et OCDE — perspectives et comparaisons internationales",
    ],
  },
  {
    group: "Secteur et compétitivité",
    items: [
      "Statistiques de branche et publications de fédérations professionnelles",
      "Rapports d’analystes sectoriels quand le marché en produit",
      "Vos propres séries : marge, délai, taux de service, acquisition",
    ],
  },
  {
    group: "IA, agents, benchmarks",
    items: [
      "Spécification Model Context Protocol — connexion explicite des outils",
      "Stanford HAI AI Index et travaux OCDE sur l’IA — état de l’art, pas une mode",
      "Évaluations publiques de modèles, lues avec leurs limites méthodologiques",
    ],
  },
  {
    group: "Optimisation et systèmes",
    items: [
      "Recherche opérationnelle : formulation, contraintes, heuristiques",
      "Architecture d’entreprise : capacités, applications, données, acteurs",
      "ANSSI, principes ISO 27001, familles de contrôles NIST",
    ],
  },
] as const;

export const deliverables = [
  {
    n: "01",
    title: "Cartographie d’entreprise",
    time: "Lecture de l’existant",
    text: "Une vision structurée de l’organisation, des activités, des processus et de l’environnement numérique actuel. On y voit les fonctions, les outils, les données qui circulent, les décisions qui traînent et les dépendances qui bloquent.",
    includes: [
      "Périmètre de l’activité et chaîne de valeur simplifiée",
      "Fonctions, rôles critiques, zones grises",
      "Processus qui portent le chiffre ou le risque",
      "Paysage d’outils et propriétaires",
      "Contraintes : réglementaires, humaines, de trésorerie",
    ],
  },
  {
    n: "02",
    title: "Architecture cible",
    time: "La forme à atteindre",
    text: "La conception de l’organisation et de l’environnement numérique futurs : fonctions, systèmes, connexions, données, capacités d’IA. Ce n’est pas une cible théorique. C’est une cible compatible avec ce que vous êtes déjà.",
    includes: [
      "Fonctions cibles et interfaces",
      "Objets métier et règles de donnée",
      "Systèmes conservés, reliés, ou sortis",
      "Cas d’usage IA retenus et exclus",
      "Principes de souveraineté et de sécurité",
    ],
  },
  {
    n: "03",
    title: "Transformations prioritaires",
    time: "Ce qui change, et pourquoi",
    text: "Pour chaque fonction concernée : le changement, son rôle dans l’architecture, le bénéfice attendu, le risque si on le fait trop tôt. Les priorités ne sont pas une liste de souhaits. Elles sont ordonnées par dépendance.",
    includes: [
      "Changement par fonction",
      "Bénéfice attendu, formulé sans chiffre inventé",
      "Prérequis de donnée, d’outil ou de rôle",
      "Risques et ce qu’on surveille",
    ],
  },
  {
    n: "04",
    title: "Feuille de route",
    time: "L’ordre d’exécution",
    text: "Les étapes, leurs dépendances, leur charge indicative et l’ordre logique. Une transformation échoue quand tout démarre en même temps. La feuille de route dit ce qui débloque la suite.",
    includes: [
      "Séquence en vagues",
      "Dépendances explicites",
      "Ce qui peut avancer en parallèle",
      "Jalons de décision, pas seulement de livraison",
    ],
  },
  {
    n: "05",
    title: "Espace EXIOR",
    time: "Le plan, consultable",
    text: "Un environnement personnel pour explorer l’architecture, relire les transformations et retrouver la feuille de route. Le document ne meurt pas dans une pièce jointe.",
    includes: [
      "Architecture navigable",
      "Priorités et dépendances",
      "Hypothèses et sources utilisées",
      "Décisions ouvertes, clairement marquées",
    ],
  },
] as const;

export const days = [
  {
    phase: "Jours 1 à 3",
    title: "Dossier et cadrage",
    text: "Vous décrivez l’activité, l’organisation, les outils, les objectifs et les contraintes. Nous revenons sur ce qui manque : un chiffre, un processus, un outil fantôme. Sans dossier complet, le délai de 14 jours ne démarre pas.",
  },
  {
    phase: "Jours 4 à 7",
    title: "Lecture et modèle",
    text: "Cartographie de l’existant. Décomposition des processus critiques. Lecture macro et sectorielle limitée à ce qui change vos choix. Formulation des problèmes qui méritent une optimisation, et de ceux qui n’en méritent pas.",
  },
  {
    phase: "Jours 8 à 11",
    title: "Architecture et priorités",
    text: "Organisation cible, paysage numérique, harness des agents retenus, règles de donnée et de sécurité. Hiérarchisation : valeur, dépendance, risque, capacité réelle de l’équipe.",
  },
  {
    phase: "Jours 12 à 14",
    title: "Feuille de route et espace",
    text: "Séquence d’exécution, hypothèses, décisions ouvertes. Mise à disposition du plan et de l’Espace EXIOR. Vous repartez avec un ordre, pas avec une bibliothèque de slides.",
  },
] as const;

export const faqs = [
  {
    q: "Pour qui est le plan ?",
    a: "Dirigeants de TPE et PME déjà en activité, qui veulent une architecture cohérente avant d’empiler des outils ou des agents. Le plan est inutile si vous cherchez une formation générale à l’IA ou un développement logiciel clé en main.",
  },
  {
    q: "Que recevons-nous exactement au bout de 14 jours ?",
    a: "La cartographie, l’architecture cible, les transformations prioritaires, la feuille de route, et l’accès à l’Espace EXIOR. Le délai court à réception du dossier complet, pas à la date du paiement.",
  },
  {
    q: "Est-ce que vous déployez les agents dans nos systèmes ?",
    a: "Non. La conception est incluse. Le déploiement technique — connexions, environnements, supervision en production — est une prestation distincte, décidée après le plan, quand vous savez ce qui mérite d’être construit.",
  },
  {
    q: "Comment les agents sont-ils rendus fiables ?",
    a: "Par le harness : périmètre étroit, outils autorisés, donnée classée, sortie vérifiable, validation humaine sur les décisions à enjeu, journal des actions. Un agent sans ces bornes n’entre pas dans l’architecture cible.",
  },
  {
    q: "D’où viennent la veille et les benchmarks ?",
    a: "De sources publiques traçables (BCE, INSEE, Eurostat, FMI, OCDE, statistiques de branche, évaluations publiées de modèles) et de vos propres chiffres. Nous ne vendons pas un indice propriétaire ni un accès exclusif à des analystes.",
  },
  {
    q: "Allez-vous nous imposer de remplacer nos outils ?",
    a: "Non. L’architecture part de l’existant. Remplacer un système n’est recommandé que si la dette bloque une capacité réellement prioritaire.",
  },
  {
    q: "Et si notre situation est trop spécifique ?",
    a: "C’est le cas de presque toutes les entreprises. Le plan est conçu à partir de votre dossier, pas d’un modèle sectoriel collé. Si le dossier révèle qu’un plan de ce format n’a pas de sens, nous le disons avant d’aller au bout.",
  },
  {
    q: "Qui reste responsable des décisions ?",
    a: "Vous. EXIOR fournit l’architecture, les priorités et l’ordre. Les arbitrages de direction, les embauches, les investissements et la relation client restent les vôtres.",
  },
] as const;

export const failures = [
  {
    title: "L’outil avant l’organisation",
    text: "On achète une plateforme, puis on cherche quel processus elle est censée porter. Le travail réel, lui, continue dans les tableurs et les messages.",
  },
  {
    title: "L’agent sans harness",
    text: "Un assistant branché sur toute la messagerie, sans rôle, sans limite, sans journal. Il produit du texte. Il ne réduit aucun cycle identifiable.",
  },
  {
    title: "La donnée contradictoire",
    text: "Trois définitions du client, deux du stock, aucune du délai. Aucun modèle ne répare ça. Il faut d’abord une définition.",
  },
  {
    title: "Tout en parallèle",
    text: "Sept chantiers ouverts, aucune dépendance respectée. L’équipe exécute la transformation en plus du métier, puis s’arrête.",
  },
  {
    title: "La veille décorative",
    text: "Un rapport macro de quarante pages qui ne change aucune priorité. La veille n’a de place dans le plan que si elle déplace une décision.",
  },
  {
    title: "La sécurité en annexe",
    text: "On choisit les outils, puis on demande si les données peuvent y aller. L’ordre correct est l’inverse.",
  },
] as const;

export const agentRules = [
  {
    title: "Un rôle, pas une personnalité",
    text: "L’agent fait une famille de tâches : trier des demandes, préparer une synthèse, contrôler une cohérence, proposer un ordonnancement. S’il « aide sur tout », il n’est pas spécifié.",
  },
  {
    title: "Des outils nommés",
    text: "Via un protocole de contexte explicite, l’agent n’appelle que les systèmes autorisés. Pas d’accès implicite au reste du système d’information.",
  },
  {
    title: "Une sortie vérifiable",
    text: "Le résultat a une forme : une classification, un brouillon, une alerte, une proposition d’affectation. Une personne peut le reprendre sans reconstruire le raisonnement.",
  },
  {
    title: "Une porte humaine",
    text: "Dès que l’action engage un client, un paiement, un contrat ou une donnée sensible, la validation est humaine. L’agent prépare. Il n’engage pas.",
  },
  {
    title: "Une trace",
    text: "Qui a lancé, sur quelle donnée, quel outil a été appelé, quelle sortie a été produite. Sans journal, il n’y a pas d’exploitation sérieuse.",
  },
  {
    title: "Un critère d’arrêt",
    text: "Si la donnée est incomplète ou le cas hors périmètre, l’agent s’arrête et remonte. Inventer une réponse n’est pas un mode dégradé acceptable.",
  },
] as const;
