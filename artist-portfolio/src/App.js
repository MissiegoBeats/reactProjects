import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div id="home" style={{top:"-100px", height:"1px", width:"1px"}}></div>
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default App;
