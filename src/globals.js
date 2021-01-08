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
    background: white;
    color: black;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `
