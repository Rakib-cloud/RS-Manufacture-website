import React from 'react';

const Myreview = () => {
    const handleUpload = (event) => {
        event.preventDefault();
        const rate = event.target.rate.value;
        const review = event.target.review.value;
       
    
        const url = 'http://localhost:5000/review';
    
        //fetch data 
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            rate, review,
          }),
          headers: {
    
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            event.target.reset();
          });
    
      }
    return (
        <div>
             <div class='mt-5'>
        <form class="w-full max-w-sm  " onSubmit={handleUpload}>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Ratings
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="rate" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
               Review
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="review" />
            </div>
          </div>

          



          

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Add a review
              </button>
            </div>
          </div>
        </form>
      </div>
        </div>
    );
};

export default Myreview;