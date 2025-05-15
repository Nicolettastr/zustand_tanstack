import { create } from "zustand";
import type { TPokemon } from "../types/pokemon";

interface PokemonProps {
  pokemons: TPokemon[];
  setPokemons: (pokemons: TPokemon[]) => void;
  fetchPokemons: () => Promise<TPokemon[]>;
}

const usePokemonStore = create<PokemonProps>((set) => ({
  pokemons: [],
  setPokemons: (pokemons) => set({ pokemons }),
  fetchPokemons: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();

        return {
          name: pokemon.name,
          url: details.sprites.other["official-artwork"].front_default,
        };
      })
    );

    set({ pokemons: pokemonDetails });
    return pokemonDetails;
  },
}));

export default usePokemonStore;
