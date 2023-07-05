import './styles/App.css';
import Banner from './components/Banner.js';
import Calculator from './components/Calculator';
import ContactInfo from './components/ContactInfo';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App" class=" bg-dark">
      <div id="home-div" style={{ top: "-100px", backgroundColor:"transparent", height:"10px", width:"10px"}}></div>
      <Banner />
      <div className="calculator">
        <Calculator />
      </div>
      <div className="calculator-info"><p>This calculator was made with React!!</p></div>
      <Videos />
      <div className="contact-info" id="contact-div">
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
