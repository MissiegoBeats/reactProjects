import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <div id="home" style={{ top: "-100px", height: "1px", width: "1px" }}></div>
      <Menu />
      <Welcome />
      <div id="about" style={{ position:"relative",top: "-65px", height: "1px", width: "1px" }}></div>
      <About />
      <div class="bg-dark pt-5 w-100 h-100">
        <Contact />
      </div>
    </div>
  );
}

export default App;

