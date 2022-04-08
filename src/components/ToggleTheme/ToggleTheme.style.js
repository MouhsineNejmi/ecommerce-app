import styled from "styled-components";

export const ToggleThemeContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  & svg {
    stroke: ${({ theme }) => theme.icon};

    & path {
      fill: ${({ theme }) => theme.icon};
    }
  }
`;
