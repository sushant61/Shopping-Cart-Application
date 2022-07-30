import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import React, { useState } from "react";
import Additem from "./components/Additem";
function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 15",
      quantity: 0,
    },
    {
      price: 999999,
      name: "Iphone 150",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    } else newProductList[index].quantity = 0;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const reset=()=>{
    let newProductList = [...productList];
    newProductList.map((products)=>{products.quantity=0})
    setProductList(newProductList);
    setTotalAmount(0);
  }
  const remove=(index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount-=(newProductList[index].quantity*newProductList[index].price);
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }
  const add=(name,price) =>{
    let newProductList = [...productList];
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    });
    setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem add={add}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          remove={remove}
        />
      </main>
      <Footer  totalAmount={totalAmount}
               reset={reset} />
    </>
  );
}
export default App;
