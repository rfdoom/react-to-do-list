import React from 'react'

const ToDo = (props) => {
  return (
    <li>
      <div>
        <input id='test' type='checkbox' defaultChecked={props.completed} />
        <label htmlFor='test'>
          {props.name}
        </label>
      </div>
      <div>
        <button type='button'>
          Edit {props.name}
        </button>
        <button type='button'>
          Delete {props.name}
        </button>
      </div>
    </li>
  )
}

export default ToDo