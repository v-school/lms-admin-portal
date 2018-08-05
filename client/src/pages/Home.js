import React from 'react';
import styled, { colors } from "../styles";

const Div = styled.div`
    display: grid;
    width: 100%;
    background-color: ${colors.primary.light};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas : 
        "nav nav nav nav" 
        "hdr hdr hdr hdr"
        "menu menu menu menu"
        "date url status student"; 
`

function Home({ match, location, children, ...props }) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Home;
