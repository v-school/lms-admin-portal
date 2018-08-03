import React from 'react';
import styled, { colors, fontSizes } from "../styles";

const StyledP = styled.p.attrs({
    color: props => props.err && colors.tertiary.dark,
})`
    font-size: ${fontSizes.sm};
    font-family: Platelet;
    padding: 8px;
    color: ${props => props.color || colors.primary.dark}
`

function P({ children, ...props }) {
    return (
        <StyledP {...props}>
            {children}
        </StyledP>
    )
}

export default P;