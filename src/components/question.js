import React, { useContext } from 'react'
import Context from './../context'

const Question = () => {
    
    let ctx = useContext(Context)

    return (
        <div id="question">{ctx.state.questions[ctx.state.currentQ].content}</div>
    )
}

export default Question