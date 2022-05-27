import React from 'react';

const Productrow = ({ product, index, setDeletingproducts }) => {
    const { name, img, short, minorder,availabel}=product;
    console.log(name,img,short);
    return (
      
            <tr>
            <th>{index + 1}</th>
            
            <td>{name}</td>
            <td><div class="avatar">
            <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{short}</td>
            <td>{minorder}</td>
            <td>{availabel}</td>
            <td>
                <label  onClick={() => setDeletingproducts(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
      
    );
};

export default Productrow;