import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (<div>
            <h1>Welcome</h1>
            <div className="container">
                Welcome {this.props.match.params.name} you can also manage you todos <Link to ="/todo"><button>click here</button></Link>
            </div></div>
        );
    }
}

export default Welcome;