import React, { Component } from 'react'
import '../../bootstarp.css'
import AuthService from './authService.js'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginSuccess: false,
            loginFailed: false,
        }
    }
    Change = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    submit = () => {
        // if (this.state.username === "vignesh" && this.state.password === "123") {
        //     AuthService.registerUser(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`);
        // }
        // else {
        //     this.setState({ loginSuccess: false });
        //     this.setState({ loginFailed: true });
        // }
        AuthService.basicAuthService(this.state.username, this.state.password)
        .then(() => {
                AuthService.registerUser(this.state.username, this.state.password)
                this.props.history.push(`/welcome/${this.state.username}`);
            }).catch(() => {
                this.setState({ loginSuccess: false });
                this.setState({ loginFailed: true });
            }
            )

    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.loginFailed && <div className="alert alert-warning">Login Failed</div>}
                    Username: <input type="text" name="username" onChange={this.Change} value={this.state.username}></input>
                    Password: <input type="password" name="password" onChange={this.Change} value={this.state.password}></input>
                    <button className="btn btn=s" onClick={this.submit}>Login</button>
                </div> </div>
        );
    }
}
export default Login;