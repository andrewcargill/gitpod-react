import React from "react";

class StatefulGreeting extends React.Component {
    render() {
    return <h1>Hello from me {this.props.greeting}. Your name is {this.props.name}</h1>
}
}

export default StatefulGreeting;