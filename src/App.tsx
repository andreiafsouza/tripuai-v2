import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
