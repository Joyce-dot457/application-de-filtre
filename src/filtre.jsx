import { useState } from "react";
import "./App.css";
import useFiltre from "./hooks/usefiltre";
import Options from "./components/select";
import Couleur from "./components/color";
import {Menu} from "lucide-react"

function Filtre() {
  const {
    search,
    ville,
    setAge,
    setMetier,
    setVille,
    setSearch,
    metier,
    age,
    result,
    handleAgeChange,
    handleMetierChange,
    handleVilleChange,
    metierOptions,
    villeOptions,
    ageOptions
  } = useFiltre(); // qui est un hook personnaalise

  // qui est un tableau donnant les differents options,valeurs des types
  const filtre = [
    {
      id: "metier",
      options: metierOptions,
      value: metier,
      onChange: handleMetierChange,
      placeholder: "metier",
    },
    {
      id: "ville",
      options: villeOptions,
      value: ville,
      onChange: handleVilleChange,
      placeholder: "ville",
    },
    {
      id: "age",
      options: ageOptions,
      value: age,
      onChange: handleAgeChange,
      placeholder: "age",
    },
  ];

  // permet de definir le side bar qui peut changer aussi
  const [sidebarOuvert, setSidebarOuvert] = useState(false);
  //
  const handleClick = () => {
    setSidebarOuvert((prev) => !prev);
  };
  return (
    <div id="container">
      <div id="search">
        <input
          type="text"
          name=""
          placeholder="rechercher............."
          id="input"
          value={search}
          onChange={function (e) {
            setSearch(e.target.value);
          }}
        />
        <button id="click">🔍</button>
      </div>
      <div id="ligne"></div>
      <div id="corps">
        <div
          id="sidebar"
          className={sidebarOuvert ? "sidebar-ouvert" : "sidebar-ferme"} //si la sidebar est clique execute l'une de ces classNames
        >
          <h2 id="groupe">trier par </h2>
          {/*qui est le tapleau des filtres au lieu d'utliser un seule fonction jsx pour chaque option j'ai prefere mettre un tableau qui sera affiche avec chaque valeur*/}
          {filtre.map((f) => (
            <Options
              name=""
              classNamePrefix="mon-select" // ces variables sont les props utlises dans select.jsx pour devenir chaque caracteristique desoptions
              label={f.id}
              key={f.id}
              option={f.options}
              value={f.value}
              onChange={f.onChange}
              placeholder={f.placeholder}
            />
          ))}
        </div>
        <div id="liste">
          <div id="entete">
             <button onClick={handleClick} id="click-sidebar">
                <Menu />
              </button>
              <p id="contact">
              CONCTACTS
            </p>
            <p id="a-z">nom(A-Z)</p>
          </div>
          <div id="badge">
            {/* affiche un badge ou un tableau de badge selon les types*/}
            {metier.map((m) => (
              <div key={`metier-${m}`} id="badge-metier">
                <span>{m}</span>
                {/*affiche l'option choisi du type */}
                <button
                  onClick={() => setMetier(metier.filter((item) => item !== m))}
                  id="badge-button"
                >
                  x
                </button>
                {/*ce bouton supprime le filtre en reconstruisant le tableau sans l'element choisi et le set rend tous simplement le nouveau tableau */}
              </div>
            ))}
            {ville.map((v) => (
              <div key={`ville-${v}`} id="badge-ville">
                <span>{v}</span>
                <button
                  onClick={() => setVille(ville.filter((item) => item !== v))}
                  id="badge-button"
                >
                  x
                </button>
              </div>
            ))}
            {age.map((a) => (
              <div key={`age-${a}`} id="badge-age">
                <span>{a}</span>
                <button
                  onClick={() => setAge(age.filter((item) => item !== a))}
                  id="badge-button"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div id="description-filtre"></div>
          <div id="description">
            {result.map((users) => (
              <li key={users.id} className="card">
                <div id="avatar" style={{ background: Couleur(users.metier) }}>
                  {users.nom[0]}
                </div>
                <div>
                  <p id="name">
                    {users.nom} -{users.age}ans
                  </p>
                  <div id="met">
                    <p id="metier"> {users.metier}</p>
                    <p id="point">.</p>
                    <p id="ville">{users.ville}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filtre;
