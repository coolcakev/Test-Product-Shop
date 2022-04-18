import React from 'react'
import style from './Loader.module.css'
export default function Loader() {
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
      <div className={style.loader}>

      </div>
    </div>

  )
}
