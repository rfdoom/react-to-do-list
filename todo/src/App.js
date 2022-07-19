import './App.css';
import React, { useState } from 'react'
import ToDo from './components/ToDo';
import Filter from './components/Filter';
import Form from './components/Form';
import { nanoid } from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_KEYS = Object.keys(FILTER_MAP);



function App(props) {

  // To get the date
  const current = new Date();
  const today = `${current.toLocaleString('en-US', {weekday: 'long'})}, ${current.toLocaleString('en-US', {month: 'long'})} ${current.getDate()}, ${current.getFullYear()}`;

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  // For the checkbox to toggle if it's complete or not
  const toggleComplete = (id) => {
    const updateIt = tasks.map(task => {
      if (id === task.id) {
        // object spread makes a new object with existing data and the changes
        return {...task, completed: !tasks.completed};
      };
      return task;
    })
    setTasks(updateIt);
  }

  const editTask = (id, newText) => {
    const editIt = tasks.map(task => {
      if (id === task.id) {
        return {...task, text: newText};
      }
      return task;
    })
    setTasks(editIt);
  }

  const deleteTask = (id) => {
    const deleteIt = tasks.filter(task => id !== task.id);
    setTasks(deleteIt);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <ToDo
      text={task.text}
      id={task.id}
      key={task.id} 
      completed={task.completed}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    ));

  const filterList = FILTER_KEYS.map(name => (
    <Filter 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const headerCount = `${taskList.length} tasks remaining.`

  const addTask = (text) => {
    const newTask = {id: nanoid(), text: text, completed:false};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className='App'>
      <div>
        <h1>Tasks for {today}</h1>
        <h3>{headerCount}</h3>
      </div>
      <Form addTask={addTask}/>
      <div>
        {filterList}
      </div>
      <div>
        <ul>
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
