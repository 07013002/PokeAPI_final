import { useContext } from "react";
import CapturedContext from "../contexts/capturedContext";

export const Pokemon = (props: any) => {
  const { capturedPokemons, updateCapturedPokemons } =
    useContext(CapturedContext);

  const { pokemon, searchPokemon} = props;

  const onHeartClick = () => {
    updateCapturedPokemons(pokemon.name);
  };
  const heart = capturedPokemons.includes(pokemon.name) ? "🟩" : "🟥";
  let temp = "";
  pokemon.types.map((type: any) => {
    temp = temp + "  " + type.type.name;
  });
  temp = temp + "  " + pokemon.name;

  if (temp.includes(searchPokemon) || searchPokemon == "all") {
    return (
      <div className="pokemon-card">
        <div className="pokemon-image-container">
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-image"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type: any, index: string) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Pokemon;
