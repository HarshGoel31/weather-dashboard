// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom, #3a7bd5, #00d2ff);
    color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
