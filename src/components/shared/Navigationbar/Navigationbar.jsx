import React, { useContext } from 'react';
import logo from '../../../assets/brand-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const Navigationbar = () => {
    const { loggedUser, loading, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const userLogOut = () => {
        logOut()
            .then(() => {
                toast('Log Out SuccessFully')
                navigate('/')
            })
            .catch(error => toast.error(error.message))
    }
    return (
        <>
            <div>
                <div className="navbar bg-white text-black">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            {/* small devices menubar/breadcam menu items here  */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                                <li><a>Home</a></li>

                                <li><a>Login</a></li>
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <img src={logo} style={{ height: '50px' }} alt="" />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/blog">Blog</Link></li>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        {loggedUser &&
                            <div className='flex'>
                                <p className="btn">{loggedUser.email}</p>
                                <p className="px-2 py-1 mx-2 rounded-sm  bordered border-2 cursor-pointer hover:bg-slate-100" onClick={userLogOut}><small>Logout</small></p>
                            </div>

                            }

                    </div>
                </div>
            </div>




        </>
    );
};

export default Navigationbar;