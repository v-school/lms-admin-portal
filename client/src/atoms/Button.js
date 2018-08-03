import React from 'react';
import styled from "../styles";
import { StyledInput } from "./Input";

export const Button = StyledInput.withComponent("button").extend`
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
