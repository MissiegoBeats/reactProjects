import './styles/App.css';
import { useRef } from 'react';

function App() {

  const change = 23.16;
  const numberHolder = useRef('number-holder');

  function increment(e) {
    e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
    e.target.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  }

  function convert() {
    var newNumber = numberHolder.current.innerHTML * change;
    numberHolder.current.innerHTML = newNumber;
  }

  function reset() {
    numberHolder.current.innerHTML = 1;
    numberHolder.current.style.backgroundColor = "#fff";
  }

  return (
    <div className="App">
      <div ref={numberHolder} className="number-holder" onClick={increment}>
        1
      </div>
      <button onClick={convert}>Convert</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
