import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Toolsdetails = ({ tool }) => {
    const { _id,name, img,short,minorder,availabe,unitprice } = tool;

    
    
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
            <p class=" font-bold text-secondary">Parts Name:{name}</p>
            <img src={img} alt="" />
            <p class=" font-bold text-secondary">Parts Description:{short}</p>
            <p class=" font-bold text-secondary">Minimum order Quantity:{minorder}</p>
            <p class=" font-bold text-secondary">Available :{availabe}</p>
            <p class=" font-bold text-secondary">unitprice :{unitprice}</p>
           
            <Link to={`/purchase/${_id}`} className="btn btn-primary" >Purchuse</Link>
        </div>
    </div>
    );
};

export default Toolsdetails;