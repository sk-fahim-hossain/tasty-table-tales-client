import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataPovider';
import toast from 'react-hot-toast';


const Register = () => {
    const {createUser,googleLogin, githubLogin} = useContext(AuthContext)
    const {chefs}= useContext(DataContext)
   
    
    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;

        createUser(email,password)
        .then(result =>{
            toast.success('User Created Successfully..!')
            navigate('/')
            console.log(result.user)
        })
        .catch(error => toast.error(error.message))
        form.reset()
        console.log(email,password,name,photo);
    }
    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            toast.success('Google Login Successfully..!')
            navigate('/')
        })
        .catch(error => toast.error(error.message))
    }
    const handleGithub = () => {
        githubLogin()
        .then(result =>{
            toast.success('Google Login Successfully..!')
            navigate('/')
        })
        .catch(error => toast.error(error.message))
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
                <div onClick={handleGoogle} className='btn bg-white ursor-pcointer'>
                    <span><FaGoogle></FaGoogle></span>
                    <p className=''>Login With Google</p>
                </div>
                <br />
                <div onClick={handleGithub} className='btn bg-white ursor-pcointer'>
                    <span><FaGithub></FaGithub></span>
                    <p className=''>Login With Github</p>
                </div>
            </>
        </div>
    );
};

export default Register;