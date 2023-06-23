import './App.css';
import Task from './components/Task';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className='task-list-main'>
        <h1>Tasks</h1>
        <Form />
        <Task
          text='Task 1'
          completed={false} />
      </div>
    </div>
  );
}

export default App;
