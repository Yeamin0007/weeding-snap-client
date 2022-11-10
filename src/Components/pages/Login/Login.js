import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext,useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    useTitle('Login')
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

            const currentUser ={
                email: user.email
            }
            console.log(currentUser);
            console.log(user);
            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                localStorage.setItem('site-token', data.token);
            })
            form.reset();
            setError('');
            
            navigate(from, {replace: true});
        })
        .catch(error=> {
            console.error(error);
            setError(error.message);
        });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
        providerLogin(googleProvider)
        .then(result =>{
         const user = result.user;
         const currentUser ={
            email: user.email
        }
         console.log(user);
         fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                localStorage.setItem('site-token', data.token);
            })
         navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
     }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full h-96 border-4 border-accent rounded-3xl' src='https://c8.alamy.com/comp/T6NC3G/a-modern-looking-polaroid-camera-in-silver-and-black-color-vector-color-drawing-or-illustration-T6NC3G.jpg' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl max-w-md bg-slate-700 py-20">
                    <h1 className="text-5xl text-center font-bold text-accent">Login</h1>
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
                        
                    </form>
                    <div className="form-control my-2 mx-8">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='text-accent mx-2'></FaGoogle>Login with Google</button>
                        </div>
                    <p className='text-center'>New to Wedding Snap? <Link className='text-accent font-bold' to="/register">Sign Up</Link> </p>
                    <small className='text-red-700 text-center'>
                        {error}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;