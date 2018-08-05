import React from 'react';
import styled from "../styles";

const Div = styled.div`
    position: relative;
`

function Menu({ children, ...props }) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Menu;
