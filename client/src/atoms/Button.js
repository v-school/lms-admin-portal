import React from 'react';
import styled from "../styles";
import { Input } from "./Input";

export const Button = Input.withComponent("button").extend`
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
