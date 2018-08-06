import React from 'react';
import styled, { colors, fontSizes, media } from "../styles";
import { css } from "styled-components";

const gridMixin = css`
    grid-column: ${props => props.gridColumn || "1/-1"};
    text-align: center;
    padding: 0;
`
const iconMixin = css`
    &:hover{
        cursor: pointer;
        border: 1px solid ${colors.primary.dark};
        transform: scale(1.1);
    }
    input{
        font-family: monospace;
    }
`

const tableMixin = css`
    white-space:nowrap;
    font-size: ${fontSizes.xsm};
    text-align: center;
    padding: 2px 0;
    font-weight: 100;
    margin: 0 0 3px;
    text-wrap: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid ${colors.secondary.light};
    background-color: ${colors.secondary.light}
    color: ${props => props.completed ? colors.tertiary.light : colors.tertiary.dark};
`

const StyledP = styled.p.attrs({
    color: props => props.err && colors.tertiary.dark,
})`
    font-size: ${fontSizes.sm};
    font-family: Platelet;
    padding: 8px;
    color: ${props => props.color || colors.primary.dark}
    ${props => props.grid && gridMixin};
    ${props => props.table && tableMixin};
    ${props => props.hasIcon && iconMixin};
    ${media.tablet`
        font-size: ${fontSizes.md};
        
    `}
`

function P({ children, ...props }) {
    return (
        <StyledP {...props}>
            {children}
        </StyledP>
    )
}

export default P;