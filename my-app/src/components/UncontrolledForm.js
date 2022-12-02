import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value, 
            this.inputCategory.current.value, 
            this.inputComments.current.value)
    }

    render() {
        return (
        <div>
            <h2>Please fill out the form below</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                        id="id-name"
                        name="name"
                        type="text"
                        defaultValue="Dave Smith"
                        ref={this.inputName}
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select 
                        name="category" 
                        id="id-category"
                        ref={this.inputCategory}
                    >
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments: </label>
                    <textarea 
                        name="comments" 
                        id="id-comments" 
                        cols="30" rows="10"
                        ref={this.inputComments}
                        ></textarea>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
        )
    }
    }

export default UncontrolledForm