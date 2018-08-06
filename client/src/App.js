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
import H1 from "./atoms/H1";
import H3 from "./atoms/H3";
import Select from "./atoms/Select";
import NavLink from "./atoms/NavLink";
import Icon from "./atoms/Icon";

//MOLECULES
import Logo from "./molecules/Logo";
import FormDisplay from "./molecules/FormDisplay";

//ORGANISMS
import Panel from "./organisms/Panel";
import Nav from "./organisms/Nav";
import Menu from "./organisms/Menu";
import Modal from "./organisms/Modal";

//PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";

//CONTAINERS
import { FormContainer, Toggler } from "atom-lib";
import Clipboard from "./containers/Clipboard";

//STATE
import { connect } from "riddl-js";

//TRANSMITERS
import { login, logout, authenticate } from "./riddl/auth";
import { getSubmissions } from "./riddl/submissions";

class App extends Component {
    componentDidMount() {
        this.props.authenticate().then(() => this.props.getSubmissions());
    }
    render() {
        const { auth, submissions } = this.props;
        return (
            auth.loading ?
                <Modal>
                    loading
                </Modal>
                :
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
                                                {auth.err ? <P err>{auth.err}</P> : <P>V School LMS Admin</P>}
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
                                <H1>Submissions</H1>
                                <Menu grid flex>
                                    <Button flex>Show All</Button>
                                    <Button flex>Recent</Button>
                                    <Button flex>Oldest</Button>
                                    <Button flex>Submitted</Button>
                                    <Button flex>Completed</Button>
                                </Menu>
                                <H3 gridArea="ass">Assignment</H3>
                                <H3 gridArea="url">Github</H3>
                                <H3 gridArea="status">Status</H3>
                                <H3 gridArea="student">Student</H3>
                                {submissions.loading ?
                                    <P grid>Waiting for student submissions</P> :
                                    submissions.data.map((submission, i) => (
                                            <Fragment key={submission._id}>
                                                <P hasIcon completed={submission.completed} table gridColumn="1">{submission.assignmentName}</P>
                                                <Clipboard url={submission.githubUrl} render={({ input, handleClick }) => (
                                                    <P hasIcon onClick={handleClick}completed={submission.completed} table gridColumn="2">&#x2398; {input}</P>
                                                )} />
                                                <P hasIcon completed={submission.completed} table gridColumn="3">{submission.completed ? "&#10003;".replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec)) : "X"}</P>
                                                <P hasIcon completed={submission.completed} table gridColumn="4">{submission.student.name}</P>
                                            </Fragment>
                                    ))
                                }
                            </Home> :
                            <Redirect to="/" />
                    )} />
                    {/* student */}
                </Switch>
        )
    }
}

export default connect(App, null, { login, logout, authenticate, getSubmissions });
