import type { Language } from "@/lib/i18n/languages";
import type { ProjectContext } from "./types";

export interface ProjectCopy {
  name: string;
  subtitle: string;
  description: string;
  overview: string;
  context?: ProjectContext;
  highlights: string[];
  lessonsLearned: string[];
  challenges: string[];
  futureImprovements: string[];
}

export const PROJECTS_COPY: Record<Language, Record<string, ProjectCopy>> = {
  en: {
    klasmwen: {
      name: "KlasMwen",
      subtitle: "Educational Social Platform",
      description:
        "A full-stack learning and collaboration platform where students share notes, ask questions, and post study materials.",
      overview:
        "KlasMwen is a modern educational social platform built to centralize student collaboration and encourage community-based learning.",

      context: {
        primary: {
          label: "Motivation",
          content:
            "I wanted to challenge myself by building a full-featured social platform from scratch. Instead of cloning an existing platform, I chose an educational context to explore real-world features like file sharing, moderation, and structured discussions.",
        },
        secondary: {
          label: "Approach",
          content:
            "I designed and built an end-to-end system with posting, comments, reactions, file uploads, and moderation workflows, focusing on clean architecture, type safety, and maintainability.",
        },
      },

      highlights: [
        "Full social learning platform with posts, comments, bookmarks, and reactions",
        "Real-time notifications using WebSockets",
        "Robust authentication with JWT, role-based access control, and secure sessions",
        "Built-in safety & moderation system with user reporting and admin dashboards",
        "Advanced file sharing with Cloudinary storage and automatic metadata extraction",
        "End-to-end validation and rate limiting to prevent abuse and ensure data integrity",
        "High-performance UX with server-state caching, optimistic updates, and debounced search",
      ],

      lessonsLearned: [
        "Implementing complex file upload and moderation workflows",
        "Structuring and maintaining a large full-stack codebase cleanly",
        "Strengthening end-to-end type safety using TypeScript and Zod across API layers",
        "Documenting REST APIs with Swagger / OpenAPI for clarity and maintainability",
        "Setting up scalable backend logging and error tracing using Pino",
        "Designing and implementing real-time features using WebSockets (Socket.IO)",
      ],

      challenges: [
        "Keeping UI state in sync with server updates",
        "Managing file uploads and downloads efficiently",
        "Designing scalable posting & commenting structures",
        "Ensuring relational consistency across posts, comments, reactions, and bookmarks",
        "Maintaining consistent type-safety across client, server, and database layers",
        "Keeping frontend components modular and the backend codebase cleanly organized",
      ],
      futureImprovements: [
        "Group Chats & Study Circles",
        "Complete Admin Dashboard for moderation and user management",
      ],
    },

    textnode: {
      name: "TextNode",
      subtitle: "Blogging Platform",
      description:
        "A full-stack blog split into a public reader site for visitors and a private editor dashboard for the blog owner to manage articles, drafts, and content.",

      overview:
        "TextNode is a modern full-stack blogging platform featuring a public reader interface and a private editor dashboard for authors to create and manage articles.",

      highlights: [
        "Two independent frontends (reader & editor) consuming the same API",
        "DDD‑inspired backend with clear domain, application, and infrastructure layers",
        "Explicit use cases and centralized authorization",
        "Zod‑based validation shared across frontend forms and API boundaries",
        "Role‑based author dashboard with draft, publish, and moderation workflows",
        "Rate limiting, structured logging, and cookie‑based JWT authentication",
      ],

      lessonsLearned: [
        "Applying Domain‑Driven Design pragmatically in a real project",
        "Designing backend architectures that scale without rewrites",
        "Structuring monorepos with multiple frontends and a shared API",
        "Centralizing cross‑cutting concerns like validation, auth, and rate limiting",
        "Balancing architectural clarity with avoiding over‑engineering",
      ],

      challenges: [
        "Refactoring an early‑career codebase without breaking existing behavior",
        "Separating domain logic from Express and Prisma concerns",
        "Keeping frontend and backend validation fully aligned",
        "Managing authenticated flows across two separate frontend applications",
      ],

      futureImprovements: [
        "Image uploads and media management via Cloudinary",
        "Shared frontend packages for UI, hooks, and schemas",
        "Expanded moderation and analytics tooling",
        "Automated testing for domain and application layers",
      ],
    },

    waldo: {
      name: "Where’s Waldo?",
      subtitle: "Photo Tagging Game",
      description:
        "An interactive Where’s Waldo-style game where players find characters and submit times to a global leaderboard.",

      overview:
        "A fast, interactive hidden-object game inspired by Where’s Waldo. Players search characters in a detailed image and compete on a global leaderboard.",

      context: {
        primary: {
          label: "Challenge",
          content:
            "A full-stack challenge from The Odin Project focused on building a photo-tagging game with multiple scenes, character detection, and a persistent leaderboard.",
        },
        secondary: {
          label: "Implementation",
          content:
            "I built a React-based game interface that uses predefined character positions stored in a PostgreSQL database. Game scenes and character data are served via a REST API, while the frontend handles click detection, game flow, and UI feedback.",
        },
      },

      highlights: [
        "Smooth animations and polished UI interactions",
        "Predefined character positions stored as normalized ratios for responsive layout",
        "Global leaderboard with persistent timestamps",
        "Optimized frontend state management for fast user feedback",
      ],

      lessonsLearned: [
        "Modeling character positions for responsive, scalable images",
        "Building full-stack interactions that feel instant",
        "Managing complex UI state for click detection and game flow",
      ],

      challenges: [
        "Mapping clicks to normalized character coordinates across screen sizes",
        "Synchronizing client and server during leaderboard submissions",
        "Creating a responsive and smooth UI for large game images",
      ],
      futureImprovements: [
        "Build an admin UI for uploading scenes and managing character data",
        "Implement optional authentication for personalized experiences",
        "Increase test coverage for frontend and backend",
        "Add new game scenes to expand gameplay variety",
      ],
    },
  },

  fr: {
    klasmwen: {
      name: "KlasMwen",
      subtitle: "Plateforme sociale éducative",
      description:
        "Une plateforme d’apprentissage et de collaboration full-stack où les étudiants partagent des notes, posent des questions et publient des supports de cours.",
      overview:
        "KlasMwen est une plateforme sociale éducative moderne conçue pour centraliser la collaboration étudiante et encourager l’apprentissage communautaire.",

      context: {
        primary: {
          label: "Motivation",
          content:
            "Je voulais me challenger en construisant une plateforme sociale complète à partir de zéro. Plutôt que de cloner une plateforme existante, j’ai choisi un contexte éducatif afin d’explorer des fonctionnalités concrètes comme le partage de fichiers, la modération et les discussions structurées.",
        },
        secondary: {
          label: "Approche",
          content:
            "J'ai conçu et développé un système complet permettant la publication, les commentaires, les réactions, le téléchargement de fichiers et les workflows de modération, en mettant l'accent sur une architecture épurée, la sécurité et la maintenabilité.",
        },
      },

      highlights: [
        "Plateforme sociale d’apprentissage complète avec publications, commentaires, favoris et réactions",
        "Notifications en temps réel à l'aide de WebSockets",
        "Authentification robuste avec JWT, contrôle d’accès basé sur les rôles et sessions sécurisées",
        "Système intégré de sécurité et de modération avec signalements utilisateurs et tableaux de bord administrateur",
        "Partage de fichiers avancé avec stockage Cloudinary et extraction automatique des métadonnées",
        "Validation de bout en bout et limitation de débit pour prévenir les abus et garantir l’intégrité des données",
        "Expérience utilisateur haute performance avec mise en cache de l'état du serveur, mises à jour optimistes et recherche anti-rebond",
      ],

      lessonsLearned: [
        "Implémentation de workflows complexes de téléversement de fichiers et de modération",
        "Structuration et maintenance propre d’une large base de code full-stack",
        "Renforcement de la sécurité des types de bout en bout avec TypeScript et Zod",
        "Documentation d’API REST avec Swagger / OpenAPI",
        "Mise en place de logs backend scalables et de traçage d’erreurs avec Pino",
        "Conception et mise en œuvre de fonctionnalités en temps réel à l'aide de WebSockets (Socket.IO)",
      ],

      challenges: [
        "Maintenir la synchronisation entre l’interface utilisateur et les mises à jour serveur",
        "Gérer efficacement les téléchargements et les chargements de fichiers",
        "Conception de structures évolutives pour les publications et les commentaires",
        "Garantir la cohérence relationnelle entre publications, commentaires, réactions et favoris",
        "Maintenir une sécurité de typage cohérente entre client, serveur et base de données",
        "Conserver des composants frontend modulaires et un backend bien organisé",
      ],

      futureImprovements: [
        "Notifications en temps réel via WebSockets",
        "groupe chats et cercles d’étude",
        "Tableau de bord administrateur complet pour la modération et la gestion des utilisateurs",
      ],
    },

    textnode: {
      name: "TextNode",
      subtitle: "Plateforme de blogging",
      description:
        "Un blog full-stack composé d’un site public pour les lecteurs et d’un tableau de bord privé permettant à l’auteur de gérer articles, brouillons et contenus.",

      overview:
        "TextNode est une plateforme de blogging full-stack moderne avec une interface publique de lecture et un tableau de bord privé pour la création et la gestion d’articles.",

      highlights: [
        "Deux frontends indépendants (lecteur et éditeur) consommant la même API",
        "Backend inspiré du DDD avec séparation claire des couches domaine, application et infrastructure",
        "Cas d’usage explicites et autorisation centralisée",
        "Validation basée sur Zod partagée entre formulaires frontend et API",
        "Tableau de bord auteur avec gestion des brouillons, publication et modération",
        "Limitation de débit, logs structurés et authentification JWT via cookies",
      ],

      lessonsLearned: [
        "Application pragmatique du Domain-Driven Design dans un projet réel",
        "Conception d’architectures backend évolutives sans réécriture",
        "Organisation de monorepos avec plusieurs frontends et une API partagée",
        "Centralisation des préoccupations transverses comme la validation et l’authentification",
        "Équilibre entre clarté architecturale et sur-ingénierie",
      ],

      challenges: [
        "Refactorisation d’un code existant sans casser le comportement",
        "Séparation de la logique métier d’Express et Prisma",
        "Alignement parfait de la validation frontend et backend",
        "Gestion des flux authentifiés sur deux applications frontend distinctes",
      ],

      futureImprovements: [
        "Téléversement d’images et gestion des médias via Cloudinary",
        "Packages frontend partagés pour UI, hooks et schémas",
        "Outils de modération et d’analytique avancés",
        "Tests automatisés pour les couches domaine et application",
      ],
    },

    waldo: {
      name: "Où est Charlie ?",
      subtitle: "Jeu de recherche visuelle",
      description:
        "Un jeu interactif de type « Où est Charlie ? » dans lequel les joueurs doivent trouver des personnages et soumettre leurs temps à un tableau de classement.",

      overview:
        "Un jeu d'objets cachés rapide et interactif inspiré de « Où est Charlie ? » Les joueurs recherchent des personnages dans une image détaillée et s'affrontent dans un classement global.",

      context: {
        primary: {
          label: "Défi",
          content:
            "Un défi full-stack issu de The Odin Project visant à créer un jeu de photo-tagging avec plusieurs scènes, détection de personnages et classement persistant.",
        },
        secondary: {
          label: "Implémentation",
          content:
            "J’ai développé une interface de jeu en React utilisant des positions de personnages prédéfinies stockées dans une base PostgreSQL. Les scènes et données sont servies via une API REST, tandis que le frontend gère la détection des clics et le déroulement du jeu.",
        },
      },

      highlights: [
        "Animations fluides et interactions UI soignées",
        "Positions de personnages stockées sous forme de ratios normalisés pour un affichage responsive",
        "Classement mondial avec enregistrement persistant des temps",
        "Gestion optimisée de l’état frontend pour un feedback rapide",
      ],

      lessonsLearned: [
        "Modélisation de positions de personnages pour des images responsives",
        "Création d’interactions full-stack instantanées",
        "Gestion d’états UI complexes pour la détection des clics et le flux de jeu",
      ],

      challenges: [
        "Correspondance des clics avec des coordonnées normalisées selon la taille d’écran",
        "Synchronisation client-serveur lors des soumissions au classement",
        "Création d’une UI fluide et responsive pour de grandes images",
      ],

      futureImprovements: [
        "Interface admin pour téléverser des scènes et gérer les personnages",
        "Authentification optionnelle pour des expériences personnalisées",
        "Augmentation de la couverture de tests frontend et backend",
        "Ajout de nouvelles scènes pour enrichir le gameplay",
      ],
    },
  },

  es: {
    klasmwen: {
      name: "KlasMwen",
      subtitle: "Plataforma social educativa",
      description:
        "Una plataforma full-stack de aprendizaje y colaboración donde los estudiantes comparten apuntes, hacen preguntas y publican material de estudio.",
      overview:
        "KlasMwen es una plataforma social educativa moderna diseñada para centralizar la colaboración estudiantil y fomentar el aprendizaje en comunidad.",

      context: {
        primary: {
          label: "Motivación",
          content:
            "Quería retarme construyendo una plataforma social completa desde cero. En lugar de clonar una red existente, elegí un contexto educativo para explorar funciones reales como el intercambio de archivos, la moderación y las discusiones estructuradas.",
        },
        secondary: {
          label: "Enfoque",
          content:
            "He diseñado y desarrollado un sistema completo que permite la publicación, los comentarios, las reacciones, la descarga de archivos y los flujos de trabajo de moderación, haciendo hincapié en una arquitectura depurada, la seguridad y la facilidad de mantenimiento.",
        },
      },

      highlights: [
        "Plataforma social de aprendizaje completa con publicaciones, comentarios, marcadores y reacciones",
        "Notificaciones en tiempo real mediante WebSockets",
        "Autenticación robusta con JWT, control de acceso por roles y sesiones seguras",
        "Sistema integrado de seguridad y moderación con reportes de usuarios y paneles de administración",
        "Intercambio avanzado de archivos con almacenamiento en Cloudinary y extracción automática de metadatos",
        "Validación de extremo a extremo y rate limiting para prevenir abusos",
        "Experiencia de usuario de alto rendimiento con caché de estado del servidor y actualizaciones optimistas",
      ],

      lessonsLearned: [
        "Implementación de flujos complejos de subida de archivos y moderación",
        "Estructuración y mantenimiento de un gran código base full-stack",
        "Refuerzo de la seguridad de tipos usando TypeScript y Zod",
        "Documentación de APIs REST con Swagger / OpenAPI",
        "Configuración de logging escalable y trazado de errores con Pino",
        "Diseño e implementación de funciones en tiempo real utilizando WebSockets (Socket.IO)",
      ],

      challenges: [
        "Mantener el estado de la UI sincronizado con el servidor",
        "Gestionar eficazmente las descargas y cargas de archivos",
        "Diseño de estructuras escalables para publicaciones y comentarios",
        "Garantizar consistencia relacional entre publicaciones, comentarios y reacciones",
        "Mantener seguridad de tipos entre cliente, servidor y base de datos",
        "Mantener componentes frontend modulares y un backend bien organizado",
      ],

      futureImprovements: [
        "Notificaciones en tiempo real con WebSockets",
        "Chats grupales y círculos de estudio",
        "Panel de administración completo para moderación y gestión de usuarios",
      ],
    },

    textnode: {
      name: "TextNode",
      subtitle: "Plataforma de blogging",
      description:
        "Un blog full-stack dividido en un sitio público para lectores y un panel privado para que el autor gestione artículos y borradores.",

      overview:
        "TextNode es una plataforma moderna de blogging full-stack con una interfaz pública y un panel privado para crear y administrar artículos.",

      highlights: [
        "Dos frontends independientes (lector y editor) que consumen la misma API",
        "Backend inspirado en DDD con capas bien definidas",
        "Casos de uso explícitos y autorización centralizada",
        "Validación basada en Zod compartida entre frontend y API",
        "Panel de autor con flujos de borrador, publicación y moderación",
        "Rate limiting, logging estructurado y autenticación JWT con cookies",
      ],

      lessonsLearned: [
        "Aplicación práctica de Domain-Driven Design",
        "Diseño de arquitecturas backend escalables",
        "Estructuración de monorepos con múltiples frontends",
        "Centralización de validación y autenticación",
        "Equilibrio entre claridad arquitectónica y complejidad",
      ],

      challenges: [
        "Refactorizar código existente sin romper funcionalidad",
        "Separar lógica de dominio de Express y Prisma",
        "Mantener validaciones alineadas entre frontend y backend",
        "Gestionar flujos autenticados en dos aplicaciones frontend",
      ],

      futureImprovements: [
        "Subida de imágenes y gestión multimedia con Cloudinary",
        "Paquetes frontend compartidos para UI y esquemas",
        "Herramientas avanzadas de moderación y analítica",
        "Tests automatizados para capas de dominio y aplicación",
      ],
    },

    waldo: {
      name: "¿Dónde está Wally?",
      subtitle: "Juego de búsqueda visual",
      description:
        "Un juego interactivo al estilo ¿Dónde está Wally? donde los jugadores encuentran personajes y compiten en un ranking global.",

      overview:
        "Un juego rápido e interactivo de objetos ocultos inspirado en ¿Dónde está Wally?. Los jugadores buscan personajes y compiten por el mejor tiempo.",

      context: {
        primary: {
          label: "Desafío",
          content:
            "Un reto full-stack de The Odin Project centrado en crear un juego de photo-tagging con múltiples escenas y un ranking persistente.",
        },
        secondary: {
          label: "Implementación",
          content:
            "Construí una interfaz en React que utiliza posiciones de personajes predefinidas almacenadas en PostgreSQL. La API REST sirve las escenas y datos, mientras el frontend gestiona la lógica del juego.",
        },
      },

      highlights: [
        "Animaciones fluidas e interacciones pulidas",
        "Posiciones normalizadas para un diseño responsive",
        "Ranking global con tiempos persistentes",
        "Gestión optimizada del estado frontend",
      ],

      lessonsLearned: [
        "Modelado de posiciones para imágenes responsivas",
        "Creación de interacciones full-stack rápidas",
        "Gestión de estados UI complejos",
      ],

      challenges: [
        "Mapeo de clics a coordenadas normalizadas",
        "Sincronización cliente-servidor para rankings",
        "UI fluida para imágenes de gran tamaño",
      ],

      futureImprovements: [
        "Panel admin para gestionar escenas y personajes",
        "Autenticación opcional",
        "Mayor cobertura de tests",
        "Nuevas escenas de juego",
      ],
    },
  },
} as const;
