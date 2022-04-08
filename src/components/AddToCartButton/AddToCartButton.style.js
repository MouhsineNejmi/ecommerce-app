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

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
