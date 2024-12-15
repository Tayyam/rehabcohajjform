export const fr = {
  home: {
    title: 'Portail des plaintes Ithraa Al-Khair',
    subtitle: 'Un système intégré pour soumettre et suivre les plaintes des pèlerins. Nous nous efforçons de fournir les meilleurs services et de garantir le confort des invités d’Allah.',
    newComplaint: 'Soumettre une nouvelle plainte',
    trackComplaint: 'Suivre l’état de la plainte',
    features: {
      submission: {
        title: 'Soumission facile des plaintes',
        description: 'Un formulaire simple et clair pour soumettre des plaintes avec la possibilité de suivre leur état'
      },
      tracking: {
        title: 'Suivi en temps réel',
        description: 'Suivez l’état de votre plainte et recevez les dernières mises à jour directement'
      },
      communication: {
        title: 'Communication continue',
        description: 'Ajoutez des commentaires et suivez les réponses à votre plainte'
      }
    }
  },
  newComplaint: {
    title: 'Soumettre une nouvelle plainte',
    uploadError: 'Échec du téléchargement de l’image. Veuillez réessayer.',
    submitError: 'Une erreur s’est produite lors de l’envoi de la plainte. Veuillez réessayer.',
  },
  trackComplaint: {
    title: 'Suivre l’état de la plainte',
    label: 'ID de plainte',
    placeholder: 'Entrez l’ID de la plainte pour suivre',
    button: 'Suivre la plainte',
    error: 'Veuillez entrer l’ID de la plainte',
  },
  complaintSuccess: {
    title: 'Plainte soumise avec succès',
    complaintIdLabel: 'ID de suivi de la plainte',
    copyTitle: 'Copier l’ID de la plainte',
    instructions: 'Vous pouvez suivre l’état de la plainte à tout moment en utilisant l’ID de suivi. Une réponse à votre plainte sera fournie dès que possible.',
    homeButton: 'Retour à l’accueil',
    trackButton: 'Suivre la plainte',
    copyError: 'Échec de la copie de l’ID.',
  },
  complaintDetails: {
    loading: 'Chargement des détails de la plainte...',
    error: 'Impossible de charger les détails de la plainte. Veuillez réessayer.',
    backToTracking: 'Retour à la page de suivi',
    complaintId: 'ID de plainte',
    updateStatus: 'Mettre à jour l’état de la plainte',
    description: 'Description de la plainte',
  },
  complaintForm: {
    passportError: 'Numéro de passeport invalide',
    pilgrimInfo: 'Informations sur le pèlerin',
    pilgrimName: 'Nom du pèlerin',
    pilgrimNamePlaceholder: 'Entrez le nom complet du pèlerin',
    passportNumber: 'Numéro de passeport',
    passportPlaceholder: 'Entrez le numéro de passeport (facultatif)',
    phoneNumber: 'Numéro WhatsApp',
    complaintDetails: 'Détails de la plainte',
    type: 'Type de plainte',
    title: 'Titre de la plainte',
    titlePlaceholder: 'Entrez un titre bref pour la plainte',
    description: 'Description de la plainte',
    descriptionPlaceholder: 'Expliquez les détails de la plainte de manière claire et complète',
    category: 'Catégorie',
    priority: 'Priorité',
    attachments: 'Pièces jointes',
    cancel: 'Annuler',
    submit: 'Soumettre la plainte',
    sending: 'Envoi en cours...',
  },
  complaintInfo: {
    pilgrimName: 'Nom du pèlerin',
    type: 'Type de plainte',
    phoneNumber: 'Numéro WhatsApp',
    passportNumber: 'Numéro de passeport',
    category: 'Catégorie',
  },
  complaintNotes: {
    loading: 'Chargement des commentaires...',
    title: 'Commentaires et notes',
    noComments: 'Pas encore de commentaires',
    placeholder: 'Écrire un commentaire...',
  },
  complaintStatusActions: {
    reopen: 'Rouvrir la plainte',
    close: 'Fermer la plainte',
  },
  complaintTimeline: {
    created: 'Plainte créée',
    by: 'Par',
    statusUpdate: 'Mise à jour de l’état',
    support: 'Équipe de support',
  },
  complaintUpdates: {
    title: 'Mises à jour',
    locale: 'fr-FR',
  },
  header: {
    newComplaint: 'Soumettre une plainte',
    trackComplaint: 'Suivre une plainte',
  },
  footer: {
    quickLinks: 'Liens rapides',
    newComplaint: 'Soumettre une nouvelle plainte',
    trackComplaint: 'Suivre l’état de la plainte',
    contactUs: 'Contactez-nous',
    phone: '+966 XX XXX XXXX',
    email: 'support@ethraa-alkhair.com',
    location: 'Arabie Saoudite',
    about: 'À propos de Ithraa Al-Khair',
    aboutText: 'Nous nous efforçons de fournir les meilleurs services aux pèlerins et de faciliter leur voyage en Arabie Saoudite.',
    rightsReserved: 'Tous droits réservés',
    brandName: 'Ithraa Al-Khair',
  },
  logo: {
    alt: 'Ithraa Al-Khair',
    title: 'Ithraa Al-Khair',
    subtitle: 'Portail des plaintes',
  },
  statusLabels: {
    open: 'Ouverte',
    inProgress: 'En cours',
    rejected: 'Rejetée',
    closed: 'Fermée',
  },
  complaintTypes: {
    inquiry: 'Demande de renseignement',
    complaint: 'Plainte',
  },
  categories: {
    administrative: 'Administratif',
    health: 'Santé',
    transport: 'Transport',
    accommodation: 'Hébergement',
    food: 'Alimentation',
  },
  priorities: {
    low: 'Basse',
    medium: 'Moyenne',
    high: 'Haute',
  },
  select: {
    placeholder: 'Sélectionnez...',
  },
  phoneNumberInput: {
    requiredIndicator: '*',
    placeholder: 'Entrez le numéro WhatsApp (facultatif)',
  },
  imageUpload: {
    label: 'Image de la plainte (facultative)',
    invalidType: 'L’image doit être au format : JPG, PNG, GIF, WEBP',
    maxSizeExceeded: 'La taille de l’image ne doit pas dépasser 32 Mo',
    previewAlt: 'Aperçu de l’image',
    dragAndDrop: 'Glissez et déposez l’image ici ou cliquez pour sélectionner',
    supportedFormats: 'JPG, PNG, GIF, WEBP (Taille max : 32 Mo)',
  },
};
