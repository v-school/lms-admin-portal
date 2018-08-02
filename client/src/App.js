import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import { connect } from "riddl-js";

import { Div } from "./elements";

class App extends Component {
    componentDidMount() {
        //get auth status
        //get data
    }

    // initialize method
    // 

    render() {
        //if authenticated, then render data screen
        //otherwise render login page
        return (
            <Div>
            </Div>
        )
    }
}

export default connect(App);
