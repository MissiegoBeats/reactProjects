import './App.css';
import Button from './components/Button.js';
import Screen from './components/Screen.js';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addToInput = val => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput('');
  };

  const processOperation = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("You must introduce some mathematical expression");
    }
  };

  return (
    <div className="App">
      <div className='calculator-container'>      
        <div className='row'>
          <Screen
            input = { input }
          />
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={processOperation}>=</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClick={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
