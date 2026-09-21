
function Couleur(metier) {
    // permet d'identifier les couleurs des avatar en fonction des metiers
  const TEAM_COLORS = {
    Designer: "#d83aed",
    Développeur: "#7C3AED",
    Infirmière: " #0f7614",
    Architecte: " #6c760f",
    Étudiante: " #0F766E",
    Comptable: " #be5f12",
    Graphiste: " #BE123C",
    Avocate: " #121ebe",
    Ingénieur: " #12beb0",
    Commercial: " #12aabe",
    Médecin: " #b012be",
    Étudiant: " #12be5f",
  };
    return TEAM_COLORS[metier];
  }
  export default Couleur