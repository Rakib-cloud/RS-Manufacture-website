import React  from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';




const Payment = () => {
    const { id} = useParams();
    console.log(id);
 
    
    const url = `https://damp-crag-59705.herokuapp.com/orders/${id}`;
   
  const { data: orders } = useQuery(['orders', id], () => fetch(url).then(res => res.json()).then(data =>console.log(data)));

    
   

   


    
    return (
        <div>
            <h2>pay for {id}</h2>
           
            
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello{orders.name}</p>
                    <h2 class="card-title">your address: {orders.address}</h2>
                
                    <p>Please pay: {orders.price}</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Payment;