import React from "react";

class EventBinding extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //         buttonText: "Enter",
    //     });
    // }

    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
        console.log(this)
    }
    
    render() {
    return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting} Your name is {this.props.name}.</h1>
            {/*one way to bind the event
            {/* <button onClick={() => this.handleClick()} >{this.state.buttonText }</button> */}
             {/* <button onClick={this.handleClick.bind(this)} >{this.state.buttonText }</button> */}
            <button onClick={this.handleClick} >{this.state.buttonText }</button>
        </div>
    )
}
}

export default EventBinding;