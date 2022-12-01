import React from "react";

class StatefulGreetingWithCallBack extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            introduction: "Hello!",
            buttonText: "Exit",
        }; 
    }

    // setState is 'asynchronous' (meaning it may execute in the background - and other code
    // may update before this is complete).
    
    // Pass a 'callback function' to the setState method - which will guarantee to always
    // executed after the state update is complete.

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, ()=>{
        console.log('------------new state', this.state.introduction);
        console.log('------------new state', this.state.buttonText);
        
        });
        console.log('------------old state', this.state.introduction);
        console.log('------------old state', this.state.buttonText);
        
    }
    
    render() {
    return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}. Your name is {this.props.name}.</h1>
            <button onClick={() => this.handleClick()} >{this.state.buttonText }</button>
        </div>
    )
}
}

export default StatefulGreetingWithCallBack;