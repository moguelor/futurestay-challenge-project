import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Alleyn", sans-serif;
        background-color:  ${({ theme }) => theme.colors.background};
        margin: 0px;
    }

    #root {
        width: 100%;
    }

    .no-padding {
        padding:0;
    }

    .no-padding-left {
        padding-left:0;
    }

    .no-poadding-right {
        padding-right:0;
    }
`;

export default GlobalStyle;
