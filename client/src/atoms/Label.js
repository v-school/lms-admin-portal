import React from 'react';
import styled, { colors, fontSizes } from "../styles";

const Label = styled.label`
    &::before{
        color: ${colors.primary.dark};
        font-family: Platelet;
        font-size: ${fontSizes.lg};
        content: "${props => props.content}";
    }
`

function LabelDisplay({ children, ...props }) {
    return (
        <Label {...props}>
            {children}
        </Label>
    )
}

export default LabelDisplay
