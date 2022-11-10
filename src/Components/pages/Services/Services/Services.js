import React, { useEffect, useState } from 'react';
import HomeServCard from '../../../shared/HomeServCard/HomeServCard';
import ClipLoader from "react-spinners/ClipLoader";


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='max-w-screen-2xl mx-auto my-6'>
            {
                services.length === 0 ?
                <div className='flex justify-center my-20'>
                    <ClipLoader color="#6E021F" />
                </div>
                :
                <div>
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
            }
        </div>
    );
};

export default Services;