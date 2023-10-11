import React from 'react';
import {IoRestaurantSharp} from "react-icons/io5";


const Hero = () => {
    return (
        <>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className='w-full opacity-20	h-[calc(100vh-167px)]' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12'>
                    <h3 className='text-3xl mb-3'>ITS ALL ABOUT GOOD FOOD & TASTE</h3>
                    <h5 className='mb-3 tracking-wide'>RECIPES EVERY WEEKS UPDATES</h5>
                    <div className="flex justify-center mt-4">
                        <div className='w-1/4 border py-1 mx-5 border-x-0'></div>
                        <span><IoRestaurantSharp className='text-4xl text-orange-400'></IoRestaurantSharp></span>
                        <div className='w-1/4 border py-1 mx-5 border-x-0'></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;