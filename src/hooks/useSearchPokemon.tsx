import { useQuery } from "@tanstack/react-query";
import usePokemonStore from "../store/PokemonStore";

export const useSearchPokemon = () => {
  const searchedPokemon = usePokemonStore((state) => state.searchedPokemon);
  const onSearchPokemon = usePokemonStore((state) => state.onSearchPokemon);

  const {
    data: pokemon,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => onSearchPokemon(searchedPokemon),
    enabled: !!searchedPokemon,
  });

  return {
    isLoading,
    pokemon,
    refetch,
  };
};
