import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";

export const DefaultLayout = () => {
  const { pathname } = useLocation();
  const hasHeader = pathname !== "/play" && pathname !== "/";

  return (
    <LayoutContainer>
      {hasHeader ? <Header /> : null}
      <Outlet />
    </LayoutContainer>
  );
};
