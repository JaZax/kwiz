import React, { useContext } from 'react'
import Context from './../context'

class Option extends React.Component {

    constructor(props){
        super(props)

        this.elRef = React.createRef()
    }

    componentDidMount(){
        this.elRef.current.addEventListener('click', ()=>{
            console.log('elo')
        })
    }

    componentWillUnmount(){
        this.elRef.current.removeEventListener('click', null)
    }

    render() {
        return (
          <Context.Consumer>
            {(ctx) => {
                return <h1 className="option" ref={this.elRef}>{ctx.questions[1].answers[this.props.id]}</h1>
            }}
          </Context.Consumer>
        )
      }
}

export default Option