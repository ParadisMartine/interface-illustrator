// ═══════════════════════════════════════════════════════════
// CONTENU DES FICHES — éditez ce fichier pour ajouter/modifier
// les outils sans toucher au reste du code.
//
// Chaque entrée correspond à une fiche (.tool-card) générée
// automatiquement. "id" doit correspondre au data-tool de son
// hotspot (.hs) ou de son .st-zone (sous-outil).
//
// Champs :
//   id        : identifiant (doit matcher data-tool / data-subtool)
//   icon      : emoji ou caractère affiché dans le cadre (tc-icon)
//   name      : nom de l'outil
//   shortcut  : raccourci clavier (ex: "V", "A", "Q") — optionnel
//   category  : une des classes cat-XXX définies en CSS :
//               cat-sel  cat-draw  cat-shape  cat-text
//               cat-transf  cat-nav  cat-color  cat-panel
//   categoryLabel : texte affiché dans le badge
//   desc      : description principale (texte)
//   tags      : tableau de mots-clés (chips)
//   tip       : conseil affiché en bas (texte, le 💡 est ajouté
//               automatiquement — ne pas le répéter)
//   extra     : (optionnel) contenu "En savoir plus", tableau de
//               sections. Chaque section est un objet :
//                 { title: "Titre de section", list: ["item1","item2",...] }
//               ou
//                 { title: "Titre", text: "paragraphe libre" }
// ═══════════════════════════════════════════════════════════

