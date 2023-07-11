import './Principal.css'
import React, { Fragment } from 'react'
import Cabecalho from './Cabecalho'


export default propriedades =>
//Como colocaremos o conteúdo dentro de
//outro JSX, exportaremos apenas um fragmento de componente,
//e não o componente inteiro.
//Saiba mais em : https://evertonstrack.com.br/react-fragment/
<React.Fragment>
    <Cabecalho></Cabecalho>
    <main className='content'>
        Conteúdo.
    </main>

</React.Fragment>
