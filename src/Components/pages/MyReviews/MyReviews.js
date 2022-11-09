import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';




const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (
        <div className='max-w-screen-2xl mx-auto flex justify-center'>
            {
                myReviews.map(myReview => <ReviewCard
                    key={myReview._id}
                    myReview={myReview}
                >
                </ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;