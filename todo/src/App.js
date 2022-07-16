import './App.css';
import { useRef } from 'react'
import ToDo from './components/ToDo';

function App(props) {

  const current = new Date();
  const today = `${current.toLocaleString('en-US', {weekday: 'long'})}, ${current.toLocaleString('en-US', {month: 'long'})} ${current.getDate()}, ${current.getFullYear()}`;

  const form = useRef();
 
  console.log(props.tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className='App'>
      <div>
        <h1>Tasks for {today}</h1>
      </div>
      <section>
        <div>
          <form ref={form} onSubmit={handleSubmit}>
            <input type='text' name='add-task' placeholder='Add a new task...' autoComplete='off'/>
            <button type='submit'>Add Task</button>
          </form>
        </div>
        <div>
          <button type='button' aria-pressed='true'>Show all tasks</button>
          <button type='button' aria-pressed='false'>Show active tasks</button>
          <button type='button' aria-pressed='false'>Show completed tasks</button>
        </div>
        <div>
          
        </div>
      </section>
      <div>
        <ul>
          <ToDo name={props.tasks[0].text} completed={props.tasks[0].completed}/>
          <ToDo name={props.tasks[1].text} completed={props.tasks[1].completed}/>
          <ToDo name={props.tasks[2].text} completed={props.tasks[2].completed}/>
        </ul>
      </div>
    </div>
  );
}

export default App;
