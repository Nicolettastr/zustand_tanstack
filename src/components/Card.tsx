import { useQueryClient } from "@tanstack/react-query";
import usePokemonStore from "../store/PokemonStore";

export const Card = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const queryClient = useQueryClient();
  const queryState = queryClient.getQueryState(["pokemons"]);
  const isLoading = queryState?.status;

  if (isLoading === "pending") {
    return <span className="loader"></span>;
  }

  return (
    <div className="card">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="card-item">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.url} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};
