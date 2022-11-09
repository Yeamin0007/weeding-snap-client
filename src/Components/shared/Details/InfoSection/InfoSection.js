import React from 'react';
import { FaStar } from 'react-icons/fa';


const InfoSection = ({serviceInfo}) => {
    const {img, name , price, description, rating} = serviceInfo;
    return (
        <div className="card lg:card-side bg-slate-700 shadow-xl">
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body text-center">
    <h2 className="text-5xl font-bold ">{name}</h2>
    <p className='text-l mt-12'>{description}</p>
    <p className='font-bold'>Tk. {price}</p>
    <div className="card-actions justify-end">
      ratings: {rating}<FaStar className='text-yellow-500 mt-1 px-0'></FaStar>
    </div>
  </div>
</div>
    );
};

export default InfoSection;