import React, { useEffect, useState } from 'react';

    const Section = ({ sectionPromise }) => {

        const [section,setsection]=useState([])
    
    useEffect(() => {
        fetch("section.json")
        .then(res=>res.json())
        .then(data=>setsection(data))
    },[])
    console.log(section)

    return (
        <div>
            
        </div>
    );
};

export default Section;