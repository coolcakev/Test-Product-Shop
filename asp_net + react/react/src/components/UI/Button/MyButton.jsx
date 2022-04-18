import React from 'react'
import styleClasses from './MyButton.module.css' 
export default function MyButton({children,...props}) {
  return (
    <button className={styleClasses.myBtn} {...props}>
        {children}
    </button>
  )
}
