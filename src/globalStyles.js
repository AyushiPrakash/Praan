import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Syne', sans-serif;
    background-color: ${(props) => props.theme.backgroundPrimary};
  }
`;
export default GlobalStyle;
