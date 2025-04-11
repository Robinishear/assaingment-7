import React, { useEffect, useState } from 'react';

const Section = ({ handleIconMark }) => {
    const [section, setSection] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setSection(data))
    }, []);

    const toggleFavorite = (item) => {
        const alreadyFav = favorites.includes(item.id);
        if (alreadyFav) {
            setFavorites(favorites.filter(id => id !== item.id));
        } else {
            setFavorites([...favorites, item.id]);
            handleIconMark(item);
        }
    };

   
    const totalAmount = section
        .filter(item => favorites.includes(item.id))
        .reduce((sum, item) => sum + parseFloat(item.currentBidPrice || 0), 0);

    return (
        <div className='flex gap-4 text-center justify-center  bg-cyan-50 w-full'>
            {/* Main table */}
            <div className="h-auto shadow gap-20 rounded-box border border-base-content/5 bg-base-100">
                <table className="table table-zebra">
                    <thead>
                        <tr className='border-b-1'>
                            <th>Items</th>
                            <th></th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            section.map((item, index) => (
                                <tr key={item.id || index} className='border-b-1'>
                                    <td>
                                        <img className='w-16 h-16 rounded-md' src={item.image} alt="" />
                                    </td>
                                    <td className='text-cyan-950 font-bold'>
                                        {item.title}
                                    </td>
                                    <td className='text-cyan-950 font-bold'>
                                        {item.currentBidPrice}
                                    </td>
                                    <td className='text-cyan-950 font-bold'>
                                        {item.timeLeft}
                                    </td>
                                    <td className='text-cyan-950 text-xl'>
                                        <button
                                            onClick={() => toggleFavorite(item)}
                                            className={`${favorites.includes(item.id) ? "text-red-500" : "text-gray-400"}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Favorite Items Panel */}
            <div>
                <div className="card w-96 bg-base-100 shadow">
                    <div className="card-body border-b-1">
                        <div className='text-cyan-950 flex justify-center gap-2'>
                            <button className="text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                            <h1 className='font-bold text-cyan-950 text-2xl'>Favorite Items</h1>
                        </div>
                  </div>

                    {favorites.length === 0 ? (
                        <>
                            <div className='text-xl font-bold my-6'>No favorites yet</div>
                            <p className="text-sm border-b-1">
                                Click the heart icon on any item <br /> to add it to your favorites
                            </p>
                        </>
                    ) : (
                     <div className='p-4'>
                            {
                                section
                                    .filter(item => favorites.includes(item.id))
                                    .map(item => (
                                        <div key={item.id} className='flex items-center justify-between gap-3 mb-3'>
                                            <div className="flex items-center gap-3">
                         <img src={item.image} alt={item.title} className='w-12 h-12 rounded-md' />
                                                <p className='text-cyan-900 font-semibold'>{item.title}</p>
                                            </div>
                                            <button
                                                onClick={() => toggleFavorite(item)}
                                             className=" text-xl"
                                                title="Remove"
                                       >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                 </button>
                                        </div>
                                    ))
                            }
                        </div>
                    )}

                    <div className='font-bold flex justify-center gap-4 mb-6 my-9'>
                        <h1>Total bids Amount</h1>
                        <p>${totalAmount.toFixed(2)}</p> {/* Decimal value format */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
