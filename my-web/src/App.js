import './styles/App.css';
import Banner from './components/Banner.js';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="calculator">
        <Calculator />
      </div>
      <div className="calculator-info"><p>This calculator was made with React!!</p></div>
    </div>
  );
}

export default App;
