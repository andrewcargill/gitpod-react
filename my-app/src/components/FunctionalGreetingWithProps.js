import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello From React</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello {props.greeting} Your name is {props.name} and you are {props.age}</h1> ;
}

export default FunctionalGreetingWithProps

// default means that we can import is as another name