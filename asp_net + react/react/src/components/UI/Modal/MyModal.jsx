import React from 'react'
import style from './MyModal.module.css'

export default function MyModal({ children,visible,setVisible }) {
    let modalCssClass=style.myModal;
    if(visible)    
        modalCssClass+=" "+style.active;

     
    return (
        <div className={modalCssClass} onClick={()=>setVisible(false)}>
            <div className={style.myModalContent} onClick={(event)=> event.stopPropagation()} >
                {children}            
            </div>
        </div>
    )
}
