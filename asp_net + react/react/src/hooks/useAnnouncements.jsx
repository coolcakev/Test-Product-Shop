import { useMemo } from "react";

export const useSortProduct = (products, sort) => {
    let sortedProducts = useMemo(() => {
        console.log("Sort products")
        if (sort) {
            return [...products].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return products;
    }, [sort, products])
    return sortedProducts
}

// export const useProducts = (products, sort, query) => {
    
//     let searchAndSortProducts = useMemo(() => {
//         return getProducts(sort,query)
//     }, [query,sort, products])
//     console.log(searchAndSortProducts);
//     return searchAndSortProducts;
// }
export const useProducts = (products, sort,query) =>{
    const sortedProducts = useSortProduct(products, sort) 

     const sortedAndSearcedProducts = useMemo(() => {
        return sortedProducts.filter(product => product.title.toLocaleLowerCase().includes(query))
    }, [query, sortedProducts])
    return sortedAndSearcedProducts;
} 