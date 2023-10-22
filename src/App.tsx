import { useEffect, useState } from "react";

import './App.css'
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons } from "./api/api";
import {
  PokemonInterface,
  PokemonInterfaceR,
  PokemonData,
} from "./interface/PokemonInterface";
import { CapturedProvider } from "./contexts/capturedContext";

const capturedKey: string = "f";

function App() {
  const [captureds, setCaptureds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [searchPokemon, setSearchPokemon] = useState("all");

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(0);
      const data: PokemonInterface = await getPokemons();
      const promises = data.results.map(async (pokemon: PokemonInterfaceR) => {
        return await getPokemonData(pokemon.url);
      });
      const results: PokemonData[] = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fecthPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    loadCapturedPokemons();
  }, []);

  useEffect(() => {
    console.log(searchPokemon);
  }, [searchPokemon]);

  const loadCapturedPokemons = () => {
    const storedData = window.localStorage.getItem(capturedKey);

    if (storedData !== null) {
      const pokemons = JSON.parse(storedData);
      setCaptureds(pokemons);
    } else {
      console.log("sem capturas");
    }
  };
  const updateCapturedPokemons = (name: string) => {
    const updatedCaptureds = [...captureds];
    const capturedIndex = captureds.indexOf(name);
    if (updatedCaptureds.length < 6 || capturedIndex >= 0) {
      if (capturedIndex >= 0) {
        updatedCaptureds.splice(capturedIndex, 1);
      } else {
        updatedCaptureds.push(name);
      }
      window.localStorage.setItem(
        capturedKey,
        JSON.stringify(updatedCaptureds)
      );
      setCaptureds(updatedCaptureds);
    }else{
      window.alert("numero maximo de pokemons na mochila")
    }
  };



  return (
    <>
      <CapturedProvider
        value={{
          capturedPokemons: captureds,
          updateCapturedPokemons: updateCapturedPokemons,
        }}
      >
        <div>
          <Navbar />
          <Searchbar 
             setSearchPokemon={setSearchPokemon}
          />
          {notFound != 0 ? (
            <div class-name="not-found-text"> Pokemon não encontrado </div>
          ) : (
            <Pokedex
              pokemons={pokemons}
              loading={loading}
              searchPokemon={searchPokemon}
              setNotFound={setNotFound}
              notFound={notFound}
            />
          )}
        </div>
      </CapturedProvider>
    </>
  );
}

export default App;
