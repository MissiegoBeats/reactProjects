import './styles/App.css';
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("Jab")
  
  function changeName() {
    if (name === "Job") {
      setName("Jab")
    } else {
      setName("Job")
    }
  }

  return (
    <div className="App">
      <h1>My name is: {name}</h1>
      <button onClick={changeName}>Alternate name</button>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
