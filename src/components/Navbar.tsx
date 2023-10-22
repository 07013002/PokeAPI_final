import { useContext } from "react";
import CapturedContext from "../contexts/capturedContext";

const Navbar = () => {
  const logoImg: string = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const { capturedPokemons } = useContext(CapturedContext);
  return (
    <nav>
      <div>
        <h3>Leonardo M</h3>
      </div>
      <div>
        <img alt="pokeapi-logo" src={logoImg}/>
      </div>
      <div className="mochila">{capturedPokemons.length} 🎒</div>
    </nav>
  );
};
export default Navbar;