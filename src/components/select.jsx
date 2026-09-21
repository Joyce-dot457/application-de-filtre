import Select from "react-select"; // react select est une librairie permettantde generer un menu deroulant avec des options
// les props sont utlises ici....
function Options({option,value,onChange,label}) {
  return (
    <div>
      <label id="label"> {label}</label>
      <Select
        isMulti
        name=""
        classNamePrefix="mon-select"
        options={option} // affiche tous les options de chaque objets
        value={option.filter(
          (options) => value.includes(options.value), //parcourt toute les options et filtre et garde ce dont la ve\aleur se trouve dans le tablau type
        )} // affiche la valeur filtre dans les options
        onChange={onChange} //quand l'utlisateur ajoute ou retire une option cette fonction est utlisee
        unstyled // efface le style ds badges et des selecteds
        controlShouldRenderValue={false} //faire en sorte que le badge ne s'affiche pas dansl'input select...
        isClearable={false} // efface la croix tout effacer dans le selected
      />
    </div>
  );
}
export default Options;
