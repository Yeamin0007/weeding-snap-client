import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InfoSection from '../InfoSection/InfoSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const Details = () => {

    const serviceInfo = useLoaderData();
    
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto mt-8'>
                <InfoSection serviceInfo={serviceInfo}></InfoSection>
            </div>
            <div>
                <ReviewSection serviceInfo={serviceInfo}></ReviewSection>
            </div>
        </div>
    );
};

export default Details;