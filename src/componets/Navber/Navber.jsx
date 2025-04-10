import React from 'react';

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-wrap justify-between">
  <div className="flex">
    <a className="text-2xl flex"><p style={{color: 'blue'}}>Auction</p> <p style={{color: "yellow"}}>Gallcry</p></a>
  </div>
  <div className=''>
       <ul className='flex gap-14 '>
            <li style={{margin: "0 10px"}}>Home</li>
            <li style={{margin: "0 10px"}}>Auctions</li>
            <li style={{margin: "0 10px"}}>Categories</li>
            <li style={{margin: "0 10px"}}>How to works</li>
       </ul>
   </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/SDDSXrXn/Whats-App-Image-2025-02-13-at-3-20-11-AM.jpg" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Navber;