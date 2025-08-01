import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.textColor};
  }
  
  html {
    font-family: ${({ theme }) => theme.primaryFont};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: ${({ theme }) => theme.primaryFont};
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;