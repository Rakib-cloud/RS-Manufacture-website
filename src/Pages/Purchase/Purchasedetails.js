import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Purchasedetails = () => {
    const {_id} =useParams();
 
    const [product, setProduct] = useState({});
   
    
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [_id])
    return (
        <div>
            <p>your clicked product{_id}</p>

          
           <p>{product.name}</p>
           
        
            
      
        </div>
    );
};

export default Purchasedetails;