import styled from "styled-components";

export const CollectionPreviewItemWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  height: 350px;
`;

export const CollectionPreviewItemContainer = styled.div`
  height: 95%;
  width: 100%;

  &:hover {
    & div {
      display: block;
    }

    & button {
      display: flex;
    }
  }

  & button {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: none;
  cursor: pointer;
  opacity: 0.7;
  color: #fff;
  font-size: 25px;

  &:hover {
    opacity: 1;
  }

  & svg {
    width: 30px;
    height: 30px;
    fill: white;
  }
`;

export const CollectionPreviewItemImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CollectionPreviewItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  & h4 {
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 1.05px;
  }
`;
