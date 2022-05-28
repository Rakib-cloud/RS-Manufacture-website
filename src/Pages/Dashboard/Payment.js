import React  from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe('pk_test_51L4JGhCr3RdfjXOQkCFMuz5feiJ6adigsD0mgBVXgiFD3on57jV6o3c11I0sHtnq6LSFzJ9cvfcvM1hDAWojkB0P00Bm40lGHZ');
const Payment = () => {
    const { id} = useParams();
    console.log(id);
 
    
    const url = `http://localhost:5000/orders/${id}`;
   
  const { data: orders } = useQuery(['orders', id], () => fetch(url).then(res => res.json()));

    
   

   


    
    return (
        <div>
            <h2>pay for {id}</h2>
           
            
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {orders.name}</p>
                    <h2 class="card-title">your address: {orders.address}</h2>
                
                    <p>Please pay: {orders.price}</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Payment;