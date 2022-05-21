import React from 'react';

const Business = () => {
    return (
        <div class="stats shadow mx-52">
  
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Happy  Clients </div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="stat-title">Feedback</div>
          <div class="stat-value text-secondary">2.6k</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://st2.depositphotos.com/49592816/47403/v/600/depositphotos_474039034-stock-illustration-motorbike-and-delivery-logo-icon.jpg" />
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Delivary with in time</div>
          <div class="stat-desc text-secondary">More delivary now ready </div>
        </div>
        
      </div>
    );
};

export default Business;