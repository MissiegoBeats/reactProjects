import './styles/App.css';
import { useRef } from 'react';
import image from './images/img.png';
import image2 from './images/img2.png';

function App() {

  const change = 23.16;
  const numberHolder = useRef('number-holder');
  var changed = false;

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

  function changeImg(j) {
    if (changed) {
      j.target.src = image;
      changed = false;
    } else {
      j.target.src = image2;
      changed = true;
    }
  }

  function readChange(k) {
    numberHolder.current.innerHTML = k.target.value;
    if(k.target.value === "") {
      numberHolder.current.innerHTML = 1;
    }
  }

  return (
    <div className="App">
      <div ref={numberHolder} className="number-holder" onClick={increment}>
        1
      </div>
      <div>
        <button onClick={convert}>Convert</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <img src={image} height={200} width={200} onClick={changeImg} />
      </div>
      <input type="text" placeholder="Enter your name" onChange={readChange}/>
    </div>
  );
}

export default App;
