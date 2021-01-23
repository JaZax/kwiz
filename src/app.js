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

        this.state = JSON.parse(JSON.stringify(questions))
    }

    render() {

        console.log(this.state)

        return (
            <Context.Provider value={this.state}>
                <div className="App" >
                    <Header />
                    <Question/>
                    <div id="optionWrap">
                        <Option/>
                        <Option/>
                        <Option/>
                        <Option/>
                    </div>
                </div>
            </Context.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))