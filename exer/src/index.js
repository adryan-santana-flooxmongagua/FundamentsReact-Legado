import React from 'react'
import ReactDOM from 'react-dom'
import FirstComp from './components/FirstComp'
import { CompA, CompB as B } from './components/Two'
import Mult from './components/Mult'
import FamilySS from './components/FamilySS'
import Family from './components/family'
import Member from './components/Member'
import CompCF from './components/CompCF'

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
    </div>, elemento)

