import React from 'react';

import test from '../../images/test.JPG'
const Portfolio = () => {
    return (
        
         <div>
             <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={test} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Name: Md.Rakibul islam</h1>
      <h2 class="text-2xl font-bold">Email: mislam172131@bscse.uiu.ac.bd</h2>
      <h2 class="text-2xl font-bold">Educational Background :BSC in CSE From UIU</h2>
      <h3>About me :</h3>
      <p class="py-6">A self-driven attitude, willingness to learn and a strong presence of mind. Energetic, devoted, sincere and hardworking is my one and only motto for doing any work.

Currently i am working with ANTT Robotics LtdAs a Research Associate and Head of Education.Here i develop STEM Curriculum.I also teach coding for Children.Besides my work i also a teacher .I have a lot's of experience in teaching profession.

I am also Junior web developer.I was an organizational editor of sanjiban .</p>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
   
    <label for="my-drawer" class="btn btn-primary drawer-button">My Skills</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     
      <li><a>HTML,CSS,Javascript,Bootstrap,Tailwind</a></li>
      <li><a>Firebase,Git,Mongodb</a></li>
      <li><a>C,C++,Java</a></li>
      <li><a>Teaching ,Content Writer</a></li>
      
    </ul>
  </div>
</div>
      <p>Some projects live link:</p>
      <div className="text-success font-bold">
      <a href="https://rakibstuitorialpoint.netlify.app/">Rakib's Tuitorial app</a>
     
      </div>
      <div className="text-success font-bold">
      <a href="https://burger-kingreviewer.netlify.app/">Burger king review app</a>
     
      </div>
      <div className="text-success font-bold">
      <a href="https://rakibulpersonalportfolio.netlify.app/">My portfolio app</a>
      </div>
    </div>
  </div>
</div>
         </div>
        
    );
};

export default Portfolio;