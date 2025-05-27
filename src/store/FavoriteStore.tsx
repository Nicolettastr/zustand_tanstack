import { create } from "zustand";
import type { TPokemon } from "../types/pokemon";

interface FavoritesStore {
  favorites: TPokemon[];
  addFavorite: (pokemon: TPokemon) => void;
  removeFavorite: (name: string) => void;
  isFavorite: (name: string) => boolean;
  clearFavorites: () => void;
}

const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  addFavorite: (pokemon) => {
    const { favorites } = get();
    if (!favorites.some((p) => p.name === pokemon.name)) {
      set({ favorites: [...favorites, pokemon] });
    }
  },

  removeFavorite: (name) => {
    const { favorites } = get();
    set({ favorites: favorites.filter((p) => p.name !== name) });
  },

  isFavorite: (name) => {
    return get().favorites.some((p) => p.name === name);
  },

  clearFavorites: () => {
    set({ favorites: [] });
  },
}));

export default useFavoritesStore;
