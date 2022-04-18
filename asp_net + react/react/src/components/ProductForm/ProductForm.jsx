import React, { useEffect } from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MyInput'
import ValidComponent from './ValidComponent'

export default function ProductForm(props) {
    console.log("props.product")
    console.log(props.product)
    let [product, setProduct] = React.useState({
        title: "",
        description: "",
        price: ""
    })
    let [isValidForm, setIsValidForm] = React.useState(true)
    let [error, setError] = React.useState({
        title: [],
        description: [],
        price: []

    })
    console.log("render ProductForm")
    console.log("product")
    console.log(product)

    function validateTitle(value) {
        let titleError=[]
        if (value == "") {
            titleError.push("Title is empty")
        }
        if (titleError.length != 0 || !isValidForm) {
            setIsValidForm(false);
        } 
        setIsValidForm(true);
        setError({ ...error, title: titleError })     
        return   titleError 
       
    }
    function validateDescription (value) { 
        let deskError = [];
        if (value == "") {
            deskError.push("Description is empty")
        }
        if (deskError.length != 0 || !isValidForm) {
            setIsValidForm(false);
        }
         setIsValidForm(true);
        setError({ ...error, description: deskError })
        return   deskError 
     }
     function validatePrice (value) { 
        let priceError = [];
        if (value == "") {
            priceError.push("Price is empty")
        }
        let templateFprPrice = /\d*((\.|,)\d+)|\d*/d
        let match = templateFprPrice.exec(value)
        if (match[0] !== match.input) {
            priceError.push("Price doesnt recognise")
        }
        if (priceError.length != 0 || !isValidForm) {
            setIsValidForm(false);
        }
        setIsValidForm(true);
        setError({ ...error, price: priceError })
        return   priceError 

     }
    useEffect(() => {
        let product = InitializeProduct();
      let titleInvalidMessage=  validateTitle(product.title);
      let descriptionInvalidMessage=  validateDescription(product.description);
      let priceInvalidMessage=  validatePrice(product.price)
        setError({title: titleInvalidMessage,description:descriptionInvalidMessage,price:priceInvalidMessage })     
        setProduct(product);
    }, [props.product]);
    function InitializeProduct() {
        if (props.product === undefined) {
            return {
                title: "",
                description: "",
                price: "",
            }
        }
        return props.product;
    }
    function changeTitle(event) {
        let title1 = event.target.value;
       validateTitle(title1);
          
        setProduct(prevProduct => { return { ...prevProduct, title: title1 } });

    }
    function changeDescription(event) {
        let desk = event.target.value;
        validateDescription(desk);
        setProduct(prevProduct => { return { ...prevProduct, description: desk } });

    }
    function changePrice(event) {
        let price = event.target.value;
        validatePrice(price)
        setProduct(prevProduct => { return { ...prevProduct, price: price } });

    }
    function submitProduct(event) {
        event.preventDefault();
        if (!isValidForm) {
            return;
        }
        props.ProductMethod(product);
        setProduct(
            { description: "", title: "", price: "" }
        );
    }

    return (
        <div style={{ width: "100%", color: "white" }}>
            <ValidComponent error={error.title}>
                <MyInput classNameElement="" onChange={changeTitle} value={product.title} type="text" placeholder="title" />
            </ValidComponent>
            <ValidComponent error={error.description}>
                <MyInput classNameElement="" onChange={changeDescription} value={product.description} type="text" placeholder="description" />
            </ValidComponent>
            <ValidComponent error={error.price}>
                <MyInput classNameElement="" onChange={changePrice} value={product.price} type="text" placeholder="price" />
            </ValidComponent>
            <MyButton onClick={submitProduct}>create</MyButton>
        </div>
    )
}
