import { Card } from "../components/Card";
import { useFetchPokemons } from "../hooks/useFetchPokemons";

export const Home = () => {
  const { isLoading } = useFetchPokemons();

  return (
    <div className="home">
      {isLoading ? <span className="loader"></span> : <Card />}
    </div>
  );
};
