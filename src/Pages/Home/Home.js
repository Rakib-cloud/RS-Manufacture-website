import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Footer from './Footer';
import Foreview from './Foreview';



const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Business></Business>
           <Foreview></Foreview>
           <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;