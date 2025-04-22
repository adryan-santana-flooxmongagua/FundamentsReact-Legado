import React from 'react'
import ReactDOM from 'react-dom'
import FirstComp from './components/FirstComp'
import { CompA, CompB as B } from './components/Two'
import Mult from './components/Mult'
import FamilySS from './components/FamilySS'
import Family from './components/family'
import Member from './components/Member'
import CompCF from './components/CompCF'
import Father from './components/Father'
import CompSC from './components/CompSC'
import Contador from './components/Cont'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <FirstComp/>
        <CompA valor="ASD"/>
        <B valor="BSD"/>
        <Mult />
        <FamilySS/>
        <Family sobrenome="SLopez">
            <Member nome="Ander" />
        </Family>
        <CompCF/>
        <Father/>
        <CompSC valor="Sou uno hombre programmer" />
        <Contador numero={0}/>
    </div>, elemento)

