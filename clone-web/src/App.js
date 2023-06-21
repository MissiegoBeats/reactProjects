import './App.css';
import { Testimony } from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Esto es una web de ejemplo</h1>
        <Testimony
          name='Joe'
          country='EEUU'
          job='CEO'
          image='cliff'
          company='Vetco'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. At augue eget arcu dictum varius duis at consectetur.' />
        <Testimony
          name='Rose'
          country='Suecia'
          job='Ingeniero de SW'
          image='house'
          company='Spotify'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. At augue eget arcu dictum varius duis at consectetur.' />
        <Testimony
          name='Anthony'
          country='Russia'
          job='CEO'
          image='road'
          company='Yandex'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. At augue eget arcu dictum varius duis at consectetur.'/>
      </div>
    </div>
  );
}

export default App;
