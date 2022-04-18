
import React, { useEffect } from 'react';
import ProductService from './api/ProductsService';
import CreateProductForm from './components/ProductForm/CreateProductForm';
import UpdateProductForm from './components/ProductForm/UpdateProductForm.jsx';
import ProductList from './components/ProductList';
import MyButton from './components/UI/Button/MyButton';
import MyModal from './components/UI/Modal/MyModal';
import ViewProduct from './components/ViewProduct';
import './styles/App.css';

function App() {
  let [products, setProducts] = React.useState([]);
  let [visible, setVisible] = React.useState(false)
  let [modalComponent, setModalComponent] = React.useState()
  let [isTakeListOfProduct,setTakeListOfProduct] = React.useState(0);
  console.log("App render");


  async function deleteProduct(productId) {
   await ProductService.DeleteProduct(productId);
    setTakeListOfProduct(prevTakeListOfProduct=>prevTakeListOfProduct+1)
  }
  function createModalOpen() {
    setModalComponent(<CreateProductForm
      setVisible={setVisible}    
      setTakeListOfProduct={setTakeListOfProduct}
    />)
    setVisible(true);
  }
  function updateModalOpen(productId) {
    setModalComponent(<UpdateProductForm
      setVisible={setVisible}
      productId={productId}
      products={products}   
      setTakeListOfProduct={setTakeListOfProduct}
    />)
    setVisible(true);
  }
  function viewModalOpen(product) {
    setVisible(true);
    setModalComponent(<ViewProduct   
      {...product}
    />)
  }
  console.log("isTakeListOfProduct App Component : "+isTakeListOfProduct)
  console.log("modalComponent :")
  console.log(modalComponent)
  return (
    <div className="App" >
      <MyButton onClick={createModalOpen}>
        Create Product
      </MyButton>
      <MyModal
        visible={visible}
        setVisible={setVisible}
      >
        {modalComponent}
      </MyModal>

      <ProductList isTakeListOfProduct={isTakeListOfProduct} setProducts={setProducts} updateModalOpen={updateModalOpen} deleteProduct={deleteProduct} viewModalOpen={viewModalOpen} products={products} title={"my list"} />

    </div>
  );
}

export default App;
