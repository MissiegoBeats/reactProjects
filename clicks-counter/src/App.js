import './App.css';
import Button from './components/Button';

function App() {
  
  const addClick = () => {
    console.log('handleClick()');
  };

  const resetCounter = () =>{
    console.log('resetCounter()');
  };

  return (
    <div className="App">
      <div className="counter-container">
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
