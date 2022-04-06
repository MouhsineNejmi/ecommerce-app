import { ToggleThemeContainer } from "./ToggleTheme.style";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

const ToggleTheme = ({ theme, themeToggler }) => {
  return (
    <ToggleThemeContainer mode={theme} onClick={themeToggler}>
      {theme === "light" ? <BsMoonFill /> : <FiSun />}
    </ToggleThemeContainer>
  );
};

export default ToggleTheme;
