🚀 Fonctionnalités Principales:
Ce projet implémente un ensemble riche de fonctionnalités basées sur les User Stories suivantes :

  👤 Gestion des Utilisateurs (simulée)
  Connexion / Déconnexion : L'application simule une session utilisateur (via login.html). Les informations de connexion sont sauvegardées dans le localStorage pour maintenir la session active.

  Interface Adaptative : Le header du site se met à jour dynamiquement pour afficher le nom de l'utilisateur connecté et un bouton "Logout".

  Persistance de Session : L'application vérifie le localStorage à chaque chargement de page pour déterminer si un utilisateur est déjà connecté.

  📝 __Création et Gestion des Réservations__
  Formulaire Dynamique : Le formulaire de réservation (booking.html) charge les destinations et les options depuis un fichier data.json. L'interface s'adapte aux choix de l'utilisateur.

  Ajout de Passagers : L'utilisateur peut ajouter dynamiquement des champs pour plusieurs passagers (jusqu'à 6).
  
  Calcul de Prix en Temps Réel : Le prix total est recalculé instantanément à chaque modification (destination, type de chambre, nombre de passagers).
  
  Validation Côté Client : Une validation robuste est en place pour tous les champs requis (nom, email, téléphone) avant de pouvoir confirmer la réservation. Les champs incorrects sont mis en surbrillance.
  
  🎫 __Gestion CRUD des Réservations ("My Bookings")__
  Persistance des Réservations (Create) : Après validation, la réservation complète (passagers, prix, destination) est sauvegardée dans le localStorage.
  
  Affichage (Read) : Une page MyBooking.html récupère et affiche la dernière réservation effectuée.
  
  (Prévu) Modification (Update) : La User Story 8 prévoit un bouton "Edit" pour pré-remplir le formulaire avec des données existantes.
  
  (Prévu) Annulation (Delete) : La User Story 9 prévoit un bouton "Cancel" avec une confirmation pour supprimer une réservation du localStorage.
  
  🖨️ Génération de Billets
  Billet Imprimable : La page MyBooking.html sert de page de billet dédiée.
  
  Fonction d'Impression : Un bouton "Imprimer" déclenche la fonction window.print() du navigateur.
  
  Feuille de Style d'Impression : Une feuille de style @media print est utilisée pour masquer l'interface de navigation et formater le billet pour une impression claire sur papier.
  
