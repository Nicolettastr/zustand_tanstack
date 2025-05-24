import { create } from "zustand";

import type { TPokemon } from "../types/pokemon";

interface PokemonProps {
  pokemons: TPokemon[];
  setPokemons: (pokemons: TPokemon[]) => void;
  fetchPokemons: (url?: string) => Promise<TPokemon[]>;
  pokemon: TPokemon[];
  next: string | null;
  previous: string | null;
  onSearchPokemon: (name: string) => Promise<TPokemon | null>;
  searchedPokemon: string;
  setSearchedPokemon: (name: string) => void;
}

const usePokemonStore = create<PokemonProps>((set) => ({
  pokemons: [],
  next: null,
  previous: null,
  setPokemons: (pokemons) => set({ pokemons }),
  fetchPokemons: async (url = "https://pokeapi.co/api/v2/pokemon?limit=20") => {
    const response = await fetch(url);
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

    set({
      pokemons: pokemonDetails,
      next: data.next,
      previous: data.previous,
    });

    return pokemonDetails;
  },
  pokemon: [],
  onSearchPokemon: async (name: string) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      const pokemon: TPokemon = {
        name: data.name,
        url: data.sprites.other["official-artwork"].front_default,
      };
      set({ pokemon: [pokemon] });
      return pokemon;
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      return null;
    }
  },
  searchedPokemon: "",
  setSearchedPokemon: (name: string) =>
    set({ searchedPokemon: name.toLowerCase() }),
}));

export default usePokemonStore;
