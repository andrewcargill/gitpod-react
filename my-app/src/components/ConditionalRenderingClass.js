import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true
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
        </div>

        </div>
    )
  }
}

export default ConditionalRenderingClass