import Logo from "@/components/Logo/Logo";
import * as S from "./styles";
import DefaultBtn from "@/components/Buttons/DefaultBtn";
import { useNavigate } from "react-router-dom";
import Badge from "@/components/Badge/Badge";

const Home = () => {
  const navigate = useNavigate();
  return (
    <S.Main>
      <Logo />
      <S.ButtonWrapper>
        {/* <div style={{ position: "relative" }}>
          <Badge variant="primary" size="medium" position="bottom-center">
            Em breve!
          </Badge>
          <DefaultBtn
            text="Ver Cartas"
            size="small"
            color="primary"
            onClick={() => navigate("/cartas")}
          />
        </div> */}
        <div style={{ position: "relative" }}>
          <Badge variant="danger" size="medium" position="bottom-center">
            Em breve!
          </Badge>
          <DefaultBtn
            text="Jogue Agora"
            size="small"
            color="primary"
            onClick={() => navigate("/play")}
          />
        </div>
      </S.ButtonWrapper>
    </S.Main>
  );
};

export default Home;
