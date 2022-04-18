import React, { Children, useEffect } from 'react'
import { Form } from 'react-bootstrap';

export default function ValidComponent(props) {
    let [error, setError] = React.useState([])
    useEffect(()=>{
        setError(props.error)
    },[props.error]);    
    let valid=error.length==0?"is-valid":"is-invalid"
console.log("ValidComponent")
let childrenElement=Children.map(props.children, (child)=>{
    return React.cloneElement(child, {classNameElement:child.props.classNameElement+" "+valid})     
})
console.log(childrenElement)
    return (
        <> 
            {childrenElement}
            <Form.Control.Feedback type={"invalid"}>{error}</Form.Control.Feedback>            
        </>
    )
}
