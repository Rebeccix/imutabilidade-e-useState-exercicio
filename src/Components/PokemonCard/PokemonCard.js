import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";
import React from "react";

const PokemonCard = (props) => {
  const { image, name, type, weight, color, evolved } = props.currentPoke;

  const evoluirPokemon = (current) => {
    // const [filtered] = props.pokemon.filter(
    //   (poke) => poke.name === current.name
    // );'

    const pokemon = props.pokemon.filter(
      (poke) => poke.name !== current.name
    );

    if (current.name === 'Pichu') {
      const currentPokemon = {
        ...current,
        name: "Pikachu",
        weight: 6,
        evolved: true,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
      } 
      props.setPokemon([currentPokemon, ...pokemon])
    } else if (current.name === 'Ralts'){
      const currentPokemon = {
        ...current,
        name: "Kirlia",
        weight: 8,
        evolved: true,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/00/281Kirlia.png/250px-281Kirlia.png",
      }
      props.setPokemon([...pokemon, currentPokemon])
    }
  };


  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>
      <p>{evolved ? "Sim" : "Não"}</p>

      <EvolveButton onClick={() => evoluirPokemon(props.currentPoke)}>
        Evoluir!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard;
