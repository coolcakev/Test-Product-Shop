import React from 'react'
import DateHelper from '../helpers/dateHelpers'
import MyButton from './UI/Button/MyButton'

export default function ProductItem(props) {

     let styleForButton={
         
     }
    return (
        <div>
            <div className="product">
                <div className="product_content">
                    <strong>{props.number}. {props.title}</strong>
                    <div>
                       {props.description}
                    </div>
                    <div>
                        { props.price}
                    </div>
                    <div>
                        { props.creationDate}
                    </div>
                </div>

                <div className="product_btn">
                    <MyButton  onClick={()=>props.updateModalOpen(props.id)}>Update</MyButton>
                    <MyButton  onClick={()=>props.viewModalOpen({...props})}>View</MyButton>
                    <MyButton  onClick={props.deleteProduct}>delete</MyButton>
                </div>

            </div>
        </div>
    )
}
