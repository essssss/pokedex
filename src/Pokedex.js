import Pokecard from "./Pokecard";
import "./Pokedex.css";
const Pokedex = ({ pokeList }) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="PokedexCards">
                {pokeList.map((p) => (
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
        </div>
    );
};
export default Pokedex;
