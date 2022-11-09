import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

import ReviewCardTwo from '../../ReviewCardTwo/ReviewCardTwo';

const ReviewSection = ({serviceInfo}) => {

    const{user}= useContext(AuthContext);

    const {_id , name} = serviceInfo;


    const[userReviews, setReviews] =useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    const reviewHandler = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const displayName = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || 'unregistered';
        const userReview = {
            serviceId: _id,
            name,
            review,
            displayName,
            email,
            photoURL,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added Successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <h2 className="text-4xl text-center my-2">Client's Review</h2>
            <div className='max-w-screen-2xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    userReviews.map(userReview => <ReviewCardTwo
                        key={userReview._id}
                        userReview={userReview}
                    >
                    </ReviewCardTwo>)
                }
            </div>
            <form onSubmit={reviewHandler}>
                <h2 className="text-4xl">Reviews</h2>
                <textarea name="review" className="textarea textarea-accent h-32 w-full" placeholder="Your Review" required></textarea>

                <input className='btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default ReviewSection;