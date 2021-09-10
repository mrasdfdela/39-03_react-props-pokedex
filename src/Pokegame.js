import React from "react";

import pokeArr, {shuffleArr, expTotal} from "./helpers.js";
import Pokedex from "./Pokedex.js";

function Pokegame() {
  const arr = shuffleArr(pokeArr)
  const pokeArrOne = arr.slice(arr.length/2)
  const pokeArrTwo = arr.slice(0, arr.length/2)

  const pokeExpOne = expTotal(pokeArrOne);
  const pokeExpTwo = expTotal(pokeArrTwo);
  return (
    <div className="Pokegame">
      <h2>Player 1</h2>
      <Pokedex pokeArr={pokeArrOne} isWinner={pokeExpOne > pokeExpTwo} />
      <h2>Player 2</h2>
      <Pokedex pokeArr={pokeArrTwo} isWinner={pokeExpTwo > pokeExpOne} />
    </div>
  );
}

export default Pokegame;
