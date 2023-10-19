import React from 'react';
import { FaLock,FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className='flex justify-between my-3 text-sm'>
           <div className="left">
            <p>WE are professional Chef since 25 years</p>
           </div>
           <ul className='flex gap-3'>
            <li className='cursor-pointer' onClick={()=> alert('This Feature is under Development process')}>Language: English </li>
            <Link to="/login"><li className='flex pl-2  border-x-2 cursor-pointer hover:font-extrabold'>Login <span  className='rounded-full bg-black p-2 mx-2 hover:text-orange-400'><FaLock style={{fontSize:"12px"}}></FaLock></span></li></Link>
            <Link to="/register"><li className='flex cursor-pointer  hover:font-extrabold'>Register <span  className='rounded-full bg-black p-2 mx-2 hover:text-orange-400'><FaEdit style={{fontSize:"12px"}}></FaEdit></span></li></Link>
           </ul>
        </div>
    );
};

export default TopHeader;