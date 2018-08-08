import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render(){
        const isQuizEnd = null
        var isQuizEnd2 = null
        if ((this.state.quiz_position-1) === quizData.quiz_questions.length) {isQuizEnd2 = true} else {isQuizEnd2 = false}
        return (
            <div>
            { isQuizEnd2 
                ?   
                    <QuizEnd />
                :   
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />
            }
            </div>
            
            // <div>
            // { isQuizEnd 
            //     ?   <div>
            //             <QuizEnd show={isQuizEnd === 'true'} />
            //         </div>
            //     :   <div>
            //             <QuizQuestion show={isQuizEnd === 'false'} quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
            //         </div>
            // }
            // </div>
        )
        // if (isQuizEnd === true) {
        //     return (
        //         <div>
        //             <QuizEnd />
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
        //         </div>
        //     )
        // }
    }
}

export default Quiz