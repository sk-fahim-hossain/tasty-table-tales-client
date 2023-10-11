import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";

const Login = () => {
    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <>
            <div className="hero mb-4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <h3 className='text-start text-3xl my-3'>Login</h3>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="mb-2">Don't have any account? <Link to="/register" className='text-blue-400'>Register.</Link></p>
                </div>

            </div>
            <div className='btn bg-white'>
                <span><FaGoogle></FaGoogle></span>
                <p className=''>Login With Google</p>
            </div>
            <br />
            <div className='btn bg-white mt-3'>
                <span><FaGithub></FaGithub></span>
                <p className=''>Login With Github</p>
            </div>
        </>
    );
};

export default Login;