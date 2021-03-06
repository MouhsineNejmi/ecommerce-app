import { ThemeProvider } from "styled-components";
import { Outlet, Route, Routes } from "react-router-dom";

// -------- Styles
import { GlobalStyles } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";

// -------- Components
import { useDarkMode } from "./components/ToggleTheme/useDarkTheme.hooks";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import Header from "./components/Header/Header";

// -------- Pages
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FavoritePage from "./pages/Favorite/FavoritePage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

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
        <Route path='shop' element={<ShopPage />} />
        <Route path='/shop/:shopCollection' element={<CollectionPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
        <Route path='/sign-in-and-sign-up' element={<SignInAndSignUpPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>

      <Outlet />
    </ThemeProvider>
  );
};

export default App;
