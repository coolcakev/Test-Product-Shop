import React from 'react'
import { Form } from 'react-bootstrap'
import style from './MyInput.module.css'
export default function MyInput({classNameElement,...props}) {
  let className = style.myInput
  if (classNameElement !== undefined) {
    className += " " + classNameElement
  }
  return (
   
     <Form.Control          
    {...props}
            className={className}        
          />  
    // <input className={className} {...props} />
  )
}
