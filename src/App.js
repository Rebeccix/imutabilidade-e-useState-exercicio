import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

// ----------------------------------
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
// ----------------------------------

function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0,
  });

  const [pokemon1, setPokemon1] = useState({
    name: "Ralts",
    type: "Psychic, Fairy",
    evolved: false,
    weight: 6,
    color: "pink",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/e/e1/280Ralts.png/250px-280Ralts.png",
    id: 0,
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Murkrow",
    type: "Dark",
    evolved: false,
    weight: 4,
    color: "gray",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/33/198Murkrow.png/250px-198Murkrow.png",
    id: 0,
  });

  // Para fazer seus próximos pokemons, crie novos estados!
  // const a = [{name: 1}, {name: 2}, {name: 3}];

  // const list = a.map((index) => 
  //   <p>{index.name}</p>
  // );

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} setPokemon={setPokemon} />
        <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1} />
        <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2} />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;

// const [pokemon, setPokemon] = useState([{
//     name: "Pichu",
//     type: "Electric",
//     evolved: false,
//     weight: 2,
//     color: "yellow",
//     image:
//       "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
//     id: 0,
//   },
//   {
//     name: "Ralts",
//     type: "Psychic, Fairy",
//     evolved: false,
//     weight: 6,
//     color: "pink",
//     image:
//       "https://archives.bulbagarden.net/media/upload/thumb/e/e1/280Ralts.png/250px-280Ralts.png",
//     id: 0
//   }]
// );
