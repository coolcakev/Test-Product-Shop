import React, { useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Loader from './UI/Loader/Loader'
import ProductItem from './ProductItem'
import { useFetching } from '../hooks/useFetching';
import ProductService from '../api/ProductsService';

export default function ProductList(props) {
    console.log("isTakeListOfProduct ProductList Component : "+props.isTakeListOfProduct)
  
    let [fetchProducts,isProductsLoading,error]=useFetching(async()=>{       
        let products = await ProductService.GetAnnoncments();       
        props.setProducts(products)
      });
      useEffect(() => {
        fetchProducts();
    
      }, [props.isTakeListOfProduct]);
      console.log("isTakeListOfProduct ProductList Component : "+props.isTakeListOfProduct)
 
    if (isProductsLoading) {
        return <Loader />
    }
    console.log("ProductList " + props.products.length)
    console.log(props.products)
    if (props.products.length === 0) {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Product not found</h2>
            </div>
        )
    }

    return (
        <div>          
            <TransitionGroup className="todo-list">
                {props.products.map((product, index) => {
                    return (
                        <CSSTransition
                            key={product.id}
                            timeout={500}
                            classNames="product"
                        >
                            <ProductItem {...product} number={index + 1} updateModalOpen={props.updateModalOpen} deleteProduct={() => props.deleteProduct(product.id)} viewModalOpen={props.viewModalOpen} />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>     

        </div>
    )
}
