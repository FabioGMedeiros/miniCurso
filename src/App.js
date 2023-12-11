import logo from './logo.svg';
import './App.css';
import Componente from './component/component1/Componente';
import Count from './component/count/Count';
import Form from './component/form/Form';
import FormDataDisplay from './component/form/FormDataDisplay';
import { useState } from 'react';


function App() {
  const [submittedData, setSubimittedData] = useState();

  const handleFormSubmit = (formData) =>{
    setSubimittedData(formData)
  }
  return (
    <div className="App">
      <Componente name={'Fábio'}/>
      <Count valorInicial={0} incrementValue={5} decrementValue={-1}/>
      <Form onSubimit={handleFormSubmit} />
      {submittedData && <FormDataDisplay formData={submittedData} /> }
    </div>
  );
}

export default App;
