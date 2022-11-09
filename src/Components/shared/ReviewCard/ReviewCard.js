import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const ReviewCard = ({myReview}) => {
    const {displayName, email, review} = myReview;


    return (
        <div className="card bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.myloview.com/posters/elegant-wedding-stationery-set-top-view-flat-lay-blank-invitation-card-mockup-ibbon-envelope-on-white-background-700-259704086.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{displayName}</h2>
    <p>{email}</p>
    <p>{review}</p>
    
  </div>
</div>
    );
};

export default ReviewCard;