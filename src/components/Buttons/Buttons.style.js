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

export const SignBtn = styled.button`
  min-width: 165px;
  border: none;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0px 28px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: ${({ theme, buttonType }) =>
    buttonType ? theme.googleBtn : theme.btnBackground};
  color: ${({ theme, buttonType }) =>
    buttonType ? theme.googleBtnTitle : theme.btnTitle};
  border: 1px solid ${({ theme, buttonType }) => !buttonType && theme.border};

  &:hover {
    background-color: ${({ theme, buttonType }) =>
      buttonType ? theme.googleBtnHover : theme.btnBackgroundReverse};
    color: ${({ theme, buttonType }) =>
      buttonType ? theme.googleBtnTitle : theme.btnTitleReverse};
    border: 1px solid ${({ theme, buttonType }) => !buttonType && theme.border};
  }
`;
