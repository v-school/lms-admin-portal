import React from 'react';
import styled, {colors} from "../styles";

const Div = styled.div`
    display: grid;
    background-color: ${colors.primary.light};
`

function Home({match, location, children, ...props}) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Home;
