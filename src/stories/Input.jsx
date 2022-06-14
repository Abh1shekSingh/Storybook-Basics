import React from 'react'
import "./input.css"
function Input(props) {
    const {variant="small",placeholder,...rest} = props
  return (
    <input className={`input ${variant}`}{...rest} placeholder={placeholder}></input>
  )
}

export default Input