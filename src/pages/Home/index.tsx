import Logo from "@/components/Logo/Logo";
import * as S from "./styles";
import DefaultBtn from "@/components/Buttons/DefaultBtn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <S.Main>
      <Logo />
      <S.ButtonWrapper>
        <DefaultBtn
          text="Ver Cartas"
          size="small"
          color="primary"
          onClick={() => navigate("/cartas")}
        />
        <DefaultBtn
          text="Jogue Agora"
          size="small"
          color="primary"
          onClick={() => navigate("/play")}
        />
      </S.ButtonWrapper>
    </S.Main>
  );
};

export default Home;
