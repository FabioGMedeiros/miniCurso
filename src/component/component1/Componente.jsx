import React from 'react'
import './Componente.css'

const Componente = (props) =>{
    return (
        <div className='Comp'> Hello World! {props.name}</div>
    )
}

export default Componente