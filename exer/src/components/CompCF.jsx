import React from 'react'


export default props => {
    const aprovados = ['JP', 'edk', 'Lpez', 'kkaui']
    
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}