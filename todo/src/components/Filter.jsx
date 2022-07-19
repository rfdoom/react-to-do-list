import React from 'react'

const Filter = (props) => {
  return (
    <div>
      <button 
        type='button' 
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
      Show {props.name} tasks
      </button>
    </div>
  )
}

export default Filter