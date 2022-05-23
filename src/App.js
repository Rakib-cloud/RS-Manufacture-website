
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Home/PrivateRoute';
import Login from './Pages/Login/Login';

import Signup from './Pages/Login/SignUp';


import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/Notfound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="Purchase" element={<PrivateRoute>
          <Purchase></Purchase>
        </PrivateRoute>} />
       
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
