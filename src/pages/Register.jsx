import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const {name} = useContext(AuthContext)
    console.log(name)
    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;
        console.log(email,password,name,photo);
    }
    return (
        <div>
            <>
                <div className="hero mb-4 mt-2">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <h3 className='text-start text-3xl my-3'>Register</h3>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="mb-2">Already have an account? <Link to="/login" className='text-blue-400'>Login.</Link></p>
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
        </div>
    );
};

export default Register;