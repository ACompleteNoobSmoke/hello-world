import React, { Component } from 'react';

class ClassClicked extends Component {
    clickHandler(){
        console.log('Click The Gosh Darn Button');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}

export default ClassClicked;