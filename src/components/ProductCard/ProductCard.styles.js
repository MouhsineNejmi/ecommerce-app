import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  height: 350px;
`;

export const ProductCardContainer = styled.div`
  height: 95%;
  width: 100%;

  &:hover {
    & svg {
      display: block;

      &:hover {
        opacity: 1;
      }
    }

    & button {
      display: flex;
    }
  }

  & svg {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    fill: white;
    opacity: 0.7;
    display: none;
    transform: all 0.2s;
  }

  & button {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ProductCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProductCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  & h4 {
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 1.05px;
  }
`;
