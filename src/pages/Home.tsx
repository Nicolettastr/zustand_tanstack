import { useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useShallow } from "zustand/shallow";
import { Card } from "../components/Card";
import Header from "../components/Header";
import { useSearchPokemon } from "../hooks/useSearchPokemon";
import usePokemonStore from "../store/PokemonStore";
import "../styles/Home.css";

export const Home = () => {
  const { fetchPokemons, next, previous, pokemons, searchedPokemon } =
    usePokemonStore(
      useShallow((state) => ({
        fetchPokemons: state.fetchPokemons,
        next: state.next,
        previous: state.previous,
        pokemons: state.pokemons,
        searchedPokemon: state.searchedPokemon,
      }))
    );

  const { pokemon: searchResult, isLoading: isSearching } = useSearchPokemon();

  const shouldShowSearch = !!searchedPokemon && !!searchResult;
  const shouldShowEmpty = searchedPokemon && !searchResult;

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      {isSearching ? (
        <span className="loader"></span>
      ) : shouldShowEmpty ? (
        <p className="not-found">
          No se encontró ningún Pokémon llamado "{searchedPokemon}".
        </p>
      ) : (
        <div className="card_container">
          <Card shouldShowSearch={shouldShowSearch} />
        </div>
      )}
      {!searchedPokemon && (
        <div className="btn-wrapper">
          <button
            className="pagination_btn"
            onClick={() => previous && fetchPokemons(previous)}
            disabled={!previous}
          >
            <span>
              <GrPrevious />
            </span>
            Previous
          </button>
          <button
            className="pagination_btn"
            onClick={() => next && fetchPokemons(next)}
            disabled={!next}
          >
            Next
            <span>
              <GrNext />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
