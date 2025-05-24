import styled from "styled-components";
import Search from "./Search";
const Header = () => {
  return (
    <Container>
      <section>
        <img
          alt="Pokemon bulbasaur gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
        />
        <img
          alt="Pokemon charmander gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
        />
        <img
          alt="Pokemon squirtle gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
        />
        <img
          alt="Pokemon pikachu gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
        />
      </section>

      <Search />
    </Container>
  );
};
const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Header;
