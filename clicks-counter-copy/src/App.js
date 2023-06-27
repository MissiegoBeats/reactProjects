import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  
  const [numClicks, setNumClicks] = useState(0);

  const addClick = () => {
    setNumClicks(numClicks + 1)
  };

  const resetCounter = () =>{
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className="counter-container">
        <Counter numClicks = { numClicks } />
        <Button
          text = 'Click Me'
          isClickButton = {true}
          handleClick = {addClick} />
        <Button
          text = 'Reset Counter'
          isClickButton = {false}
          handleClick = {resetCounter} />
      </div>
    </div>
  );
}

export default App;
