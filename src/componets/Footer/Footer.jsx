import React from 'react';

const Footer = () => {
    return (
    <footer className="footer footer-horizontal footer-center">
  
  <div className="flex">
    <a className="text-2xl flex"><p style={{color: 'blue'}}>Auction</p> <p style={{color: "yellow"}}>Gallcry</p></a>
  </div>
  <nav className="grid grid-flow-col gap-6 text-xl">
    <a className="link link-hover">Bid.</a>
    <a className="link link-hover">Win.</a>
    <a className="link link-hover">Own.</a>
  </nav>
  <nav className="grid grid-flow-col gap-6 tab-5">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auctions</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to works</a>
  </nav>
 
  <aside>
    <p>{new Date().getFullYear()} © 2025 AuctionHub. All rights reserved.</p>
  </aside>
</footer>
       
    );
};

export default Footer;