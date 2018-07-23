import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render(){
        return(
            <button>{this.props.button_text}</button>
        )
    }
}

export default QuizQuestionButton