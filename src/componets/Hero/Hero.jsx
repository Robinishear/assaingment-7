import React from 'react';

const Hero = () => {
  return (
    <div className="hero left-4  relative w-372 ">
      <img
        src="https://i.ibb.co.com/hF18HHNc/image.png"
        alt="Leica Camera"
        className="w-full h-auto rounded-lg"
      />
    <div className=" absolute top-15 left-0 p-25">
      <div>
        <h1 className="text-4xl font-bold text-cyan-50 ">Bid on Unique Items from <br /> Around the World</h1>
        <p className="py-6 text-cyan-50">
        Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
        </p>
        <button className="btn rounded-full">Explore Auctions</button>
      </div>
    </div>
  </div>
  );
};

export default Hero;