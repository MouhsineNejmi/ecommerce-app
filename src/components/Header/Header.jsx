import { Link } from "react-router-dom";

// ------- Data
import { navigationList } from "./headerData";

// ------- Components
import { HeartIcon, ShoppingCartIcon } from "../Icons/Icons";

// ------- Styles
import {
  HeaderContainer,
  HeaderBrand,
  HeaderNavigation,
  HeaderNavigationList,
  HeaderNavigationElement,
  HeaderNavigationIcons,
  HeaderNavigationIcon,
} from "./Header.style";

import { useSelector } from "react-redux";

const Header = () => {
  const favoritesCount = useSelector((state) => state.favorites.count);

  return (
    <HeaderContainer>
      <HeaderBrand>
        <Link to='/'>mystore</Link>
      </HeaderBrand>

      <HeaderNavigation>
        <HeaderNavigationList>
          {navigationList.map((nav) => {
            const { name, link } = nav;

            return (
              <HeaderNavigationElement key={name}>
                <Link to={link}>{name}</Link>
              </HeaderNavigationElement>
            );
          })}
        </HeaderNavigationList>

        <HeaderNavigationIcons>
          <HeaderNavigationIcon to='/favorites'>
            <HeartIcon />
            <span>{favoritesCount}</span>
          </HeaderNavigationIcon>

          <HeaderNavigationIcon to='#'>
            <ShoppingCartIcon />
            <span>0</span>
          </HeaderNavigationIcon>
        </HeaderNavigationIcons>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
