import React, { useState } from 'react'

const ToDo = (props) => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [newText, setNewText] = useState('')

  const handleChange = (e) => {
    setNewText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.editTask(props.id, newText)
    setNewText('')
    setIsEditMode(false)
  }

  const normalMode = (
    <li>
      <div>
        <input 
          id='test' 
          type='checkbox' 
          defaultChecked={props.completed}
          onChange={() => props.toggleComplete(props.id)}
        />
        <label htmlFor='test'>
          {props.text}
        </label>
      </div>
      <div>
        <button type='button' onClick={() => setIsEditMode(true)}>
          Edit {props.text}
        </button>
        <button type='button' onClick={() => props.deleteTask(props.id)}>
          Delete {props.text}
        </button>
      </div>
    </li>
  )

  const editMode = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>
          Edit Task '{props.text}'':
        </label>
        <input id={props.id} type='text' value={newText} onChange={handleChange}/>
      </div>
      <div>
        <button type='button' onClick={() => setIsEditMode(false)}>Cancel</button>
        <button type='submit'>Save {props.newText}</button>
      </div>
    </form>
  )

  return <div>{isEditMode ? editMode : normalMode}</div>;
}

export default ToDo