import React from 'react';
import { useQuery } from 'react-query';

const Morereview = () => {
  const url ='http://localhost:5000/reviews';
   
  const { data:reviews  } = useQuery(['reviews'], () => fetch(url).then(res => res.json()));



    return (
        <div>
          
          <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Ratings {reviews.rate}</p>
                    <h2 class="card-title">User Review: {reviews.review}</h2>
                
                    
                </div>
            </div>
         
          

        </div>
      
    );
};

export default Morereview;