import React, { useContext } from 'react'
import Context from './../context'

const Option = (props) => {

    let ctx = useContext(Context)

    console.log(ctx.questions[1].answers[props.id])

    return (
        <div className="option">{ctx.questions[1].answers[props.id]}</div>
    )
}

export default Option