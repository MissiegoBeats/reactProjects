import './App.css';
import TaskList from './components/TaskList.js';

function App() {
  return (
    <div className="App">
      <div className='task-list-main'>
        <h1>Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
