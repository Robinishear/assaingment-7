import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-wrap justify-between  bg-cyan-50 ">
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
        <div className="indicator ">
        <div className='text-xl font-bold'> <IoMdNotificationsOutline /></div>
          <span className="badge badge-sm indicator-item">9</span>
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