import React, { Component } from "react";

export class EventsClass extends Component {
    clickHandler() {
        console.log("Class Button Clicked")
    }

  render () {
    return (
        <div>
            <button onClick={this.clickHandler}>Click me - Class Component</button>
        </div>
    )
  }

}

export default EventsClass;
