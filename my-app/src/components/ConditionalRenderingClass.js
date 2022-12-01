import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: false
      }
    }
  render() {
    return (
      <div>
        
        <div>
            ConditionalRenderingClass
        </div>
        <div>
            <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading... '}</h1>
            <h2>{this.state.isLoggedIn ? (
                <div>
                    <p>welcome to the site. Please complete the steps below:</p>
                    <ol>
                        <li>Confirm Email</li>
                        <li>Complete Profile</li>
                        <li>Subscribe to newsletter</li>
                    </ol>
                </div>
            ): (<p>Please Sign In</p> )}</h2>
        </div>

        </div>
    )
  }
}

export default ConditionalRenderingClass