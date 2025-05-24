import usePokemonStore from "../store/PokemonStore";
import "../styles/Card.css";

interface CardProps {
  shouldShowSearch: boolean;
}

export const Card: React.FC<CardProps> = ({ shouldShowSearch }) => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const pokemon = usePokemonStore((state) => state.pokemon);

  return (
    <>
      {(shouldShowSearch ? pokemon : pokemons).map((pokemon) => (
        <div className="card" key={pokemon.name}>
          <img src={pokemon.url} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </>
  );
};
