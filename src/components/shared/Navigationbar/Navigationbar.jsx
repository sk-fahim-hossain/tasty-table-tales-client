import React, { useContext } from 'react';
import logo from '../../../assets/brand-logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const Navigationbar = () => {
    const {loggedUser,loading} = useContext(AuthContext)
    
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
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                           
                        </ul>
                    </div>
                    <div className="navbar-end">
                       {loggedUser ?  <p className="btn">{loggedUser.displayName}</p> : <p>Loading..</p>} 
                    </div>
                </div>
            </div>



           
        </>
    );
};

export default Navigationbar;