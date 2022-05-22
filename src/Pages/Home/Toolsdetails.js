import React from 'react';

const Toolsdetails = ({ tool }) => {
    const { name, img,short,minorder,availabe } = tool;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
            <h2 class="text-xl font-bold text-secondary">Parts Name:{name}</h2>
            <img src={img} alt="" />
            <h2 class="text-xl font-bold text-secondary">Parts Description:{short}</h2>
            <h2 class="text-xl font-bold text-secondary">Minimum order Quantity:{minorder}</h2>
            <h2 class="text-xl font-bold text-secondary">Available :{availabe}</h2>
            <input type="submit" value="Purchase" class="btn btn-secondary w-full max-w-xs" />
        </div>
    </div>
    );
};

export default Toolsdetails;