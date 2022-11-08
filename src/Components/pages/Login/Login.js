import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext,useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const {loginUser, providerLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password);
    
        loginUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error=> {
            console.error(error)
            setError(error.message);
        });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
        providerLogin(googleProvider)
        .then(result =>{
         const user = result.user;
         console.log(user);
         navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
     }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl max-w-md bg-emerald-200 py-20">
                    <h1 className="text-5xl text-center font-bold text- divide-cyan-900">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='text-cyan-900 mx-2'></FaGoogle>Login with Google</button>
                        </div>
                    </form>
                    <p className='text-center'>New to Wedding Snap? <Link className='text-divide-cyan-900 font-bold' to="/register">Sign Up</Link> </p>
                    <small className='text-red-700'>
                        {error}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;