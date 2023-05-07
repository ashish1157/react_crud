import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './App.css';

function DisProduct(props)
{
	const [product, setProduct] = useState({});
	const { ProductId } = useParams() 
	 useEffect(() => {
		 fetch("https://localhost:7088/api/Product/" + ProductId) 
			.then(res => res.json()) 
			.then((result) => { setProduct(result); } 
       		);
     	 }, {});

 return ( 
	<div ><h1>Display Product </h1>
        <label>Id:</label> 
		{product.productId}<br /> 
    		<label>Product Name</label> 
		{product.name}<br /> 
		<label>Unit Price:</label>
 		{product.unitPrice} <br />
 	</div> 

	);

}


 export default DisProduct;