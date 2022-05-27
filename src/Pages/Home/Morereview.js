import React, { useEffect, useState } from 'react';


const Morereview = () => {
 

  const [Review, setReview] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReview(data));
  }, [])
    return (
        <div>
          
        
         {
            Review.map(re =><>
            <h2>ratings:{re.rate}</h2>
            </> )
         }
          

        </div>
      
    );
};

export default Morereview;