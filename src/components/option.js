import React, {useContext} from 'react'
import Context from './../context'

const Option = (props) => {
    let ctx = useContext(Context)

    function checkIfCorrect(clicked){
        let ctxCopy = JSON.parse(JSON.stringify(ctx.state))
        let correct = ctx.state.questions[ctx.state.currentQ].correct

        if(clicked.id == correct){
            console.log('elo')
            ctxCopy.points++ 
            ctxCopy.currentQ++
        }

        console.log(ctxCopy.points)

        ctx.updateState(ctxCopy)
    }

    function handleClick(e) {
        checkIfCorrect(e.target)
        //console.log(ctx)
    }

    return (
        <h1 id={props.id} onClick={handleClick} className="option">{ctx.state.questions[ctx.state.currentQ].answers[props.id]}</h1>
    )
}

export default Option