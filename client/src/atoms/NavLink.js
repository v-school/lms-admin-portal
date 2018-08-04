import React from 'react';
import styled, {colors, fontSizes} from "../styles";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    color: ${colors.secondary.mid};
    font-family: Platelet;
    font-size: ${fontSizes.md};
    &:hover{
        cursor: pointer;
    }
`

function NavLink({ children, ...props }) {
    return (
        <StyledLink {...props}>
            {children}
        </StyledLink>
    )
}

export default NavLink;