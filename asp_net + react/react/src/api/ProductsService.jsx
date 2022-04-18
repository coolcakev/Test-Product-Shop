import axios from "axios";
let port="5001";
let domain="localhost"
let host=`https://${domain}:${port}/`
export default class ProductsService {
    static async GetAnnoncments() {
        try {
            let response = await axios.get(`${host}Product/GetProducts`);
            return response.data;
        }
        catch (e) {
            console.log(e)
        }

    }
    static async CreateProduct(product) {    
        try {                  
            let response = await axios.post(`${host}Product/Create`,product);   
            return response.data;        
        }
        catch (e) {
            console.log(e)
        }

    } 
    static async UpdateProduct(product) {    
        try {                  
            let response = await axios.post(`${host}Product/Update`,product);     
            
        }
        catch (e) {
            console.log(e)
        }

    } 
    static async DeleteProduct(productId) {    
      
        console.log(productId);
        try {                  
            let response = await axios.post(`${host}Product/Delete/${productId}`);           
        }
        catch (e) {
            console.log(e)
        }

    } 
}  