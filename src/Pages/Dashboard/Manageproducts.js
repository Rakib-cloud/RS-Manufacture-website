import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import Productrow from './Productrow';




const Manageproducts = () => {
    const [products, setproducts] = useState([]);
    const [user] = useAuthState(auth);
    const [deletingproducts, setDeletingproducts] = useState(null);

    useEffect(() => {
        if (user) {
            fetch('https://damp-crag-59705.herokuapp.com/parts', {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setproducts(data));
        }
    }, [user])
    return (
        <div>
            <h2 className="text-2xl">Total products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Minimum order</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,index) => 
                            
                            <Productrow
                            key={product._key}
                            product={product}
                            index={index}
                            setDeletingproducts={ setDeletingproducts}
                            >

                            </Productrow>
                            
                            )
                        }
                    </tbody>
                </table>
            </div>
            {deletingproducts && <DeleteConfirmModal
                deletingproducts={deletingproducts}
                
                setDeletingproducts={setDeletingproducts}
            ></DeleteConfirmModal>}
        </div>
        
    );
};

export default Manageproducts;
