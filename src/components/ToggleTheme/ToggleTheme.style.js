import styled from "styled-components";

export const ToggleThemeContainer = styled.div`
  position: absolute;
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

  & svg {
    stroke: ${({ theme }) => theme.icon};

    & path {
      fill: ${({ theme }) => theme.icon};
    }
  }
`;
