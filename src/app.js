import React from 'react'
import ReactDOM from 'react-dom'
import { gsap } from 'gsap'

import './style.scss'
import Header from './components/header'
import Question from './components/question'
import Option from './components/option'

const App = () => {

    return (
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
    )
}

ReactDOM.render(<App />, document.getElementById('App'))