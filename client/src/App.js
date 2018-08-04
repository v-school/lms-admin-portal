import React, { Component } from 'react';

//libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";

//ATOMS
import Image from "./atoms/Image";
import Label from "./atoms/Label";
import Input from "./atoms/Input";
import Button from "./atoms/Button";
import P from "./atoms/P";
import A from "./atoms/A";
import NavLink from "./atoms/NavLink"

//MOLECULES
import Logo from "./molecules/Logo";
import FormDisplay from "./molecules/FormDisplay";

//ORGANISMS
import Panel from "./organisms/Panel";
import Nav from "./organisms/Nav";

//PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";

//CONTAINERS
import { FormContainer } from "atom-lib";

//STATE
import { connect } from "riddl-js";

//TRANSMITERS
import { login } from "./riddl/auth";

class App extends Component {
    componentDidMount() {
        //get auth status
        //get data
    }

    render() {
        const { auth } = this.props;
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
                                <FormContainer
                                    reset
                                    inputs={{ username: "", password: "" }}
                                    submit={({ inputs }) => this.props.login(inputs)}
                                    render={({ inputs, handleChange, handleSubmit }) => (
                                        <FormDisplay onSubmit={handleSubmit}>
                                            <Label htmlFor="username" >
                                                <Input
                                                    id="username"
                                                    onChange={handleChange}
                                                    name="username"
                                                    value={inputs.username}
                                                    placeholder="@" />
                                            </Label>
                                            <Label htmlFor="password">
                                                <Input
                                                    id="password"
                                                    onChange={handleChange}
                                                    name="password"
                                                    value={inputs.password}
                                                    type="password"
                                                    placeholder="#" />
                                            </Label>
                                            <Button type="submit">Log In</Button>
                                            {auth.err ? <P err>{auth.err}</P> : <P>V School LMS - Admin</P>}
                                        </FormDisplay>
                                    )}
                                />
                            </Panel>
                        </Login>
                    )} />
                    <Route path="/home" render={props => (
                        <Home {...props}>
                            <Nav>
                                <FormDisplay flex>
                                    <Label>
                                        <Input id="search" />
                                    </Label>
                                </FormDisplay>
                            </Nav>
                        </Home>
                    )} />
                    {/* student */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(App, null, { login });
