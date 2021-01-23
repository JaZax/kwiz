import React, { useContext } from 'react'
import Context from './../context'

const Question = () => {
    
    let ctx = useContext(Context)

    return (
        <h1 className="placeholder">{ctx.questions[1].content}</h1>
    )
}

export default Question