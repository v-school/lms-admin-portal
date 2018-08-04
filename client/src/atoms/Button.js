import React from 'react';
import styled, { colors } from "../styles";
import { StyledInput } from "./Input";

export const Button = styled(StyledInput.withComponent("button"))`
    font-family: Platelet;
    margin: 8px;
    &:hover{
        cursor: pointer;
    }
`

function Submit({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default Submit
