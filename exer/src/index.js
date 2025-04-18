import React from 'react'
import ReactDOM from 'react-dom'
import FirstComp from './components/FirstComp'
import { CompA, CompB } from './components/Two'
const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <FirstComp/>
        <CompA valor="ASD"/>
        <CompB valor="BSD"/>
    </div>, elemento)
