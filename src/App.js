
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

import Signup from './Pages/Login/SignUp';


import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
          
        
        
      
      </Routes>
    </div>
  );
}

export default App;
