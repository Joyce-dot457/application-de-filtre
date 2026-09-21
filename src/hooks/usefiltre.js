import { useState, useMemo } from "react";
import Usenoms from "./usenoms";

 const{noms}=Usenoms()
function  useFiltre() {
    const [search, setSearch] = useState("");
      const [ville, setVille] = useState([]);
      const [metier, setMetier] = useState([]);
      const [age, setAge] = useState([]);
     // permet de filtrer les constantes
  const result = useMemo(() => {
    return noms.filter((item) => {
      const recherche = item.nom.toLowerCase().includes(search.toLowerCase());// le filtre est fait selon le texte de recherche(miniscu ou majuscu) il verifie si le nom du contacts dansle textes de recherche est dans le tableau noms
      const filtreVille = ville.length === 0 || ville.includes(item.ville);// le filtre est fait selon le choix des villes si l'utlisateur n'a selectionne aucune ville pas defiltre si oui il affiche tous les villes ayant ce nom avec item.ville
      const filtreMetier = metier.length === 0 || metier.includes(item.metier);
      const filtreAge = age.length === 0 || age.includes(item.age);
      return recherche && filtreVille && filtreAge && filtreMetier;
    });
  }, [search, ville, metier, age]);
   // qui permet d'eviter de garder les doublons dans le tableau donner par map(qui permte de parcourir le tableau noms et de garderle metier de chaque conctact )//
  const metiersUniques = [...new Set(noms.map((item) => item.metier))].map(
    (metier) => ({ value: metier, label: metier }), // qui permet de transformer chaque string (ici metier) en un objet ayant une valeur(value) et un label
  );
  const villesUniques = [...new Set(noms.map((item) => item.ville))].map(
    (ville) => ({ value: ville, label: ville }),
  );
  const agesUniques = [...new Set(noms.map((item) => item.age))].map((age) => ({
    value: age,
    label: age,
  }));
  //
  const metierOptions = metiersUniques.map((metier) => ({
    value: metier.value,
    label: metier.label,
  }));
  const villeOptions = villesUniques.map((ville) => ({
    value: ville.value,
    label: ville.label,
  }));
  const ageOptions = agesUniques.map((age) => ({
    value: age.value,
    label: age.label,
  }));
   //selected est une propriete en react-select qui permet de renvoyer quand l'utlisateur choisit des options
   const handleMetierChange = (selected) => {
    setMetier(selected ? selected.map((option) => option.value) : []);// si l'utlisateur a selectionne quelque chose on garde les svaleurs de l'option et toutes les objets du tableau 
  };                                                                  // si non l'utilisateur a tout deselectionne selected devient et on remet le tableau a vide
  const handleVilleChange = (selected) => {
    setVille(selected ? selected.map((option) => option.value) : []);
  };
  const handleAgeChange = (selected) => {
    setAge(selected ? selected.map((option) => option.value) : []);
  };
  return{search,ville,metier,age,result,setAge,setMetier,setVille,setSearch,handleAgeChange,handleMetierChange,handleVilleChange,metierOptions,villeOptions,ageOptions};
}
export default useFiltre