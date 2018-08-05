import React, { Component, Fragment } from 'react';

//libraries
import { Switch, Route, Redirect } from "react-router-dom";

//ATOMS
import Image from "./atoms/Image";
import Label from "./atoms/Label";
import Input from "./atoms/Input";
import Button from "./atoms/Button";
import P from "./atoms/P";
import A from "./atoms/A";
import NavLink from "./atoms/NavLink";
import Icon from "./atoms/Icon";

//MOLECULES
import Logo from "./molecules/Logo";
import FormDisplay from "./molecules/FormDisplay";

//ORGANISMS
import Panel from "./organisms/Panel";
import Nav from "./organisms/Nav";
import Menu from "./organisms/Menu";

//PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";

//CONTAINERS
import { FormContainer, Toggler } from "atom-lib";

//STATE
import { connect } from "riddl-js";

//TRANSMITERS
import { login, logout } from "./riddl/auth";

class App extends Component {
    componentDidMount() {
        //get auth status
        //get data
    }

    render() {
        const { auth } = this.props;
        return (
            <Switch>
                <Route exact path="/" render={props => (
                    auth.isAuthenticated ?
                        <Redirect to="/home" /> :
                        <Login {...props}>
                            <Panel>
                                <Logo>
                                    <Image />
                                </Logo>
                                <FormContainer
                                    reset
                                    inputs={{ username: "", password: "" }}
                                    submit={({ inputs }) => this.props.login(inputs).then(() => props.history.push("/home"))}
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
                    auth.isAuthenticated ?
                        <Home {...props}>
                            <Nav>
                                <FormDisplay flex>
                                    <Label>
                                        <Input search id="search" placeholder="&#x26B2;" />
                                    </Label>
                                </FormDisplay>
                                <Menu>
                                    <Toggler render={({ toggled, toggle }) => (
                                        <Fragment>
                                            <Icon onClick={toggle} />
                                            <Panel menu toggled={toggled}>
                                                <NavLink to="/home">Home</NavLink>
                                                <A onClick={this.props.logout}>Logout</A>
                                            </Panel>
                                        </Fragment>
                                    )}></Toggler>
                                </Menu>
                            </Nav>
                            {/* Data list */}
                        </Home> :
                        <Redirect to="/" />
                )} />
                {/* student */}
            </Switch>
        )
    }
}

export default connect(App, null, { login, logout });
