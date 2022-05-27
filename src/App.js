
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addproduct from './Pages/Addproduct/Addproduct';

import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Manageproducts from './Pages/Dashboard/Manageproducts';
import Myorder from './Pages/Dashboard/Myorder';
import Myprofile from './Pages/Dashboard/Myprofile';
import Myreview from './Pages/Dashboard/Myreview';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Home/PrivateRoute';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';

import Signup from './Pages/Login/SignUp';


import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/Notfound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Purchasedetails from './Pages/Purchase/Purchasedetails';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="Purchase" element={<PrivateRoute>
          <Purchase></Purchase>
        </PrivateRoute>} />
        <Route path="Purchase/:_id" element={<PrivateRoute>
          <Purchasedetails></Purchasedetails>
        </PrivateRoute>} />

        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
          <Route index element={<Myorder></Myorder>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="profile" element={<Myprofile></Myprofile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>

          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          
          <Route path="addproduct" element={<RequireAdmin><Addproduct></Addproduct></RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin><Manageproducts></Manageproducts></RequireAdmin>}></Route>
        </Route>
       
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="portfolio" element={<Portfolio></Portfolio>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
        
        
      
      </Routes>
    </div>
  );
}

export default App;
