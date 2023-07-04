import './styles/App.css';
import Banner from './components/Banner.js';
import Calculator from './components/Calculator';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="calculator">
        <Calculator />
      </div>
      <div className="calculator-info"><p>This calculator was made with React!!</p></div>
      <div className="contact-info" id="contact-div">
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
