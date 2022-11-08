import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServCard from '../../../shared/HomeServCard/HomeServCard';

const HomeService = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='text-center'>
                <h2 className='font-bold text-4xl text-silve my-8'>MY SERVICES</h2>
            <p className='text-xl mb-8'>I love capturing memories. That look, that smile, those tears, that brief moment frozen in time. Real memories, real emotions.</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeServCard
                    key={service._id}
                    service={service}
                    ></HomeServCard>)
                }

            </div>
            <div className='flex justify-center m-4'>
            <Link to='/allServices'><button className="btn btn-outline">Show More</button></Link>
            </div>
        </div>
    );
};

export default HomeService;