import { useQuery } from "@tanstack/react-query";
import usePokemonStore from "../store/PokemonStore";

export const useFetchPokemons = () => {
  const fetchPokemons = usePokemonStore((state) => state.fetchPokemons);

  const { data: pokemons, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
    // Evita llamadas innecesarias a la API
    staleTime: Infinity,
    //habilita la consulta para que se ejecute automáticamente, si no esta habilitado, se puede ejecutar con el método refetch
    enabled: true,
  });

  return {
    isLoading,
    pokemons,
  };
};
