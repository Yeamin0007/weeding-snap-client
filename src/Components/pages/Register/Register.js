import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const [error, SetError] =useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate= useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password= form.password.value;
        console.log(name, photoURL,email,password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            SetError('');
            navigate('/login');
            handleUpdateProfile(name ,photoURL);
            
        })
        .catch(error => {
            console.error(error);
            SetError(error.message);
        });
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4 border-4 border-accent rounded-3xl' src='https://images.unsplash.com/photo-1607106924440-59f9ede7050c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBjYW1lcmF8ZW58MHx8MHx8&w=1000&q=80' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl max-w-md bg-slate-700 py-20">
                <h1 className="text-5xl text-center font-bold text-accent">Sign Up</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        <label className="label">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-accent" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already Have an Accout? <Link className='text-accent font-bold' to="/login">Login</Link> </p>
                <small className='text-red-700'>
                {error}
            </small>
            </div>
            
        </div>
    </div>
    );
};

export default Register;