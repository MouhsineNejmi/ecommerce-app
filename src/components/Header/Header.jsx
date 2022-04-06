import { Link } from "react-router-dom";
import { HeartIcon, ShoppingCartIcon } from "../Icons/Icons";
import {
  HeaderContainer,
  HeaderBrand,
  HeaderNavigation,
  HeaderNavigationList,
  HeaderNavigationElement,
  HeaderNavigationIcons,
  HeaderNavigationIcon,
} from "./Header.style";
import { navigationList } from "./headerData";

const Header = () => {
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
          <HeaderNavigationIcon to='/favorite-products'>
            <HeartIcon />
            <span>0</span>
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
