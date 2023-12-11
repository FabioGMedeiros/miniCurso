import React, { useState } from 'react'
import './Count.css'

const Count = (props) => {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState(['Historico'])
  const list = history.map((history) => <p key={history}> {history} </p>)

  function incrementByValue(value) {
    if (count < 10) {
    setCount(count + value);
    setHistory([...history, count])
  } else {console.log('Atingiu o limite de incremento')}
 }
  function decrementByValue(value) {
    if(count > 0) {
    setCount(count + value);
    setHistory([...history, count])
  }else {console.log('Atingiu o limite de decremento')}
  }

  function Increment(){
    if (count < 10) {
    setCount(count + 1);
    setHistory([...history, count])
  } else {console.log('Atingiu o limite de incremento')}
}

  function Reset(){ 
    setCount(props.valorInicial)
    setHistory([...history, 'Reset'])
  }
  
  return(
    <div className='section'>
      <h1>Contator: {count}</h1>
      <button onClick={() => Increment()}>Incrementar</button>
      <button onClick={() => Reset()}>Resetar Contador</button>
      <button onClick={() => incrementByValue(props.incrementValue)}>Incrementar por valor</button>
      <button onClick={() => decrementByValue(props.decrementValue)}>Decrementar por valor</button>
      <div>
        {list}
      </div>
    </div>
  )
}
export default Count