var TOOLS_DATA = [

  {
    id: "select",
    icon: "▶",
    name: "Outil Sélection",
    shortcut: "V",
    category: "cat-sel",
    categoryLabel: "Sélection",
    desc: "Sélectionne et déplace des objets entiers. Cliquez sur un objet pour le sélectionner, glissez dans une zone vide pour une sélection rectangulaire.",
    tags: ["Sélection", "Déplacement", "Transformation"],
    tip: "Maj+clic : ajouter à la sélection. Alt+glisser : dupliquer. Ctrl+A : tout sélectionner.",
    extra: [
      {
        title: "Raccourcis clavier",
        list: [
          "<strong>V</strong> — Activer l'outil",
          "<strong>Ctrl+A</strong> — Tout sélectionner",
          "<strong>Maj+clic</strong> — Ajouter à la sélection",
          "<strong>Alt+glisser</strong> — Dupliquer",
          "<strong>Échap</strong> — Désélectionner"
        ]
      }
    ]
  },

  {
    id: "direct",
    icon: "↗",
    name: "Sélection directe",
    shortcut: "A",
    category: "cat-sel",
    categoryLabel: "Sélection",
    desc: "Sélectionne des points d'ancrage ou des segments individuellement pour modifier la forme d'un tracé point par point.",
    tags: ["Points d'ancrage", "Tracé", "Forme"],
    tip: "Cliquez sur un point, puis bougez-le avec les flèches du clavier pour un déplacement au pixel près."
  },

  {
    id: "direct_normal",
    icon: "↗",
    name: "Sélection directe",
    shortcut: "A",
    category: "cat-sel",
    categoryLabel: "Sélection",
    desc: "Sélectionne des points d'ancrage ou des segments individuellement pour modifier la forme d'un tracé point par point.",
    tags: ["Points d'ancrage", "Tracé", "Forme"],
    tip: "Cliquez sur un point, puis bougez-le avec les flèches du clavier pour un déplacement au pixel près."
  },

  {
    id: "direct_progres",
    icon: "↗",
    name: "Sélection directe progressive",
    shortcut: "Q",
    category: "cat-sel",
    categoryLabel: "Sélection",
    desc: "Sélectionne les objets en touchant leur tracé selon l'ordre d'empilement. Chaque clic supplémentaire étend la sélection à l'objet suivant.",
    tags: ["Sélection progressive", "Empilement", "Tracé"],
    tip: "Utile quand plusieurs objets se superposent : cliquez plusieurs fois pour sélectionner les objets en profondeur un par un."
  },

  {
    id: "magic",
    icon: "✦",
    name: "Baguette magique",
    shortcut: "Y",
    category: "cat-sel",
    categoryLabel: "Sélection",
    desc: "Sélectionne en un clic tous les objets ayant des attributs similaires (couleur de remplissage, contour, épaisseur...) sur le plan de travail.",
    tags: ["Sélection", "Couleur", "Attributs"],
    tip: "Double-cliquez sur l'outil pour choisir les attributs pris en compte (remplissage, contour, opacité...) et régler la tolérance."
  },

  {
    id: "lasso",
    icon: "➰",
    name: "Lasso",
    shortcut: "Q",
    category: "cat-sel",
    categoryLabel: "Sélection",
    desc: "Sélectionne des objets, des points d'ancrage ou des segments en traçant librement une zone à main levée autour d'eux.",
    tags: ["Sélection libre", "Points d'ancrage", "Main levée"],
    tip: "Pratique pour sélectionner rapidement quelques points isolés dans un tracé complexe sans cliquer un à un."
  },

  {
    id: "pen",
    icon: "✒",
    name: "Plume",
    shortcut: "P",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Trace des chemins précis composés de segments droits et de courbes, en plaçant des points d'ancrage et en manipulant leurs poignées.",
    tags: ["Tracés", "Courbes de Bézier", "Points d'ancrage"],
    tip: "Cliquez pour un point d'angle, cliquez-glissez pour un point courbe. Ctrl (Cmd) temporairement = Sélection directe.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>+</strong> — Ajouter un point d'ancrage",
          "<strong>-</strong> — Supprimer un point d'ancrage",
          "<strong>Maj+C</strong> — Convertir un point (lisse ↔ angle)"
        ]
      }
    ]
  },

  {
    id: "courbure",
    icon: "〰",
    name: "Courbure",
    shortcut: "Maj+~",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Dessine et modifie des tracés fluides en plaçant simplement des points : le programme calcule automatiquement des courbes lisses entre eux.",
    tags: ["Courbes", "Tracé simplifié", "Édition intuitive"],
    tip: "Double-cliquez pour créer un point d'angle plutôt qu'un point courbe pendant le tracé."
  },

  {
    id: "type",
    icon: "T",
    name: "Texte",
    shortcut: "T",
    category: "cat-text",
    categoryLabel: "Texte",
    desc: "Crée et modifie du texte ponctuel ou du texte captif (dans un cadre). Cliquez pour un point de texte, glissez pour un bloc de texte.",
    tags: ["Texte", "Typographie", "Bloc de texte"],
    tip: "Cliquez sur le contour d'une forme fermée pour créer du texte captif à l'intérieur.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Texte captif</strong> — Texte à l'intérieur d'une forme quelconque",
          "<strong>Texte curviligne</strong> — Texte suivant un tracé",
          "<strong>Texte vertical</strong> — Orientation verticale",
          "<strong>Texte captif vertical</strong> — Bloc vertical dans une forme",
          "<strong>Texte curviligne vertical</strong> — Suit un tracé, orientation verticale",
          "<strong>Retouche de texte</strong> — Ajuste individuellement position/rotation/échelle de chaque caractère"
        ]
      }
    ]
  },

  {
    id: "line",
    icon: "╱",
    name: "Segment de ligne",
    shortcut: "\\",
    category: "cat-shape",
    categoryLabel: "Forme",
    desc: "Trace des segments de droite simples en cliquant-glissant d'un point à un autre.",
    tags: ["Ligne droite", "Segment", "Tracé simple"],
    tip: "Maintenez Maj pour contraindre l'angle à des multiples de 45°.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Arc</strong> — Trace un arc de cercle",
          "<strong>Spirale</strong> — Trace une spirale réglable",
          "<strong>Grille rectangulaire</strong> — Génère une grille de lignes",
          "<strong>Grille à coordonnées polaires</strong> — Génère une grille circulaire"
        ]
      }
    ]
  },

  {
    id: "rect",
    icon: "▭",
    name: "Rectangle",
    shortcut: "M",
    category: "cat-shape",
    categoryLabel: "Forme",
    desc: "Dessine des rectangles et des carrés en cliquant-glissant sur le plan de travail.",
    tags: ["Forme géométrique", "Rectangle", "Carré"],
    tip: "Maintenez Maj pour un carré parfait. Cliquez une fois sur le plan de travail pour saisir des dimensions exactes.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Rectangle arrondi</strong> — Coins arrondis réglables",
          "<strong>Ellipse (L)</strong> — Cercles et ellipses",
          "<strong>Polygone</strong> — Nombre de côtés réglable",
          "<strong>Étoile</strong> — Nombre de branches réglable",
          "<strong>Halo</strong> — Effet d'étincelle lumineuse"
        ]
      }
    ]
  },

  {
    id: "pencil",
    icon: "✎",
    name: "Crayon",
    shortcut: "N",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Dessine des tracés à main levée, comme un vrai crayon sur papier. Illustrator place les points d'ancrage automatiquement.",
    tags: ["Main levée", "Tracé libre", "Dessin"],
    tip: "Repassez sur une extrémité d'un tracé existant pour le prolonger sans le fermer.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Shaper (Maj+N)</strong> — Transforme des gribouillis à main levée en formes géométriques nettes",
          "<strong>Arrondi</strong> — Adoucit les irrégularités d'un tracé existant",
          "<strong>Gomme</strong> — Efface une portion d'un tracé sélectionné",
          "<strong>Jonction</strong> — Relie deux extrémités de tracé"
        ]
      }
    ]
  },

  {
    id: "brush",
    icon: "🖌",
    name: "Pinceau",
    shortcut: "B",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Dessine des tracés habillés d'une nuance de pinceau (calligraphique, artistique, à motifs ou aux crins) pour un rendu expressif.",
    tags: ["Nuances de pinceau", "Tracé habillé", "Calligraphie"],
    tip: "Choisissez une nuance dans le panneau Pinceaux avant de dessiner pour changer l'aspect du trait.",
    extra: [
      {
        title: "Outil relié",
        list: [
          "<strong>Pinceau de tache (Maj+B)</strong> — Dessine directement des formes pleines qui fusionnent entre elles"
        ]
      }
    ]
  },

  {
    id: "eraser",
    icon: "▱",
    name: "Gomme",
    shortcut: "Maj+E",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Efface des portions de tracés ou d'objets vectoriels en glissant dessus, comme une gomme classique.",
    tags: ["Effacement", "Édition de tracé", "Vectoriel"],
    tip: "Double-cliquez sur l'outil pour régler la taille, l'angle et l'arrondi de la pointe de gomme.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Ciseaux</strong> — Coupe un tracé en un point précis",
          "<strong>Cutter</strong> — Découpe des objets le long d'un tracé libre"
        ]
      }
    ]
  },

  {
    id: "rotate",
    icon: "↻",
    name: "Rotation",
    shortcut: "R",
    category: "cat-transf",
    categoryLabel: "Transformation",
    desc: "Fait pivoter les objets sélectionnés autour d'un point de référence, déplaçable par simple clic avant de glisser.",
    tags: ["Rotation", "Point de référence", "Transformation"],
    tip: "Alt+clic pour positionner précisément le point de rotation et ouvrir la boîte de dialogue Rotation.",
    extra: [
      {
        title: "Outil relié",
        list: [
          "<strong>Miroir (O)</strong> — Retourne l'objet selon un axe (symétrie horizontale, verticale ou personnalisée)"
        ]
      }
    ]
  },

  {
    id: "puppet",
    icon: "⤢",
    name: "Mise à l'échelle",
    shortcut: "S",
    category: "cat-transf",
    categoryLabel: "Transformation",
    desc: "Redimensionne les objets sélectionnés depuis un point de référence déplaçable, uniformément ou selon un seul axe.",
    tags: ["Redimensionnement", "Point de référence", "Transformation"],
    tip: "Maintenez Maj en glissant pour conserver les proportions ; Alt+clic pour ouvrir la boîte de dialogue avec valeurs précises.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Déformation</strong> — Incline l'objet selon un angle et un axe donnés",
          "<strong>Modelage</strong> — Ajuste un tracé en déplaçant des points tout en conservant ses courbes générales"
        ]
      }
    ]
  },

  {
    id: "warp",
    icon: "↝",
    name: "Largeur",
    shortcut: "Maj+W",
    category: "cat-transf",
    categoryLabel: "Transformation",
    desc: "Modifie la largeur d'un tracé à des endroits précis en glissant ses bords, pour créer des traits calligraphiques irréguliers.",
    tags: ["Épaisseur variable", "Tracé", "Profil de largeur"],
    tip: "Alt+glisser pour ajouter un point de largeur symétrique ou non des deux côtés du tracé.",
    extra: [
      {
        title: "Outils reliés (groupe Déformation)",
        list: [
          "<strong>Déformation</strong> — Pousse la forme dans le sens du glissement",
          "<strong>Tourbillon</strong> — Fait tourbillonner la zone touchée",
          "<strong>Contraction</strong> — Creuse la forme vers l'intérieur",
          "<strong>Dilatation</strong> — Gonfle la forme vers l'extérieur",
          "<strong>Festons</strong> — Ajoute des vagues arrondies sur les contours",
          "<strong>Cristallisation</strong> — Ajoute des pointes vers l'extérieur",
          "<strong>Froncés</strong> — Ajoute des plis aléatoires"
        ]
      }
    ]
  },

  {
    id: "warp2",
    icon: "⛶",
    name: "Transformation manuelle",
    shortcut: "E",
    category: "cat-transf",
    categoryLabel: "Transformation",
    desc: "Redimensionne, fait pivoter ou déforme librement un objet en glissant directement les poignées de sa boîte englobante.",
    tags: ["Boîte englobante", "Redimensionnement", "Déformation libre"],
    tip: "Approchez le curseur d'un coin sans le toucher pour faire pivoter plutôt que redimensionner.",
    extra: [
      {
        title: "Outil relié",
        list: [
          "<strong>Déformation de la marionnette</strong> — Déforme un objet en douceur à l'aide de points d'épingle, comme une marionnette articulée"
        ]
      }
    ]
  },

  {
    id: "warp3",
    icon: "⬡",
    name: "Concepteur de forme",
    shortcut: "Maj+M",
    category: "cat-shape",
    categoryLabel: "Forme",
    desc: "Fusionne, découpe ou efface des zones à partir de plusieurs objets superposés, simplement en glissant ou en cliquant sur les régions.",
    tags: ["Fusion de formes", "Découpe", "Objets superposés"],
    tip: "Alt+glisser sur une zone pour la soustraire au lieu de l'ajouter au tracé résultant.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Pot de peinture dynamique (K)</strong> — Remplit des zones fermées de couleur d'un clic, en détectant automatiquement les régions",
          "<strong>Sélection de peinture dynamique (Maj+L)</strong> — Sélectionne des faces ou arêtes individuelles d'un groupe de peinture dynamique"
        ]
      }
    ]
  },

  {
    id: "persp",
    icon: "◱",
    name: "Grille de perspective",
    shortcut: "Maj+P",
    category: "cat-transf",
    categoryLabel: "Transformation",
    desc: "Affiche une grille en perspective (1, 2 ou 3 points de fuite) permettant de dessiner et placer des objets avec un effet de profondeur réaliste.",
    tags: ["Perspective", "Points de fuite", "Profondeur"],
    tip: "Utilisez l'outil Sélection en perspective (Maj+V) pour déplacer un objet existant dans la grille."
  },

  {
    id: "blend",
    icon: "⇄",
    name: "Fusion",
    shortcut: "W",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Crée une série de formes ou de couleurs intermédiaires entre deux objets, générant des dégradés de forme ou des effets d'animation.",
    tags: ["Interpolation", "Dégradé de formes", "Effets"],
    tip: "Double-cliquez sur l'outil pour régler le nombre d'étapes ou la distance entre les objets intermédiaires."
  },

  {
    id: "symbol",
    icon: "❖",
    name: "Pulvérisateur de symboles",
    shortcut: "Maj+S",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Projette plusieurs instances d'un symbole du panneau Symboles sur le plan de travail, comme avec une bombe de peinture.",
    tags: ["Symboles", "Instances multiples", "Projection"],
    tip: "Cliquez sans glisser pour ajouter une seule instance à la fois plutôt qu'un nuage de symboles.",
    extra: [
      {
        title: "Outils de symbolisme reliés",
        list: [
          "<strong>Déplaceur</strong> — Repositionne les instances",
          "<strong>Agglutinateur</strong> — Rapproche ou éloigne les instances",
          "<strong>Redimensionneur</strong> — Change la taille des instances",
          "<strong>Rotateur</strong> — Oriente les instances",
          "<strong>Colorant</strong> — Teinte les instances",
          "<strong>Estompeur</strong> — Modifie la transparence",
          "<strong>Styliseur</strong> — Applique un style graphique"
        ]
      }
    ]
  },

  {
    id: "graph",
    icon: "📊",
    name: "Graphique",
    shortcut: "J",
    category: "cat-shape",
    categoryLabel: "Forme",
    desc: "Crée des graphiques de données (à colonnes, à barres, linéaires, circulaires...) en glissant une zone, puis en saisissant les valeurs.",
    tags: ["Données", "Graphique", "Colonnes"],
    tip: "Une fois le graphique créé, changez son type via le menu Objet > Graphique > Type sans ressaisir les données."
  },

  {
    id: "artboard",
    icon: "⬚",
    name: "Plan de travail",
    shortcut: "Maj+O",
    category: "cat-nav",
    categoryLabel: "Navigation",
    desc: "Crée, redimensionne, déplace ou duplique des plans de travail (les pages de votre document) directement dans la fenêtre.",
    tags: ["Plan de travail", "Document", "Mise en page"],
    tip: "Alt+glissez un plan de travail existant pour en dupliquer un avec son contenu."
  },

  {
    id: "gradient",
    icon: "▥",
    name: "Dégradé",
    shortcut: "G",
    category: "cat-color",
    categoryLabel: "Couleur",
    desc: "Applique et ajuste un dégradé directement sur l'objet sélectionné : angle, position et étendue en glissant sur le tracé.",
    tags: ["Dégradé", "Couleur", "Transition"],
    tip: "Double-cliquez sur un curseur de couleur directement sur l'objet pour changer sa teinte sans ouvrir le panneau."
  },

  {
    id: "eyedropper",
    icon: "💧",
    name: "Pipette",
    shortcut: "I",
    category: "cat-color",
    categoryLabel: "Couleur",
    desc: "Prélève les attributs (couleur, contour, police, effets) d'un objet ou d'une image pour les appliquer à l'objet sélectionné.",
    tags: ["Prélèvement", "Couleur", "Attributs"],
    tip: "Double-cliquez sur l'outil pour choisir précisément quels attributs sont copiés.",
    extra: [
      {
        title: "Outil relié",
        list: [
          "<strong>Mesure</strong> — Mesure une distance et un angle entre deux points"
        ]
      }
    ]
  },

  {
    id: "blob",
    icon: "●",
    name: "Pinceau Blob",
    shortcut: "Maj+B",
    category: "cat-draw",
    categoryLabel: "Dessin",
    desc: "Dessine directement des formes pleines (et non des tracés fins) qui fusionnent automatiquement entre elles si elles se chevauchent.",
    tags: ["Forme pleine", "Fusion automatique", "Dessin libre"],
    tip: "Repassez sur un trait existant de la même couleur pour l'épaissir ou le fusionner avec le nouveau."
  },

  {
    id: "spray",
    icon: "✂",
    name: "Tranche",
    shortcut: "Maj+K",
    category: "cat-nav",
    categoryLabel: "Navigation",
    desc: "Découpe la mise en page en zones rectangulaires (tranches) pour l'exportation web, chacune pouvant être optimisée et exportée séparément.",
    tags: ["Export web", "Découpage", "Optimisation"],
    tip: "Utilisez Objet > Tranche pour créer des tranches à partir de repères ou d'objets sélectionnés plutôt qu'à main levée.",
    extra: [
      {
        title: "Outil relié",
        list: [
          "<strong>Sélection de tranche</strong> — Sélectionne, déplace ou redimensionne une tranche existante"
        ]
      }
    ]
  },

  {
    id: "hand",
    icon: "✋",
    name: "Main",
    shortcut: "H",
    category: "cat-nav",
    categoryLabel: "Navigation",
    desc: "Déplace la vue dans la fenêtre du document sans modifier les objets, en glissant le plan de travail comme une feuille sur une table.",
    tags: ["Navigation", "Défilement", "Vue"],
    tip: "Maintenez la Barre d'espace enfoncée depuis n'importe quel autre outil pour activer la Main temporairement.",
    extra: [
      {
        title: "Outils reliés",
        list: [
          "<strong>Rotation de l'affichage (Maj+H)</strong> — Pivote temporairement la vue du plan de travail, sans toucher aux objets",
          "<strong>Lecture d'impression</strong> — Affiche et ajuste le découpage des pages à l'impression"
        ]
      }
    ]
  },

  {
    id: "zoom",
    icon: "🔍",
    name: "Zoom",
    shortcut: "Z",
    category: "cat-nav",
    categoryLabel: "Navigation",
    desc: "Agrandit ou réduit l'affichage du document. Cliquez pour zoomer, Alt+clic pour dézoomer, glissez pour zoomer sur une zone précise.",
    tags: ["Zoom", "Affichage", "Navigation"],
    tip: "Ctrl+0 (Cmd+0) ajuste la vue au plan de travail ; Ctrl+1 (Cmd+1) affiche à 100 %."
  },

  {
    id: "fillstroke",
    icon: "🎨",
    name: "Fond et contour",
    shortcut: "",
    category: "cat-color",
    categoryLabel: "Couleur",
    desc: "Définit les couleurs de remplissage et de contour de l'objet sélectionné ; permet aussi d'inverser ou de rétablir les couleurs par défaut.",
    tags: ["Remplissage", "Contour", "Couleur"],
    tip: "X permute l'outil actif entre remplissage et contour ; Maj+X les échange l'un avec l'autre ; D rétablit noir/blanc."
  },

  {
    id: "zoom2",
    icon: "🖥",
    name: "Mode d'affichage",
    shortcut: "F",
    category: "cat-nav",
    categoryLabel: "Navigation",
    desc: "Bascule entre les modes d'affichage de la fenêtre : standard, plein écran avec barre de menus, ou plein écran sans interface.",
    tags: ["Mode d'écran", "Affichage", "Plein écran"],
    tip: "Utile pour présenter un travail sans être distrait par les palettes et menus."
  },

  {
    id: "p_couleur",
    icon: "🎨",
    name: "Panneau Couleur",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Permet de composer une couleur de remplissage ou de contour en ajustant ses valeurs (RVB, CMJN, TSL...) avec des curseurs.",
    tags: ["Couleur", "RVB/CMJN", "Curseurs"],
    tip: "Maj+clic sur le spectre de couleurs en bas du panneau pour choisir une couleur globale en un clic."
  },

  {
    id: "p_guidecoul",
    icon: "🎯",
    name: "Panneau Guide des couleurs",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Suggère des harmonies de couleurs (complémentaires, analogues, triades...) à partir d'une couleur de base sélectionnée.",
    tags: ["Harmonie de couleurs", "Palette", "Suggestions"],
    tip: "Cliquez sur « Modifier ou appliquer les couleurs » pour recolorier tout un objet avec l'harmonie choisie."
  },

  {
    id: "p_nuancier",
    icon: "◼",
    name: "Panneau Nuancier",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Stocke les couleurs, dégradés et motifs enregistrés du document pour les réappliquer rapidement d'un clic.",
    tags: ["Couleurs enregistrées", "Bibliothèque", "Nuances"],
    tip: "Glissez une couleur du panneau Couleur directement dans le Nuancier pour l'enregistrer."
  },

  {
    id: "p_formes",
    icon: "⬠",
    name: "Panneau Bibliothèques de formes",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Donne accès à des ensembles de formes prédéfinies (icônes, motifs, éléments graphiques) prêtes à glisser dans le document.",
    tags: ["Formes prédéfinies", "Bibliothèque", "Ressources"],
    tip: "Glissez-déposez une forme directement sur le plan de travail pour l'ajouter au document."
  },

  {
    id: "p_symboles",
    icon: "❖",
    name: "Panneau Symboles",
    shortcut: "Maj+Ctrl+F11",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Contient les symboles réutilisables du document ; sert de source pour le Pulvérisateur de symboles et les instances liées.",
    tags: ["Symboles", "Instances", "Réutilisation"],
    tip: "Double-cliquez sur un symbole pour entrer en mode édition et modifier toutes ses instances à la fois."
  },

  {
    id: "p_contour",
    icon: "▭",
    name: "Panneau Contour",
    shortcut: "Ctrl+F10",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Règle l'épaisseur, le style de coin, le fanon et les pointillés du contour de l'objet sélectionné.",
    tags: ["Épaisseur", "Pointillés", "Style de trait"],
    tip: "Cochez « Aligner les pointillés » pour que le motif de tirets se répartisse symétriquement sur le tracé."
  },

  {
    id: "p_degrade",
    icon: "▥",
    name: "Panneau Dégradé",
    shortcut: "Ctrl+F9",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Construit un dégradé linéaire, radial ou libre en ajoutant, déplaçant et colorant des curseurs sur la rampe de dégradé.",
    tags: ["Dégradé", "Curseurs de couleur", "Angle"],
    tip: "Double-cliquez sur un curseur pour lui assigner une couleur du Nuancier ou du panneau Couleur."
  },

  {
    id: "p_transpar",
    icon: "◐",
    name: "Panneau Transparence",
    shortcut: "Maj+Ctrl+F10",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Règle l'opacité et le mode de fusion d'un objet, et permet de créer des masques d'écrêtage ou des groupes opaques.",
    tags: ["Opacité", "Modes de fusion", "Masque"],
    tip: "Glissez un objet du haut de la pile sur la vignette de masque pour créer un masque d'écrêtage rapide."
  },

  {
    id: "p_aspect",
    icon: "ℹ",
    name: "Panneau Aspect",
    shortcut: "Maj+F6",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Liste tous les attributs appliqués à l'objet sélectionné (remplissages, contours, effets) et permet de les réordonner ou modifier.",
    tags: ["Attributs", "Effets", "Empilement"],
    tip: "Cliquez sur l'icône Dupliquer l'élément sélectionné pour ajouter un second remplissage ou contour au même objet."
  },

  {
    id: "p_stylesgr",
    icon: "✦",
    name: "Panneau Styles graphiques",
    shortcut: "Maj+F5",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Enregistre des combinaisons d'attributs d'apparence sous forme de style réutilisable, applicable en un clic à d'autres objets.",
    tags: ["Styles réutilisables", "Apparence", "Cohérence visuelle"],
    tip: "Alt+cliquez un style pour le remplacer sur l'objet plutôt que de l'ajouter en plus des attributs existants."
  },

  {
    id: "p_calques",
    icon: "📑",
    name: "Panneau Calques",
    shortcut: "F7",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Organise le document en calques et sous-calques empilés, pour structurer, verrouiller, masquer ou réordonner les objets.",
    tags: ["Calques", "Organisation", "Empilement"],
    tip: "Alt+cliquez le triangle d'un calque pour déplier ou replier tous ses sous-niveaux d'un coup."
  },

  {
    id: "p_export",
    icon: "⬇",
    name: "Panneau Ressources d'exportation",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Rassemble les objets marqués pour l'export et permet de générer plusieurs formats et résolutions en une seule opération.",
    tags: ["Export", "Formats multiples", "Résolutions"],
    tip: "Glissez un objet directement dans ce panneau pour le marquer comme ressource à exporter."
  },

  {
    id: "p_plans",
    icon: "🗂",
    name: "Panneau Plans de travail",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Liste tous les plans de travail du document, permet de les réordonner, renommer, dupliquer ou naviguer entre eux.",
    tags: ["Plans de travail", "Pages", "Navigation"],
    tip: "Double-cliquez le nom d'un plan de travail dans la liste pour centrer immédiatement la vue dessus."
  },

  {
    id: "p_comments",
    icon: "💬",
    name: "Panneau Commentaires",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Panneau",
    desc: "Affiche les commentaires laissés sur le document (relecture, révision partagée) et permet d'y répondre ou de les résoudre.",
    tags: ["Commentaires", "Révision", "Collaboration"],
    tip: "Cliquez sur un commentaire dans la liste pour être automatiquement amené à l'endroit concerné du document."
  },

  {
    id: "t_formatdoc",
    icon: "📄",
    name: "Format du document",
    shortcut: "",
    category: "cat-panel",
    categoryLabel: "Document",
    desc: "Barre d'état affichant et permettant de modifier rapidement les réglages globaux du document actif (plan de travail, mode couleur, etc.).",
    tags: ["Document", "Réglages", "Barre d'état"],
    tip: "Un accès rapide pratique pour vérifier le mode couleur (RVB/CMJN) sans ouvrir Fichier > Format du document."
  }
];