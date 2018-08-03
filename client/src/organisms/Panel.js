import React from 'react';
import styled from "../styles";

const Div = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 15%;
`

function Panel({children, ...props}) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Panel;
