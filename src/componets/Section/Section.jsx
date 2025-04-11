import React, { useEffect, useState } from 'react';

    const Section = () => {

        const [section,setsection]=useState([])
    
    useEffect(() => {
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setsection(data))
    },[])
    console.log(section)

    return (
        <div className='flex gap-4 text-center justify-center'>
           <div className="overflow-x-auto w-200 h-100 shadow gap-20  rounded-box border border-base-content/5 bg-base-100">
           <table className="table table-zebra">
               <tr className=''>
                 <th>Items</th>
                 <th>Current Bid</th>
                 <th>Time Left</th>
                 <th>Bid Now</th>
               </tr>
               {section.map(item=> <tr>

                {/* <td>  
                    <img src=" {item.image} alt="" />
                </td> */}

                <td>  
                    {item.title}
                </td>
                <td>
                  
                {    item.currentBidPrice  }
                  
                </td>
                <td>
                    {item.timeLeft}
                </td>
                <td>
                <button className="">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
                </td>
               </tr>)}
           </table>
           </div>

           <div>
            <div className="card w-96 bg-base-100 shadow">
           <div className="card-body">
    
    
  </div>
</div>
           </div>
        </div>
    );
};

export default Section;