import React from 'react';
import styled from "../styles";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

function Nav({children, ...props}) {
    return (
        <StyledNav {...props}>
            {children}
        </StyledNav>
    )
}

export default Nav