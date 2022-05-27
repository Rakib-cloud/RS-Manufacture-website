import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchasedetails = () => {
  const { _id } = useParams();

  const [product, setProduct] = useState({});


  useEffect(() => {
    fetch(`https://damp-crag-59705.herokuapp.com/parts/${_id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [_id])

  const handleUpload = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const oq = event.target.oq.value;
    const price=product.unitprice;

    const url = 'https://damp-crag-59705.herokuapp.com/uploadorder';

    //fetch data 

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name, address, phone, oq,price,
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
      <div class="card w-1/2 bg-base-100 shadow-2xl">
        <figure class="px-10 pt-10">
          <img src={product.img} alt="" class="rounded-xl object-contain h-48 w-96" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Product name:{product.name}</h2>
          <p>Product description:{product.short}</p>
          <p>Minimum order Quantity:{product.minorder}</p>
          <p>Available product Quantity:{product.availabe}</p>
          <p>Per Unit price of Product:{product.unitprice}</p>

        </div>
      </div>

      <div class='mt-5'>
        <form class="w-full max-w-sm  " onSubmit={handleUpload}>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Full Name
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="name" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Address
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="address" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Phone Number
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="phone" />
            </div>
          </div>



          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Your Order Quantity
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder={product.minorder} name="oq" />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Order Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>








  );
};

export default Purchasedetails;