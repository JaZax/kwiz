import React, { useContext } from 'react'
import Context from './../context'

const Question = () => {
    
    let ctx = useContext(Context)
    let qNumber = Object.keys(ctx).length
    let question

    if(qNumber + 1 != ctx.state.currentQ) {
        question = <div id="question">{ctx.state.questions[ctx.state.currentQ].content}</div>
    } else {question = null}

    return (
       question
    )
}

export default Question