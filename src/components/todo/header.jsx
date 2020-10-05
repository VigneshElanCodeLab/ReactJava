import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom'
import AuthService from './authService.js'

class Header extends Component{
    render(){
        const userLoggedIn = AuthService.isUserLoggedIn();
        console.log(userLoggedIn);
        return(     
             <header>
            <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                <div className="navbar-brand">Vignesh Todos</div>
                <ul className="navbar-nav">
                  {userLoggedIn &&  <li ><Link className="nav-link" to="/welcome/vignesh">Home</Link></li>}
                  {userLoggedIn &&   <li ><Link className="nav-link" to="/todo">Todos</Link></li>}
                    
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                {!userLoggedIn &&<li ><Link className="nav-link" to="/login">Login</Link></li>}
               {userLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthService.logout}>Logout</Link></li>}

                </ul>
            </nav>

<hr/>
            </header>
            
    );
    }
}
export default withRouter(Header);