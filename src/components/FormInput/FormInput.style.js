import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

export const FormInputGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const Input = styled.input`
  background: none;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.gray};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  margin: 25px 0;
  transition: all 0.1s;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabelStyles}
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.gray};
  font-size: 16px;
  font-weight: 300;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
