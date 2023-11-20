import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { useLocation } from "react-router-dom";

export const DefaultLayout = () => {
  const { pathname } = useLocation();
  const hasHeader = pathname !== "play" && pathname !== "/";

  return (
    <LayoutContainer>
      {hasHeader ? <h1>HEADER</h1> : null}
      <Outlet />
    </LayoutContainer>
  );
};
