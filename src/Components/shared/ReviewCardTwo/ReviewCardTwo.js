import React from 'react';


const ReviewCardTwo = ({userReview}) => {
    const {displayName, email, review, photoURL} = userReview;


    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full text-center my-6">
  <figure><img src="https://img.myloview.com/posters/elegant-wedding-stationery-set-top-view-flat-lay-blank-invitation-card-mockup-ibbon-envelope-on-white-background-700-259704086.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="avatar flex justify-center">
    <div className='w-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 '>
    <img  src={photoURL} alt='' />
    </div>
  
</div>
    <h2 className="font-bold text-2xl">{displayName}</h2>
    <p>{email}</p>
    <p>{review}</p>
  </div>
</div>
    );
};

export default ReviewCardTwo;