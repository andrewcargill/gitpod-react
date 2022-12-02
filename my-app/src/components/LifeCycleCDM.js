import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild';

export class LifeCycleCDM extends Component {
    constructor(props) {
        console.log('Parent - constructor called');
      super(props)
    
      this.state = {
         data: 'loading'
      }
    }
    getData() {
        console.log("Parent - getData()")
        setTimeout(() => {
            console.log("Parent - setTimeout");
            this.setState({
                data: 'loaded'
            })
        }, 2000)
    }

    componentDidMount() {
        console.log("Parent - componentDidMount()")
        this.getData()
    }
  render() {
    console.log("Parent - page rendered");
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild />
      </div>
    )
  }
}

export default LifeCycleCDM