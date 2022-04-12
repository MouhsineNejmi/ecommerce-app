import React, { useState } from "react";
import { Link } from "react-router-dom";

// ------- Data
import { navigationList, navigationListResponsive } from "./headerData";

// ------- Components
import { HeartIcon, ShoppingCartIcon } from "../Icons/Icons";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

// ------- Styles
import {
  HeaderContainer,
  HeaderBrand,
  HeaderNavigation,
  HeaderNavigationList,
  HeaderNavigationElement,
  StyledLink,
  HeaderNavigationIcons,
  HeaderNavigationIcon,
  HeaderNavigationResponsive,
  HeaderResponsive,
} from "./Header.style";

// ------- Redux
import { useSelector } from "react-redux";
import CartModal from "../CartModal/CartModal";

const Header = () => {
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((state) => !state);

  return (
    <>
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
                  <StyledLink to={link} exact='true'>
                    {name}
                  </StyledLink>
                </HeaderNavigationElement>
              );
            })}
          </HeaderNavigationList>

          <HeaderNavigationIcons>
            <HeaderNavigationIcon>
              <StyledLink to='/favorites'>
                <HeartIcon />
                <span>{favorites.length}</span>
              </StyledLink>
            </HeaderNavigationIcon>

            <HeaderNavigationIcon>
              <ShoppingCartIcon />
              <span>{cart.length}</span>
              <CartModal />
            </HeaderNavigationIcon>
          </HeaderNavigationIcons>
        </HeaderNavigation>

        <HeaderNavigationResponsive onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <HiMenuAlt2 />}
        </HeaderNavigationResponsive>
      </HeaderContainer>

      {isOpen && (
        <HeaderResponsive>
          {navigationListResponsive.map((nav) => {
            const { name, link } = nav;

            return (
              <HeaderNavigationElement key={name}>
                <Link to={link}>{name}</Link>
              </HeaderNavigationElement>
            );
          })}
        </HeaderResponsive>
      )}
    </>
  );
};

export default Header;
