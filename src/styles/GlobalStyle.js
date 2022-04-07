import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 20px 60px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto Condensed', sans-serif;
    transition: background-color .4s ease-in;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text}
  }

  ul {
    list-style: none;
  }
`;
