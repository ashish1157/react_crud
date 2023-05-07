import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import DisProduct from './DisProduct'; 
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import AddProduct from './AddProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
 <Route path="display_product/:ProductId" element={<DisProduct/>} />
 <Route path="/" element={<App/>}/>
 <Route path="Edit_product/:ProductId" element={<EditProduct/>}/>
 <Route path="delete_product/:ProductId" element={<DeleteProduct/>}/>
 <Route path="add_product" element={<AddProduct/>}/>



s

 </Routes>
 </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals