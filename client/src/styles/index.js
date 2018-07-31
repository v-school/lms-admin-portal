import { injectGlobal, css } from "styled-components";

// IMAGES
import vschoolLogo from "../images/vschool logo.png";

// FONTS
import ltPro from "../fonts/LtPro-Condensed/DINNextLTPro-Condensed.woff";
import platelet from "../fonts/Platelet/Platelet.ttf";

injectGlobal`
    @font-face{
        font-family: LtPro;
        src: url(${ltPro}) format("woff");
    }
    @font-face{
        font-family: Platelet;
        src: url(${platelet}) format("ttf");
    }
    *{
        box-sizing: border-box;
    }
`

export const colors = {
    primary: {
        light: "#EFE9DE",
        dark: "#707070"
    },
    secondary: {
        light: "#FFFFFF",
        mid: "#4271C9"
    },
    tertiary: {
        light: "#00FF62",
        dark: "#FF0000"
    }
}
export const fontSizes = {
    sm: "1em",
    md: "1.5em",
    lg: "2.25em",
    xlg: "3.375em"
}

export const devices = {
    tablet: "600px",
    tabletHoriz: "900px",
    desktop: "1200px"
}

//SET UP MEDIA QUERIES



