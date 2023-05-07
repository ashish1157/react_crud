
import './App.css';
import React from 'react';
 import { useState, useEffect } from "react";



export default function App()
{

  const[prod,setProduct] =useState([]);
  useEffect(() => { 
    fetch("https://localhost:7088/api/Product")
    .then(res=>res.json())
    .then((result)=> { setProduct(result);}
  );
  },[]);


  return(
    <div>
      <nav>
        <h1>Welcome to Product mart</h1>
      </nav>

      <h2>Product list...</h2>
      <table border="1" cellPadding={10} > 
        <thead>
            <tr>
              <th>ProductId</th>
              <th>Product Name</th>
              <th>Unit Price</th> 
            </tr>
       </thead>
       <tbody>
        {
          prod.map(data=> (
            <tr key={data.productId}>
              <td>{data.productId}</td>
              <td>{data.name}</td>
              <td>{data.unitPrice}</td>
              <td> <a href={'/display_product/' + data.productId}>display</a></td>
              <td> <a href={'/Edit_product/' + data.productId}>Edit</a></td>
              <td> <a href={'/Delete_product/' + data.productId}>Delete</a></td>

            </tr>
          ))
        }
       </tbody>
      </table>

      <h2><a href={'/Add_Product'}>Add Product</a></h2>

    </div>
  )
}