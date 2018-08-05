import React from 'react';
import styled from "../styles";
import {css} from "styled-components";

const dataMixin = css`
    display: flex;
`

const Div = styled.div`
    position: relative;
    ${props => props.dataMenu && dataMixin}
`

function Menu({ children, ...props }) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Menu;
