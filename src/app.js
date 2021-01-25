import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import Context from './context'
import questions from './questions.json'

import './style.scss'
import Header from './components/header'
import Question from './components/question'
import Option from './components/option'

// THX https://mindsers.blog/en/updating-react-context-from-consumer/ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const App = () => {

    let Questions = JSON.parse(JSON.stringify(questions))
    let addedState = {currentQ : 1}
    let join = {...Questions, ...addedState}

    const [state, updateState] = useState(join)

    return(
        <Context.Provider value={{state, updateState}}>
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

ReactDOM.render(<App />, document.getElementById('App'))