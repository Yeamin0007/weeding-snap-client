import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";



const UpdatePage = () => {
    useTitle('Update')
   const savedReview = useLoaderData();
   const[userReviews, setReviews] =useState(savedReview);

   


   const handleUpdate = event => {
       event.preventDefault();
       fetch(`https://wedding-snap-server.vercel.app/reviews/${savedReview._id}`,{
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userReviews)
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
       })
    }

   const handleChange = event => {
    const field = event.target.review;
    const value = event.target.value;
    const newReview = {...userReviews}
    newReview[field] =value;
    setReviews(newReview);
   }


    return (
        <div>

           <form onSubmit={handleUpdate} className='mt-6' >
                <h2 className="text-xl text-center my-4">Share Your True Thoughts</h2>
                <textarea onChange={handleChange} name="review" defaultValue={savedReview.review} className="textarea textarea-accent h-32 w-96" placeholder="Your Review" required></textarea>

                <div className='flex justify-center my-4'>
                <input className='btn' type="submit" value="Update Review" />
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;