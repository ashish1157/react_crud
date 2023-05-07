import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './App.css';
export function AddProduct() {
    const [product,setProduct] = useState({});
  
  let navigate = useNavigate();

 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    let demo1 = JSON.stringify(product);
    console.log(JSON.parse(demo1));
    fetch("https://localhost:7088/api/Product/", {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo1
    }).then(r => { console.log(r.json()) })
event.preventDefault();
    navigate('/');
   
    alert("Product is Successfully Added");
  }
  return (
    <div><h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
           
                           <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name || ""}
                    onChange={handleChange}
                />
                <br />  <br />  <br /> 
                           <label>Unit Price:</label>
                <input
                    type="text"
                    name="unitPrice"
                    value={product.unitPrice || ""}
                    onChange={handleChange}
                />
                <br />  <br />  <br /> 
                           <input type="submit" class="form-submit-button"/>
     </form>
     </div>
      );
    }export default AddProduct;


    