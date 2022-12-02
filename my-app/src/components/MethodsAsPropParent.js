import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this.state.isLoggedIn)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this.state.isLoggedIn)
    }

    render() {
        return (
            <div>
                 <button onClick={()=> this.handleClick()}>Login</button>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn} 
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                    />
            </div>
        )
    }
}

export default MethodsAsPropsParent