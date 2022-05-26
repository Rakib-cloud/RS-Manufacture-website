import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Userrow from './Userrow';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user`,{
                method: 'GET',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setUsers(data));
        }
    }, [user])

   
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
   
    {
                           users.map(user=><Userrow
                           key={user._id}
                           user={user}
                           
                           ></Userrow>)
                       }
     
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;