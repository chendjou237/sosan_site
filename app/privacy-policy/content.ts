/**
 * Legal text for /privacy-policy/, kept as plain strings rather than JSX so the
 * clauses can be edited without tripping over JSX entity escaping. The renderer
 * in page.tsx turns any occurrence of CONTACT_EMAIL into a mailto link.
 */

export type Block =
  | { kind: "p"; text: string }
  /** Enumerated clauses. */
  | { kind: "ul"; items: string[] }
  /** All-caps statutory disclaimers, set apart so the wall of caps stays readable. */
  | { kind: "disclaimer"; paragraphs: string[] }
  /** Call-out inside a section. */
  | { kind: "note"; title: string; paragraphs: string[] };

export type Section = {
  /** Anchor + table-of-contents target. */
  id: string;
  heading: string;
  blocks: Block[];
};

export const documentTitle = "Termes et Conditions d’Utilisation de SOSAN";

export const sections: Section[] = [
  {
    id: "introduction",
    heading: "Introduction",
    blocks: [
      {
        kind: "p",
        text: "Bienvenue sur SOSAN. En accédant et en utilisant notre application, vous acceptez d’être lié(e) par les présents Termes et Conditions d’Utilisation (TCU), qui constituent un accord juridiquement contraignant entre SOSAN et vous.",
      },
    ],
  },
  {
    id: "objet",
    heading: "Objet de l’Application",
    blocks: [
      {
        kind: "p",
        text: "SOSAN a pour objectif de faciliter l’accès aux soins médicaux en Afrique subsaharienne, notamment au Cameroun. Notre plateforme propose divers services, notamment :",
      },
      {
        kind: "ul",
        items: [
          "Télémédecine et téléconsultation,",
          "Pharmacie en ligne,",
          "Gestion des consultations et examens médicaux,",
          "Mutuelle de santé pour un meilleur accès aux soins.",
        ],
      },
    ],
  },
  {
    id: "donnees-personnelles",
    heading: "Collecte et Utilisation des Données Personnelles",
    blocks: [
      {
        kind: "p",
        text: "En utilisant SOSAN, vous acceptez la collecte et le traitement de vos données personnelles suivantes :",
      },
      {
        kind: "ul",
        items: [
          "Informations d’identification : Nom, prénom, adresse e-mail, numéro de téléphone.",
          "Données médicales : Historique de consultations, prescriptions et autres données de santé.",
          "Données de paiement : Informations nécessaires aux transactions effectuées via l’application.",
        ],
      },
      {
        kind: "p",
        text: "Ces données sont utilisées pour améliorer votre expérience utilisateur, faciliter vos interactions avec les professionnels de santé et assurer le bon fonctionnement des services de SOSAN.",
      },
    ],
  },
  {
    id: "partage-protection",
    heading: "Partage et Protection des Données Personnelles",
    blocks: [
      {
        kind: "p",
        text: "SOSAN s’engage à protéger vos informations personnelles en mettant en place des mesures de sécurité avancées (chiffrement, connexions sécurisées). Vos données ne seront partagées qu’avec :",
      },
      {
        kind: "ul",
        items: [
          "Des professionnels de santé agréés pour garantir des diagnostics précis.",
          "Des prestataires tiers pour le paiement et la logistique, conformément à notre Politique de confidentialité.",
        ],
      },
      {
        kind: "p",
        text: "SOSAN ne vend ni ne loue vos données personnelles à des tiers non autorisés.",
      },
    ],
  },
  {
    id: "suppression-compte",
    heading: "Suppression de compte et données d’utilisateur",
    blocks: [
      {
        kind: "p",
        text: "SOSAN permet à ses utilisateurs de supprimer leurs comptes pour diverses raisons. Cependant, certaines données personnelles seront nécessairement conservées pour une durée de 2 ans après la suppression du compte.",
      },
    ],
  },
  {
    id: "conditions-specifiques",
    heading: "Conditions d’Utilisation Spécifiques",
    blocks: [
      {
        kind: "p",
        text: "L’utilisation de SOSAN par les médecins, hôpitaux, laboratoires et pharmacies est soumise à la présentation d’un agrément valide et de tout document légal délivré par les autorités compétentes du Cameroun. Toute utilisation abusive ou frauduleuse de la plateforme peut entraîner des sanctions, y compris des poursuites judiciaires.",
      },
      {
        kind: "note",
        title: "Note Importante !",
        paragraphs: [
          "En s’inscrivant sur la plateforme, le professionnel de santé certifie sur l’honneur disposer de toutes les autorisations administratives, ordinales et légales requises pour exercer son activité sur le territoire camerounais, qu’elle soit principale ou complémentaire.",
          "Sosan n’exerce aucun contrôle et n’intervient en aucun cas dans les modalités d’exercice des obligations professionnelles ou statutaires des praticiens inscrits. Sosan décline toute responsabilité en cas de litige, de sanction disciplinaire, administrative ou judiciaire découlant du non-respect par un professionnel de santé de son obligation de service auprès des structures publiques ou de toute absence non autorisée de son poste d’affectation officiel.",
        ],
      },
    ],
  },
  {
    id: "propriete-intellectuelle",
    heading: "Propriété Intellectuelle",
    blocks: [
      {
        kind: "p",
        text: "Tous les contenus de SOSAN (brevets, marques, designs, vidéos, images, logos, etc.) sont protégés par les lois camerounaises et internationales sur la propriété intellectuelle.",
      },
      {
        kind: "ul",
        items: [
          "Il est strictement interdit d’utiliser le nom, le logo ou toute autre marque de SOSAN sans autorisation écrite.",
          "Toute violation entraînera des sanctions légales.",
        ],
      },
    ],
  },
  {
    id: "abonnement",
    heading: "Abonnement et Tarification",
    blocks: [
      {
        kind: "p",
        text: "SOSAN propose plusieurs formules d’abonnement adaptées à vos besoins et à vos moyens. Une fois votre paquet d’abonnement payé, vous bénéficiez des services inclus dans votre formule.",
      },
    ],
  },
  {
    id: "commentaires",
    heading: "Signalement des erreurs et commentaires",
    blocks: [
      {
        kind: "p",
        text: "Vous pouvez nous fournir, soit directement à l’adresse contact@sosanmed.com, soit par l’intermédiaire de sites et d’outils tiers, des informations et des commentaires concernant des erreurs, des suggestions d’amélioration, des idées, des problèmes, des plaintes et d’autres questions liées à notre service (« commentaires »).",
      },
      { kind: "p", text: "Vous reconnaissez et acceptez que :" },
      {
        kind: "ul",
        items: [
          "Vous ne conserverez, n’acquerrez ni ne ferez valoir aucun droit de propriété intellectuelle ou autre droit, titre ou intérêt sur les Rétroactions ;",
          "La Société peut avoir des idées de développement similaires aux Rétroactions ;",
          "Les Rétroactions ne contiennent pas d’informations confidentielles ou exclusives de votre part ou de celle d’un tiers ;",
          "La Société n’est soumise à aucune obligation de confidentialité en ce qui concerne les Rétroactions. Dans le cas où le transfert de la propriété du Feedback n’est pas possible en raison des lois impératives applicables, vous accordez à la Société et à ses sociétés affiliées un droit exclusif, transférable, irrévocable, gratuit, pouvant faire l’objet d’une sous-licence, illimité et perpétuel d’utiliser (y compris copier, modifier, créer des œuvres dérivées, publier, distribuer et commercialiser) le Feedback de quelque manière et à quelle que fin que ce soit.",
        ],
      },
    ],
  },
  {
    id: "liens-tiers",
    heading: "Liens vers d’autres sites Web",
    blocks: [
      {
        kind: "p",
        text: "Notre service peut contenir des liens vers des sites Web de tiers ou des services qui ne sont pas détenus ou contrôlés par SOSAN.",
      },
      {
        kind: "p",
        text: "SOSAN n’a aucun contrôle sur, et n’assume aucune responsabilité pour le contenu, les politiques de confidentialité, ou les pratiques de tout site web ou service tiers. Nous ne garantissons pas les offres de ces entités/individus ou de leurs sites Web.",
      },
      {
        kind: "disclaimer",
        paragraphs: [
          "VOUS RECONNAISSEZ ET ACCEPTEZ QUE LA SOCIETE NE SOIT PAS RESPONSABLE, DIRECTEMENT OU INDIRECTEMENT, DE TOUT DOMMAGE OU PERTE CAUSÉ OU SUPPOSÉ ÊTRE CAUSÉ PAR OU EN RELATION AVEC L’UTILISATION OU LA CONFIANCE DANS UN TEL CONTENU, BIENS OU SERVICES DISPONIBLES SUR OU À TRAVERS LES SITES WEB OU SERVICES DE TIERS.",
          "NOUS VOUS CONSEILLONS VIVEMENT DE LIRE LES CONDITIONS DE SERVICE ET LES POLITIQUES DE CONFIDENTIALITÉ DE TOUT SITE WEB OU SERVICE TIERS QUE VOUS VISITEZ.",
        ],
      },
    ],
  },
  {
    id: "exclusion-garantie",
    heading: "Exclusion de garantie",
    blocks: [
      {
        kind: "disclaimer",
        paragraphs: [
          "CES SERVICES SONT FOURNIS PAR LA SOCIÉTÉ SUR UNE BASE « TELLE QUELLE » ET « TELLE QUE DISPONIBLE ». LA SOCIETE NE FAIT AUCUNE REPRESENTATION OU GARANTIE DE QUELQUE NATURE QUE CE SOIT, EXPRESSE OU IMPLICITE, QUANT AU FONCTIONNEMENT DE SES SERVICES, OU AUX INFORMATIONS, CONTENUS OU MATERIAUX QUI Y SONT INCLUS. VOUS CONVENEZ EXPRESSÉMENT QUE VOTRE UTILISATION DE CES SERVICES, DE LEUR CONTENU ET DE TOUT SERVICE OU ARTICLE OBTENU AUPRÈS DE NOUS EST À VOS RISQUES ET PÉRILS.",
          "NI LA SOCIETE NI AUCUNE PERSONNE ASSOCIEE A LA SOCIETE N’OFFRE DE GARANTIE OU DE REPRESENTATION CONCERNANT L’EXHAUSTIVITE, LA SECURITE, LA FIABILITE, LA QUALITE, L’EXACTITUDE OU LA DISPONIBILITE DES SERVICES. SANS LIMITER CE QUI PRÉCÈDE, NI LA SOCIÉTÉ NI AUCUNE PERSONNE ASSOCIÉE À LA SOCIÉTÉ NE DÉCLARE OU NE GARANTIT QUE LES SERVICES, LEUR CONTENU OU TOUT SERVICE OU ÉLÉMENT OBTENU PAR LE BIAIS DES SERVICES SERONT EXACTS, FIABLES, SANS ERREUR OU ININTERROMPUS, QUE LES DÉFAUTS SERONT CORRIGÉS, QUE LES SERVICES OU LE SERVEUR QUI LES REND DISPONIBLES SONT EXEMPTS DE VIRUS OU D’AUTRES COMPOSANTS NUISIBLES OU QUE LES SERVICES OU TOUT SERVICE OU ÉLÉMENT OBTENU PAR LE BIAIS DES SERVICES RÉPONDRONT AUTREMENT À VOS BESOINS OU ATTENTES.",
          "LA SOCIÉTÉ DÉCLINE PAR LA PRÉSENTE TOUTE GARANTIE DE QUELQUE NATURE QUE CE SOIT, QU’ELLE SOIT EXPRESSE OU IMPLICITE, STATUTAIRE OU AUTRE, Y COMPRIS, MAIS SANS S’Y LIMITER, TOUTE GARANTIE DE QUALITÉ MARCHANDE, DE NON-CONTREFAÇON ET D’ADÉQUATION À UN USAGE PARTICULIER.",
          "CE QUI PRÉCÈDE N’AFFECTE PAS LES GARANTIES QUI NE PEUVENT ÊTRE EXCLUES OU LIMITÉES EN VERTU DE LA LOI APPLICABLE.",
        ],
      },
    ],
  },
  {
    id: "modifications-service",
    heading: "Modifications du service",
    blocks: [
      {
        kind: "p",
        text: "Nous nous réservons le droit de retirer ou de modifier notre Service, et tout service ou matériel que nous fournissons via le Service, à notre seule discrétion et sans préavis. Nous ne serons pas responsables si, pour une raison quelconque, tout ou partie du Service est indisponible à tout moment ou pour toute période. De temps à autre, nous pouvons restreindre l’accès à certaines parties du Service, ou à l’ensemble du Service, aux utilisateurs, y compris les utilisateurs enregistrés.",
      },
    ],
  },
  {
    id: "remboursement",
    heading: "Politique de Remboursement",
    blocks: [
      {
        kind: "ul",
        items: [
          "Les annulations de consultations doivent être effectuées au moins 6 heures avant pour bénéficier d’un remboursement de 80 % sous 48 heures.",
          "Aucun remboursement n’est accordé pour les annulations effectuées moins de 6 heures avant.",
          "Si un médecin annule une consultation, 100 % du montant vous sera remboursé, et 20 % de sa commission sera retenue lors de sa prochaine consultation.",
          "SOSAN se réserve le droit d’annuler toute commande en cas de fraude, erreur de prix ou disponibilité insuffisante du service.",
        ],
      },
    ],
  },
  {
    id: "modification-tcu",
    heading: "Modification des Termes et Conditions",
    blocks: [
      {
        kind: "p",
        text: "SOSAN se réserve le droit de modifier unilatéralement les présents TCU. Toute mise à jour sera communiquée aux utilisateurs via l’application ou par courriel.",
      },
    ],
  },
  {
    id: "acceptation",
    heading: "Acceptation des Termes",
    blocks: [
      {
        kind: "p",
        text: "En utilisant SOSAN, vous confirmez avoir lu, compris et accepté les présents Termes et Conditions d’Utilisation.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    blocks: [
      {
        kind: "p",
        text: "Veuillez envoyer vos réactions, commentaires, demandes d’assistance technique par e-mail : contact@sosanmed.com",
      },
    ],
  },
];
