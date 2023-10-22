import Pokemon from "./Pokemon";

const Pokedex = (props: any) => {
  const { pokemons, loading, searchPokemon} = props;


  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Carregando, só um minuto...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon: any, index: string) => {
              return <Pokemon key={index} pokemon={pokemon} searchPokemon={searchPokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;