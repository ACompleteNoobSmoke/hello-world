import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmitChange = event => {
        alert(`${this.state.userName} || ${this.state.password} || ${this.state.topic}`);
        alert(this.state.comments);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmitChange}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={this.state.userName} onChange={this.handleUserNameChange}></input>
                    <br></br>
                    <label>Password</label>
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='angular'>Angular</option>
                        <option value='react'>React</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            
        );
    }
}

export default Form;