import React from 'react';
import Ban from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Ban} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold ml-100">Your All Necessary is here </h1>
                    <p class="py-6">From our websites you can grow your own business to buy products from us .Your choice is our motto </p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;