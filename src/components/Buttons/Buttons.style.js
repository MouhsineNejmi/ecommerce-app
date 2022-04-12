import styled from "styled-components";

export const Button = styled.button`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  background: #fff;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.9;
  cursor: pointer;
  transition: all 0.2s;
`;

export const AddToCartBtn = styled(Button)`
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const CheckoutBtn = styled(Button)`
  background: ${({ theme }) => theme.btnBackground};
  color: ${({ theme }) => theme.btnTitle};
  width: 100%;
  font-size: 13px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.btnBackgroundReverse};
    color: ${({ theme }) => theme.btnTitleReverse};
  }
`;
