import React from 'react'
import ProductService from '../../api/ProductsService';
import ProductForm from './ProductForm';

export default function CreateProductForm(props) {

    async function createProduct(product) {
        props.setVisible(false);
        await ProductService.CreateProduct(product);
        props.setTakeListOfProduct(prevTakeListOfProduct => prevTakeListOfProduct + 1)
    }
    let textButton = "Create product"
    let styleTitleCreateProductForm = {
        marginBottom: "10px",
    }
    return (
        <>
            <h1 style={styleTitleCreateProductForm}>Create product</h1>
            <ProductForm ProductMethod={createProduct} textButton={textButton} />
        </>
    )
}
