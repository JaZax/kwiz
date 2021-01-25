import React, { useContext } from 'react'
import Context from './../context'

class Option extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
          <Context.Consumer>
            {(ctx) => {
                return <h1 id="option">{ctx.questions[1].answers[this.props.id]}</h1>
            }}
          </Context.Consumer>
        )
      }
}

export default Option