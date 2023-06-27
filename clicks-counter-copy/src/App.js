import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
  }

  addClick = () => {
    this.setState({ numClicks: this.state.numClicks + 1 });
  };

  resetCounter = () => {
    this.setState({ numClicks: 0 });
  };

  render() {
    return (
      <div className="App">
      <div className="counter-container">
        <Counter numClicks = { this.state.numClicks } />
        <Button
          text = 'Click Me'
          isClickButton = {true}
          handleClick = {this.addClick} />
        <Button
          text = 'Reset Counter'
          isClickButton = {false}
          handleClick = {this.resetCounter} />
      </div>
    </div>
    );
  }
}

export default App;
