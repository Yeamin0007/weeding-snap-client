import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddServices = () => {



    const ServiceHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const userService = {
            name,
            img,
            price,
            description,
            rating
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.info('Service Added Successfully.', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }





    return (
        <div className=' bg-slate-700'>
            <div className='text-5xl text-center my-5 py-12 flex justify-center'>
                <h2 className='px-2'>Add Any Special Services You Want From Me...</h2>
                <FaCamera></FaCamera>
            </div>
            <div>
            <form onSubmit={ServiceHandler} className='max-w-screen-2xl mx-auto py-12' >
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                    <input name="name" type="text" placeholder="Service Name" className="input input-accent w-full  input-bordered" required />
                    <input name="img" type="text" placeholder="ImageUrl" className="input input-accent w-full  input-bordered" requiard/>
                    <input name="price" type="text" placeholder="Price" className="input input-accent w-full  input-bordered" required />
                    <input name="rating" type="text" placeholder="Rating" className="input input-accent w-full  input-bordered" required />
                    <textarea name="description" type="text" className="textarea textarea-accent textarea-bordered h-24 w-full m" placeholder="Service Description" required></textarea>
                </div>
              <div className='flex justify-center mt-6'>
              <input className='btn' type="submit" value="Add Your Service" />
              </div>
            </form>
            
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddServices;