import React, { useEffect } from 'react'
import ProductService from '../../api/ProductsService';
import ProductForm from './ProductForm';

export default function UpdateProductForm(props) {

    async function updateProduct(updatedProduct) {

        props.setVisible(false);
        await ProductService.UpdateProduct(updatedProduct)
       props.setTakeListOfProduct(prevTakeListOfProduct=>prevTakeListOfProduct+1)
    }
    let product = props.products.find(product => product.id === props.productId);
    let textButton="Create product"
    return (
        <>
            <ProductForm ProductMethod={updateProduct} product={product} textButton={textButton}/>
        </>
    )
}
