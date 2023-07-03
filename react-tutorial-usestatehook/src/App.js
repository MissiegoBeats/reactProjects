import './styles/App.css';
import React, { useState } from 'react';
import { useRef } from 'react';

function App() {

  const inputHolder = useRef('input-holder');
  const [name, setName] = useState("Jab")
  
  function changeName() {
    if (name === "Job") {
      setName("Anthony")
    } else {
      setName("Job")
    }
    inputHolder.current.value = ""
  }

  return (
    <div className="App">
      <h1>My name is: {name}</h1>
      <button onClick={changeName}>Alternate name</button>
      <div>
        <input ref={inputHolder} type="text" placeholder={"Insert a name"} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
