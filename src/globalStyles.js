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

    &::-webkit-scrollbar {
    width: 0.5rem;
    }
 
    &::-webkit-scrollbar-track {
      background-color: #0C0F14;
    }
 
    &::-webkit-scrollbar-thumb {
      background-color: #272822;
    }
  }


`;
export default GlobalStyle;
