import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Footer from './Footer';
import Foreview from './Foreview';
import Morereview from './Morereview';

import Tools from './Tools';



const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
           <Foreview></Foreview>
           {/* <Morereview></Morereview> */}
           <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;