import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  div,
  section,
  ul,
  li,
  a,
  aside,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {}

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    width: fit-content;
  }

  html {
    scroll-behavior: smooth;
  }

  input{
    outline: 1px solid green;
  }

  h1, h2, h3, span, p, label, a, button, input, strong {
    /* font-family: 'Roboto', sans-serif; */
  }

  button {
    background-color: transparent;
    cursor: pointer;
    :disabled {
      cursor: no-drop;
    }
  }

  .hidden__scroll {
    overflow: hidden;
  }
`;