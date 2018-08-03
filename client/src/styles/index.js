import styled, { injectGlobal, css } from "styled-components";

// FONTS
import ltPro from "../assets/fonts/LtPro-Condensed/DINNextLTPro-Condensed.woff";
import platelet from "../assets/fonts/Platelet/Platelet.ttf";

export const fontSizes = {
    sm: "1.2em",
    md: "1.8em",
    lg: "2.5em",
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
        mid: "#4271C9",
        dark: "#036e6e"
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
    body #root{
        background-color: ${colors.primary.light} 
        height: 100vh;
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

export default styled;

