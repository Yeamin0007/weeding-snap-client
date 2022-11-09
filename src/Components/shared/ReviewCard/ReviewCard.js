import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


const ReviewCard = ({myReview, handleDeletOne}) => {
    const {_id, displayName, email, review} = myReview;

    


    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.myloview.com/posters/elegant-wedding-stationery-set-top-view-flat-lay-blank-invitation-card-mockup-ibbon-envelope-on-white-background-700-259704086.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title">{displayName}</h2>
    <p>{email}</p>
    <p>{review}</p>
    <div className='flex justify-end '>
         <button className='btn btn-ghost'><FaEdit className='mt-1'></FaEdit></button>
         <button onClick={()=> handleDeletOne(_id)} className='btn btn-ghost'><MdDelete className=' text-xl'></MdDelete></button>
         
    </div>
  </div>
</div>
    );
};

export default ReviewCard;