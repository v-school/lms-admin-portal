import React from 'react';
import styled, { colors, fontSizes } from "../styles";

export const Input = styled.input`
    display: inline;
    color: ${colors.primary.dark};
    font-size: ${fontSizes.md};
    font-family: LtPro;
    margin: 3px;
    border: none;
    text-align: center;
    box-shadow: 3px 3px 3px ${colors.primary.dark};
    &::placeholder{
        font-size: ${fontSizes.sm};
        margin: 3px;
        font-family: LtPro;
        padding-left: 18px;
        text-align: left;
        opacity: .8;
    }
    & :hover{
        cursor: auto;
    }
`

function InputDisplay(props) {
    return (
        <Input {...props} />
    )
}

export default InputDisplay;
