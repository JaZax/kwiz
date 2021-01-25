import React, {useContext} from 'react'
import Context from './../context'

const Option = (props) => {
    let ctx = useContext(Context)

    function handleClick() {
        let ctxCopy = JSON.parse(JSON.stringify(ctx.state))
        ctxCopy.currentQ = 2
        ctx.updateState(ctxCopy)
        console.log(ctx)
    }

    console.log(ctx.state.questions[ctx.state.currentQ].answers[props.id])

    return (
        <h1 onClick={handleClick} className="option">{ctx.state.questions[ctx.state.currentQ].answers[props.id]}</h1>
    )
}

export default Option