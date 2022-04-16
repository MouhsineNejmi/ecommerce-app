import React, { useState } from "react";
import { Link } from "react-router-dom";

// ------- Components
import { HeartIcon, ShoppingCartIcon } from "../Icons/Icons";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import CartModal from "../CartModal/CartModal";

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
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../app/user/userSlice";

// ------- Firebase
import { signOutUser } from "../../firebase/firebase.utils";

const Header = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => setOpenMenu((state) => !state);
  const toggleModal = () => setOpenModal((state) => !state);

  const signOut = () => {
    dispatch(setIsLoggedIn(false));
    signOutUser();
  };

  return (
    <>
      <HeaderContainer>
        <HeaderBrand>
          <Link to='/'>mystore</Link>
        </HeaderBrand>

        <HeaderNavigation>
          <HeaderNavigationList>
            <HeaderNavigationElement>
              <StyledLink to='/shop' exact='true'>
                Shopping
              </StyledLink>
            </HeaderNavigationElement>

            <HeaderNavigationElement>
              <StyledLink to='/contacts' exact='true'>
                Contacts
              </StyledLink>
            </HeaderNavigationElement>

            <HeaderNavigationElement>
              {isLoggedIn ? (
                <StyledLink as='span' onClick={signOut}>
                  Sign Out
                </StyledLink>
              ) : (
                <StyledLink to='/sign-in-and-sign-up' exact='true'>
                  Sign In
                </StyledLink>
              )}
            </HeaderNavigationElement>
          </HeaderNavigationList>

          <HeaderNavigationIcons>
            <HeaderNavigationIcon>
              <StyledLink to='/favorites'>
                <HeartIcon />
                <span>{favorites.length}</span>
              </StyledLink>
            </HeaderNavigationIcon>

            <HeaderNavigationIcon onClick={toggleModal}>
              <ShoppingCartIcon />
              <span>{cartProducts ? cartProducts.length : 0}</span>
              {openModal && <CartModal openModal={openModal} />}
            </HeaderNavigationIcon>
          </HeaderNavigationIcons>
        </HeaderNavigation>

        <HeaderNavigationResponsive onClick={toggleMenu}>
          {openMenu ? <IoMdClose /> : <HiMenuAlt2 />}
        </HeaderNavigationResponsive>
      </HeaderContainer>

      {openMenu && (
        <HeaderResponsive>
          <HeaderNavigationElement>
            <Link to='/shop'>Shopping</Link>
          </HeaderNavigationElement>

          <HeaderNavigationElement>
            <Link to='/contacts'>Contacts</Link>
          </HeaderNavigationElement>

          <HeaderNavigationElement>
            <Link to='/favorites'>Favorites</Link>
          </HeaderNavigationElement>

          {isLoggedIn ? (
            <HeaderNavigationElement>
              <StyledLink as='div' onClick={signOutUser}>
                Sign Out
              </StyledLink>
            </HeaderNavigationElement>
          ) : (
            <HeaderNavigationElement>
              <StyledLink to='/sign-in-and-sign-up' exact='true'>
                Sign In
              </StyledLink>
            </HeaderNavigationElement>
          )}

          <HeaderNavigationElement>
            <Link to='/checkout'>Go to Checkout</Link>
          </HeaderNavigationElement>
        </HeaderResponsive>
      )}
    </>
  );
};

export default Header;
