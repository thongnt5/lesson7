import React from 'react'
import "./style.css"

const Input = ({value, onChange}) => {
  return (
    <div className='input-text'>
        <input 
          placeholder='Enter new task'
          value={value}
          onChange={(e) =>onChange(e)}
        
        />
    </div>
  )
}

export default Input