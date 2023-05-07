import React from 'react';
import { useState, useEffect } from "react"; 
import './App.css';
import { useNavigate, useParams } from "react-router-dom" 

export default function LangUp(props)
{ 
	const [product, setProduct] = useState({}); 
	const { ProductId } = useParams(); 
	let navigate = useNavigate();
	useEffect(() => { 
		fetch("https://localhost:7088/api/Product/" +ProductId ) 
			.then(res => res.json()) 
			.then((result) => { 
				setProduct(result);
			 } 
			);
 	}, {});
	 const handleChange = (event) => { 
		const name = event.target.name; 
		const value = event.target.value; 
		setProduct(values => ({ ...values, [name]: value })) 
} 
	const handleSubmit = (event) => { 
		let demo = JSON.stringify(product); 
		console.log(JSON.parse(demo)); 
		fetch("https://localhost:7088/api/Product/", { 
			method: 'PUT', 
			headers: { 'Content-type': 'application/json' }, 
			body: demo 
		}).then(r => { console.log(r.json()) })
 event.preventDefault(); 	
		navigate('/');
 
		alert("Updation Completed");
 }

	 return ( 
        <div>
            <h1>Update product</h1>
			<form onSubmit={handleSubmit}>
				 <label>Id:</label> 
					<input
						 type="text"
						 name="productId" 
						 value={product.productId || ""} 									 
                         onChange={handleChange} /> 
					<br /><br /><br />
				 <label>Name:</label> 
					<input type="text"
                                     name="name" 
						 value={product.name || ""}
						 onChange={handleChange} />
 					<br /><br /><br />
 				<label>Unit Price:</label>
					 <input type="text"
						  name="unitPrice" 	
						  value={product.unitPrice || ""} 									  
                          onChange={handleChange} /><br/><br/><br />

				 	<input type="submit" class="form-submit-button" />
			 </form>
             </div>
		    );
 }