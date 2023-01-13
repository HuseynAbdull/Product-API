import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import About from './pages/About';
import Expensive from './pages/Expensive';



const App = () => {
 
  const [products,setProducts] =useState([]);
  useEffect(() => {
  const getProducts= async () => {
  const response =await axios.get('https://fakestoreapi.com/products');
  console.log(response.data);
  setProducts(response.data);  
  }
    getProducts();
  },[])

  // useEffect(() =>{
  //   const getCatagory = async () = {
  //     setCatagory(await axios.get('https://fakestoreapi.com/products/catagories'))
  //   }
  // },[])
  
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage productList = {products} />} />
      <Route path='/about' element={<About />} />
      <Route path='/expensive' element={<Expensive  productList ={products}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
