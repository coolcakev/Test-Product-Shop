import React from 'react'

export default function Myselect({options,...props}) {
  return (
    <select {...props}  >
        <option disabled value="">Default</option> 
        {options.map(option=>{
            return <option key={option.value} value={option.value}>{option.name}</option>              
        })}
    </select>
  )
}
