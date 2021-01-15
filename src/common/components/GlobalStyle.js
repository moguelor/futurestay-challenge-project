import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Alleyn", sans-serif;
        background-color:  ${({ theme }) => theme.colors.background};
        margin: 0px;
        transition: all 0.15s linear;
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

    @media(max-width: 576px) {
        body {
            background-color:  ${({ theme }) => theme.colors.backgroundMobile};
        }
    }
`;

export default GlobalStyle;
