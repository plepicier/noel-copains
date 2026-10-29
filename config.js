// Réglages du Noël des Copains — c'est le seul fichier à modifier.
window.NOEL_CONFIG = {
  // Laisse vide pour le mode démo (les réponses restent dans le navigateur).
  // Une fois Supabase créé : Project Settings > API (voir GUIDE.md).
  supabaseUrl: "",
  supabaseKey: "",

  titre: "Noël des Copains",
  dateFete: "2026-12-05T19:30:00+01:00",
  finFete: "2026-12-06T03:00:00+01:00",
  lieu: "Trans-sur-Erdre",
  dateLimite: "2026-11-22T23:59:00+01:00",
  budget: 5,
  organisateurs: "Manon, Félix & Pierre",

  // Les foyers connus : quand quelqu'un tape son prénom, le site le reconnaît
  // (« Et oui, j'avais deviné ! »), le relie à sa moitié et propose ses enfants.
  // Une personne seule s'écrit { adultes: ["Prénom"] }.
  // « message » s'affiche en plus sous « Et oui, j'avais deviné ! ».
  foyers: [
    { adultes: ["Manon", "Félix"] },
    { adultes: ["Simon", "Gladys"], enfants: ["Bébé"], message: "Et le bébé qui arrive en novembre ? On lui garde une place au chaud" },
    { adultes: ["Antoine", "Clémentine"], enfants: ["Alice", "Jules"] },
    { adultes: ["Joannice", "Lucie"], enfants: ["Vinciane"] },
    { adultes: ["Bastien", "Jessica"], enfants: ["Thémis"] },
    { adultes: ["Corentin", "Audrey"], enfants: ["Arya"] },
    { adultes: ["Valérien", "Charlotte"] },
    { adultes: ["Ségolène", "Valentin"], enfants: ["Louison", "Lucile"] },
    { adultes: ["Erwan", "Isaure"], enfants: ["Esmée", "Maia"] },
    { adultes: ["Manon"], message: "Encore toute seule cette année ?" },
    { adultes: ["Florian"], message: "Encore toute seule cette année ?" },
    { adultes: ["Pierre"] },
    { adultes: ["Thomas"] }
  ]
};
