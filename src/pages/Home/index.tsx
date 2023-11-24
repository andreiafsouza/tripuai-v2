import Logo from "@/components/Logo/Logo";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <S.Main>
      <Logo />
      <p>
        <Link to="/cartas">Cartas</Link>
      </p>
      <p>
        <Link to="play">Jogue agora</Link>
      </p>
    </S.Main>
  );
};

export default Home;
