import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Payment = () => {
    const { id} = useParams();
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/orders/${id}`;
   
  

    
   

    useEffect(() => {
        if (user) {
            fetch(url)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])


    
    return (
        <div>
            <h2>pay for {id}</h2>
            
            {/* {
                    orders.map(order => <>
                    <h2>{order.name}</h2>
                    
                    </>)
                } */}
            
            
        </div>
    );
};

export default Payment;