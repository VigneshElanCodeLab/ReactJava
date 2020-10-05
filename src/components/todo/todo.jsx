import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../../bootstarp.css'
import Header from './header'
import Login from './login'
import AuthRoute from './AuthRoute'
import Todos from './todocomponent'
import Logout from './logout'
import Welcome from './welcome'
import Footer from './footer'
class Todo extends Component {
    render() {
        return (
            <div className="todoApplication">
                <Router > 
                    <Header/>
                    <br/>
                    <Switch>
                   <Route path="/" exact component={Login}/>
                    <Route path="/login" component={Login}/>
                    <AuthRoute path="/welcome/:name" component={Welcome}/>
                    <AuthRoute path="/todo" component={Todos}/>
                    <AuthRoute path="/logout" component={Logout}/>
                    <Route  component={ErrorComponent}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}


function ErrorComponent(){
    return <div>oops...Error</div>
}



export default Todo;