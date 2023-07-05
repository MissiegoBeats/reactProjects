import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div id="home"></div>
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default App;
