import React from 'react';
import styled from "../styles";

const Div = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

function Login({children, match, location, ...props}) {
    return (
        <Div {...props}>
            {children}
        </Div>
    )
}

export default Login;
