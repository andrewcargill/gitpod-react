import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCycleCDUChild';

export class LifeCyleCDU extends Component {
    constructor(props) {
        console.log("constructor called");
      super(props)
    
      this.state = {
         greeting: "Hello!"
      }
    }

    updateGreeting = () => {
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Goodbye!' ? 'Hello!' : 'Goodbye!'
            }
        })
    }

    componentDidUpdate() {
        console.log("component did update")
    }
  render() {
    console.log("page rendered")
    return (
        <div>
            <h2>
            {this.state.greeting}
            </h2>
            <button onClick={this.updateGreeting}>UpdateGreeting</button>
            <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
        </div>
    )
  }
}

export default LifeCyleCDU