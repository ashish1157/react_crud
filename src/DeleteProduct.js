import React from 'react';
import { useState, useEffect } from "react";
import './App.css';

import { useNavigate, useParams } from "react-router-dom"
 function LangDel(props) {
    const [product, setProduct] = useState({});
    const { ProductId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7088/api/Product/"+ProductId)
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, {});
    const handledelete = (event) => {
        alert(ProductId);
        fetch("https://localhost:7088/api/Product/"+ProductId, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)

            }); navigate('/');
    }

    return (
        <div>
            <h1>Do you want to delete this record</h1>
            <label>Product Id:</label>
            {product.productId}<br /><br /><br />
            <label>Name</label>
            {product.name}<br /><br /><br />
            <label>Unit Price</label>
            {product.unitPrice}<br /><br /><br />
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>
        </div>
    );
}
export default LangDel;

