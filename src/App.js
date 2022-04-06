import { ThemeProvider } from "styled-components";

// -------- Styles
import { GlobalStyles } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";

// -------- Components
import { useDarkMode } from "./components/ToggleTheme/useDarkTheme.hooks";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

// -------- Pages
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ToggleTheme theme={theme} themeToggler={themeToggler} />

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
