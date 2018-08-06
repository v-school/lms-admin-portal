import React from 'react';
import styled, { colors, media } from "../styles";

const Div = styled.div`
    display: grid;
    margin: auto;
    width: 95%;
    background-color: ${colors.primary.light};
    grid-template-columns: 35% 15% 20% 30%;
    grid-template-areas : 
        "nav nav nav nav" 
        "hdr hdr hdr hdr"
        "menu menu menu menu"
        "ass url status student"; 
    ${media.tablet`
        width: 90%;
    `}
    ${media.tabletHoriz`
        width: 80%;
    `}
    ${media.desktop`
        width: 60%;
    `}
`

function Home({ match, location, children, ...props }) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Home;
