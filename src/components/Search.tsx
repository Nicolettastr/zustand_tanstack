import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import styled from "styled-components";
import useDebounce from "../hooks/useDebounce";
import { useSearchPokemon } from "../hooks/useSearchPokemon";
import usePokemonStore from "../store/PokemonStore";

const Search = () => {
  const searchedPokemon = usePokemonStore((state) => state.searchedPokemon);
  const setSearchedPokemon = usePokemonStore(
    (state) => state.setSearchedPokemon
  );

  const debouncedQuery = useDebounce(searchedPokemon, 500);

  const { refetch } = useSearchPokemon();

  useEffect(() => {
    if (debouncedQuery) {
      refetch();
    }
  }, [debouncedQuery]);

  return (
    <Container>
      <section className="content">
        <Icon className="icono" icon="ic:twotone-search" />
        <input
          placeholder="...Search"
          onChange={(value) => {
            setSearchedPokemon(value.target.value);
          }}
        />
      </section>
    </Container>
  );
};
const Container = styled.div`
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.text};
  border: 2px solid ${({ theme }) => theme.color2};
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .icono {
      font-size: 30px;
      cursor: pointer;
    }
    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${(props) => props.theme.text};
    }
  }
`;

export default Search;
