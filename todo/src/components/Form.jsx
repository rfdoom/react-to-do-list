import React, { useState } from 'react'

const Form = (props) => {

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          id='add-task' 
          name='add-task' 
          placeholder='Add a new task...' 
          autoComplete='off'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default Form