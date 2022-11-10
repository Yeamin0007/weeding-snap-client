import React, { useEffect, useState } from 'react';
import HomeServCard from '../../../shared/HomeServCard/HomeServCard';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='max-w-screen-2xl mx-auto my-6'>
            <p className='text-center text-5xl font-bold mb-12'>My Services</p>
             <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeServCard
                    key={service._id}
                    service={service}
                    ></HomeServCard>)
                }

            </div>
        </div>
    );
};

export default Services;