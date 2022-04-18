import React from 'react'
import DateHelper from '../helpers/dateHelpers'

export default function ViewProduct(props) {
    return (
        <div>
            <h2>Title</h2>
            <h3>{props.title}</h3>
            <h2>Description</h2>
            <p>{props.description}</p>
            <h2>Price</h2>
            <p>{props.price}</p>
            <h2>CreationDate</h2>
            <p>{props.creationDate}</p>
        </div>
    )
}
