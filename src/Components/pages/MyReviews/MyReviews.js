import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';




const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    const handleDeletOne = _id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review comment?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${_id}`,{
                method: 'Delete'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remaining = myReviews.filter(review => review._id !== _id);
                    setMyReviews(remaining);
                }
            })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                myReviews.map(myReview => <ReviewCard
                    key={myReview._id}
                    myReview={myReview}
                    handleDeletOne={handleDeletOne}
                >
                </ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;