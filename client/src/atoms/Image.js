import React from 'react';
import styled from "../styles";
import logo from "../assets/images/vschool logo.png";

const Div = styled.div`
    background-image: url("${logo}");
    height: 100%;
    opacity: .7;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

function Image(props) {
    return (
        <Div {...props} />
    )
}

export default Image;
