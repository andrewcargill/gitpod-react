import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        }; 
    }

    // Using a ternary conditional statement to switch between states (this is wrong!)
    // The function should reference the prevState to set its value
    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, ()=>{
    //     console.log('------------new state', this.state.introduction);
    //     console.log('------------new state', this.state.buttonText);
        
    //     });
    //     console.log('------------old state', this.state.introduction);
    //     console.log('------------old state', this.state.buttonText);
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('prev state:', prevState)
            console.log('prev props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }
    
    // basic function for counting
    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count);
    // }

    // function that always looks back at the previous state
    increment() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            }
        })

    }

    render() {
    return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}. Your name is {this.props.name}.</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText }</button>
            <button onClick={() => this.increment()} >CLICK TO COUNT</button>
            <p>You have clicked {this.state.count} times</p>
        </div>
    )
}
}

export default StatefulGreetingWithPrevState;