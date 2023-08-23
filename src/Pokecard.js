import "./Pokecard.css";

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{props.name}</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
                alt="pokemon sprite"
                className="Pokecard-image"
            />
            <p className="Pokecard-data">Type: {props.type}</p>
            <p className="Pokecard-data">EXP: {props.exp}</p>
        </div>
    );
};

export default Pokecard;
