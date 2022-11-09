import React from 'react';


const ReviewCardTwo = ({userReview}) => {
    const {displayName, email, review, name} = userReview;


    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.myloview.com/posters/elegant-wedding-stationery-set-top-view-flat-lay-blank-invitation-card-mockup-ibbon-envelope-on-white-background-700-259704086.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{displayName}</h2>
    <p>{email}</p>
    <p>{name}</p>
    <p>{review}</p>
    
    
  </div>
</div>
    );
};

export default ReviewCardTwo;