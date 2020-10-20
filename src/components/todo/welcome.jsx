import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../todo/helloWorldService'
class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: ''
        }

    }
    welcomeMessagehandle = () => {
        HelloWorldService.executeHelloworldService(this.props.match.params.name)
            .then(Response => (this.welcomeMessageResponse(Response)))
            .catch(error => this.welcomeMessageError(error))
    }
    welcomeMessageResponse = (Response) => {
        this.setState({ welcomeMessage: Response.data.message })
    }
    welcomeMessageError = (error) => {
        let errorMessage= '';
        if(error.message){
            errorMessage+=error.message
        }
        if(error.response && error.response.data){
            errorMessage+=error.response.data.message
            
        }
        this.setState({ welcomeMessage:errorMessage })
        
    }
    render() {
        return (<div>
            <h1>Welcome</h1>
            <div className="container">
                Welcome {this.props.match.params.name}
                you can also manage you todos <Link to="/todo"><button>click here</button></Link>
            </div>

            <div className="container">
                Welcome from api
                <button onClick={this.welcomeMessagehandle} className="btn btn-success"> Welcome</button>  </div>
            <div className="container" >
                {this.state.welcomeMessage}
            </div>

        </div>


        );
    }
}

export default Welcome;