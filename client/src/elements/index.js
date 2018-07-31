import styled from "styled-components";
import { fontSizes, colors, media } from "../styles";

//EXAMPLE
export const Div = styled.button`
    font-family: Platelet;
    font-size: ${fontSizes.xlg};
    color: ${colors.primary.dark};
    ${media.tablet`
        background-color: red;
    `}
`