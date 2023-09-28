import React from 'react'
import "./style.css"

const Button = ({text, onClick}) => {
  return (
    <div className='button-add'>
        <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button