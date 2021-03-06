import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';



const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
      
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    
    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">purchase</Link></li>
  
        
        <li><Link to="/portfolio">MY Portfolio</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }

        <li>{user ? <button className="btn btn-ghost"  onClick={logout} >Sign Out <span>{user.email}</span></button> : <Link to="/login">Login</Link>}</li>
       
      
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {menu}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl mx-3">RS Computer Zone</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                {menu}

                </ul>
            </div>


            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
           
        </div>
    );
};

export default Navbar;