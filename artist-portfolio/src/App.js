import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div id="home"></div>
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
