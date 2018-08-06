import React, { Component } from 'react';
import styled, {media} from "../styles";

const Input = styled.input`
    position: absolute;
    opacity: 0;
    ${media.tabletHoriz`
        position: relative;
        opacity: 1;
    `}
`

export default class Clipboard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.input.select();
        document.execCommand("copy");
        this.input.blur();
        alert("Copied!");
        window.open("https://codesandbox.io", "_blank");

    }
    render() {
        const { render, url } = this.props;
        const input = <Input innerRef={ref => this.input = ref} value={url} readOnly />
        return render({ input, handleClick: this.handleClick })
    }
}
