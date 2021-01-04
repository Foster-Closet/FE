// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 300vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  background: ${({ theme }) => theme.primaryDark}
  color: ${({ theme }) => theme.primaryLight}
  `
