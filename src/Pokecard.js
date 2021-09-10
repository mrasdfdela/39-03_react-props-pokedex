import React from "react";
import "./Pokecard.css";

const PokeCard = (props)=> {
  const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`;
  return (
    <div className="Pokecard">
      <h3>{props.pokemon.name}</h3>
      <img src={link} alt="" />
      <p>Type: {props.pokemon.type}</p>
      <p>EXP: {props.pokemon.base_experience}</p>
    </div>
  );
}

export default PokeCard;