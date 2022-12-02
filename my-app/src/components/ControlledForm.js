import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        category: '',
        comments: ''
      }
    }
//React is handling the input field - by updating the state.name 
    // handleNameChange = (event) => {
    //     let newValue = event.target.value
    //     console.log(newValue)
    //     this.setState({
    //         name: newValue
    //     })
    // }

    // Shorter way of doing the above
    // Individual handlers
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }



    render() {
        return (
        <div>
            <h2>Please fill out the form below</h2>
            <form action="">
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input value={this.state.name}
                        onChange={this.handleNameChange}
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select value={this.state.category}
                        onChange={this.handleCategoryChange}
                        name="category" 
                        id="id-category"
                    >
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments: </label>
                    <textarea value={this.state.comments}
                        onChange={this.handleCommentsChange}
                        name="comments" 
                        id="id-comments" 
                        cols="30" rows="10"
                        ></textarea>
                </div>
                <input type="submit" value="submit" />
            </form>
            <h5>Printing out state.name to show whats going on</h5>
            <h1>{this.state.name}</h1>
        </div>
        )
    }
    }

export default ControlledForm