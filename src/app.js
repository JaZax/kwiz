import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import Context from './context'
import questions from './questions.json'

import './style.scss'
import Question from './components/question'
import Option from './components/option'
import End from './components/end'

// THX https://mindsers.blog/en/updating-react-context-from-consumer/ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const App = () => {

    let Questions = JSON.parse(JSON.stringify(questions))
    let addedState = {currentQ : 1, points: 0,}
    let join = {...Questions, ...addedState}

    let qNumber = Object.keys(join).length

    const [state, updateState] = useState(join)
    let end

    if(qNumber + 1 == state.currentQ) {end = <End/>} else {end = null}

    return(
        <Context.Provider value={{state, updateState}}>
            {end}
            <div id="topWrap">
                <Question/>
            </div>
            <div id="optionWrap">
                <Option id="1"/>
                <Option id="2"/>
                <Option id="3"/>
                <Option id="4"/>                       
            </div>
        </Context.Provider>
    )

}

ReactDOM.render(<App />, document.getElementById('App'))