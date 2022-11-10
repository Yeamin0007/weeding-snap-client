import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../Hooks/useTitle';




const MyReviews = () => {
    useTitle('MyReviews')
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
   


    const handleDeletOne = _id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review comment?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Review Deleted!', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    const remaining = myReviews.filter(review => review._id !== _id);
                    setMyReviews(remaining);
                }
                
            })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('site-token')} `
            }
        })
            .then(res => {
                if(res.status === 401 || res.status ===403){
                  logOut()
                }
                return res.json()
            })
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
            {
                myReviews.map(myReview => <ReviewCard
                    key={myReview._id}
                    myReview={myReview}
                    handleDeletOne={handleDeletOne}
                    
                >
                </ReviewCard>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;