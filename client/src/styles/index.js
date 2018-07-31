import { injectGlobal, css } from "styled-components";

// IMAGES
import vschoolLogo from "../assets/images/vschool logo.png";

// FONTS
import ltPro from "../assets/fonts/LtPro-Condensed/DINNextLTPro-Condensed.woff";
import platelet from "../assets/fonts/Platelet/Platelet.ttf";

export const fontSizes = {
    sm: "1em",
    md: "1.5em",
    lg: "2.25em",
    xlg: "3.375em"
}

// COLORS
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

//GLOBAL STYLES
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
        margin: 0;
    }
`

//MEDIA QUERIES
const devices = {
    tablet: 600,
    tabletHoriz: 900,
    desktop: 1200
}

export const media = Object.keys(devices).reduce((obj, device) => {
    obj[device] = (...args) => {
        return css`
            @media (min-width: ${devices[device] / 16}em){
                ${css(...args)}
            }
        `
    }
    return obj;
}, {})



