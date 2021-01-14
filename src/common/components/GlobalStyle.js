import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Alleyn", sans-serif;
        background-color: #fafafa;
        margin: 0px;
    }

    #root {
        width: 100%;
    }
`;

export default GlobalStyle;
