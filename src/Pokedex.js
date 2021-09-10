import React from "react";

import pokeArr from "./helpers.js";
import Pokecard from "./Pokecard.js";

function Pokedex() {
  return (
    <div className="Pokedex">
      {pokeArr.map((pokemon) => {
        return (
        <div className="Pokedex-pokemon">
          <Pokecard pokemon={pokemon} />
        </div>
        );
      })}
    </div>
  );
}

export default Pokedex;
