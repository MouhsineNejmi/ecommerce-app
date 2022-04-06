import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBrand = styled.div`
  width: 20%;

  & a {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const HeaderNavigation = styled.nav`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderNavigationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-right: 20px;
`;

export const HeaderNavigationElement = styled.li`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.gray};
`;

export const HeaderNavigationIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;
  height: 70px;
`;

export const HeaderNavigationIcon = styled(Link)`
  position: relative;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.text};

    & path,
    & g path {
      fill: ${({ theme }) => theme.text} !important;
    }
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    background-color: #ff0000;
    color: #fff;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 700;
    position: absolute;
    bottom: 21px;
    right: 7px;
  }
`;
