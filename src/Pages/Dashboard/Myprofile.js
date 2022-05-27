import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const handleUpload = (event) => {
        event.preventDefault();
        const education = event.target.education.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const profile= event.target.profile.value;
    
        const url = 'http://localhost:5000/addprofile';
    
        //fetch data 
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            education, address, phone, profile,
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
            <h3>welcome to my profile</h3>
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name:{user.Name}</h2>
                    <p>Email:{user.email}</p>
                    
                </div>
            </div>

            <form class="w-full max-w-sm  " onSubmit={handleUpload} >
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
               Education :
              </label>




            </div>
            <div class="md:w-2/3 mt-5">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="education" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
               Address
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="address" />
            </div>
          </div>

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
               Phone Number
              </label>




            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="phone" />
            </div>
          </div>



          


          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
               Linkedin Profile link 
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  name="profile
" />
            </div>
          </div>

         
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
               Save profile
              </button>
            </div>
          </div>
        </form>
        </div>
    );
};

export default Myprofile;