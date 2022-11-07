import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl max-w-md bg-emerald-200 py-20">
                    <h1 className="text-5xl text-center font-bold text- divide-cyan-900">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Wedding Snap? <Link className='text-divide-cyan-900 font-bold' to="/register">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;