import React, { useContext } from 'react'
import Context from './../context'

const Question = () => {
    
    let ctx = useContext(Context)

    return (
        <h1>{ctx.state.questions[ctx.state.currentQ].content}</h1>
    )
}

export default Question