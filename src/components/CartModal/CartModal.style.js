import styled from "styled-components";

export const CartModalWrapper = styled.div`
  display: ${({ openModal }) => (openModal ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 100%;
  right: -30px;
  width: 240px;
  height: 340px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.body};
  padding: 20px;
  overflow: scroll;
  z-index: 99;
`;

export const CartModalProducts = styled.div``;
export const CartModalCheckout = styled.div``;
