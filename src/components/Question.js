import React from 'react'


export const Question = (props) => {
    console.log(props)
    const {question} = props

    return (
        <div className ="question-text" >
            <h2 className="quiz-font">{question}</h2>
        </div>
    )
}
