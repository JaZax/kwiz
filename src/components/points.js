import React, { useContext } from 'react'
import Context from './../context'

const Points = () => {
    
    let ctx = useContext(Context)

    return (
        <div id="points">{ctx.state.points}</div>
    )
}

export default Points