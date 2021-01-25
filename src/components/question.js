import React, { useContext } from 'react'
import Context from './../context'

const Question = () => {
    
    let ctx = useContext(Context)

    console.log(ctx)

    return (
        <div id="question">{ctx.questions[ctx.currentQ].content}</div>
    )
}

export default Question