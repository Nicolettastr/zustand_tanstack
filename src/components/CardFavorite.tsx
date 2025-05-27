import useFavoritesStore from "../store/FavoriteStore";
import "../styles/favorite.css";

export const CardFavorite = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <>
      {favorites.map((pokemon) => (
        <div className="card-favorite" key={pokemon.name}>
          <div className="image-wrapper">
            <img src={pokemon.url} alt={pokemon.name} />
          </div>
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </>
  );
};
