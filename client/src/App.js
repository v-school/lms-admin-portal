import React, { Component } from 'react';

//libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";

//ATOMS
import Image from "./atoms/Image";
import Label from "./atoms/Label";
import Input from "./atoms/Input";
import Button from "./atoms/Button";

//MOLECULES
import Logo from "./molecules/Logo";
import FormDisplay from "./molecules/FormDisplay";

//ORGANISMS
import Panel from "./organisms/Panel";

//PAGES
import Login from "./pages/Login";

//state
import { connect } from "riddl-js";

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
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={props => (
                        <Login {...props}>
                            <Panel>
                                <Logo>
                                    <Image />
                                </Logo>
                                <FormDisplay>
                                    <Label content={"@"}>
                                        <Input placeholder="username" />
                                    </Label>
                                    <Label content={"#"}>
                                        <Input placeholder="password" />
                                    </Label>
                                    <Button>Log In</Button>
                                </FormDisplay>
                            </Panel>
                        </Login>
                    )} />
                    {/* home */}
                    {/* student */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(App);
