import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";
import React from "react";

const PokemonCard = (props) => {
  const { image, name, type, weight, color } = props.pokemon;

  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir");

    if (props.pokemon.name === "Pichu") {
      props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        weight: 6,
        evolved: true,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
      });
    } else if (props.pokemon.name === "Ralts") {
      props.setPokemon({
        ...props.pokemon,
        name: "Kirlia",
        weight: 8,
        evolved: true,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/00/281Kirlia.png/250px-281Kirlia.png",
      });
    } else if (props.pokemon.name === "Murkrow") {
      props.setPokemon({
        ...props.pokemon,
        name: "Honchkrow",
        weight: 14,
        evolved: true,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/4/46/430Honchkrow.png/250px-430Honchkrow.png",
      });
    }
  };

  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;
