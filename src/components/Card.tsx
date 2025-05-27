import { FaHeart, FaRegHeart } from "react-icons/fa";
import useFavoritesStore from "../store/FavoriteStore";
import usePokemonStore from "../store/PokemonStore";
import "../styles/Card.css";

interface CardProps {
  shouldShowSearch: boolean;
}

export const Card: React.FC<CardProps> = ({ shouldShowSearch }) => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const pokemon = usePokemonStore((state) => state.pokemon);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite);

  const displayedPokemons = shouldShowSearch ? pokemon : pokemons;

  return (
    <>
      {displayedPokemons.map((pokemon) => {
        const favorite = isFavorite(pokemon.name);

        const toggleFavorite = () => {
          favorite ? removeFavorite(pokemon.name) : addFavorite(pokemon);
        };

        return (
          <div className="card" key={pokemon.name}>
            <div className="card-header">
              <img src={pokemon.url} alt={pokemon.name} />
              <button className="heart-button" onClick={toggleFavorite}>
                {favorite ? (
                  <FaHeart color="red" size={20} />
                ) : (
                  <FaRegHeart color="gray" size={20} />
                )}
              </button>
            </div>
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </>
  );
};
