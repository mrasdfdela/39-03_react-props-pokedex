import React from "react";
import Pokecard from "./Pokecard.js";
import { expTotal } from "./helpers.js";

import "./Pokedex.css";

function Pokedex({pokeArr,isWinner}) {
  return (
    <div className="Pokedex">
      {pokeArr.map((pokemon) => {
        return (
          <div className="Pokedex-pokemon">
            <Pokecard pokemon={pokemon} />
          </div>
        );
      })}
      <h3 className="Pokedex-score">Score: {expTotal(pokeArr)}</h3>
      <div className="Pokedex-winner">{isWinner ? "This hand wins!" : ""}</div>
    </div>
  );
}

export default Pokedex;
