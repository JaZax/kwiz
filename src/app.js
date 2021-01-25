import React from 'react'
import ReactDOM from 'react-dom'

import Context from './context'
import questions from './questions.json'

import './style.scss'
import Header from './components/header'
import Question from './components/question'
import Option from './components/option'

class App extends React.Component {
    constructor(props){
        super(props)

        this.questions = JSON.parse(JSON.stringify(questions))
        this.addedState = {currentQ : 3}

        this.state = {...this.questions, ...this.addedState}
        
    }

    render() {

        console.log(this.state)

        return (
            <Context.Provider value={this.state}>
             
                <div className="App" >
                <Header />
                    <div id="wrap">
                        <Question/>
                        <div id="optionWrap">
                            <Option id="1"/>
                            <Option id="2"/>
                            <Option id="3"/>
                            <Option id="4"/>
                        </div>
                    </div>
                </div>
            </Context.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))