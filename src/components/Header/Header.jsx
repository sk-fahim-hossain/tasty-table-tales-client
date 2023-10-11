import React from 'react';
import TopHeader from '../shared/TopHeader/TopHeader';
import './Header.css';
import Navigationbar from '../shared/Navigationbar/Navigationbar';
import Hero from '../Hero/Hero';

const Header = () => {
    return (
        <>
            <div className='hidden md:block lg:block'>
                <TopHeader></TopHeader>
            </div>
            <header className='header'>
                <Navigationbar></Navigationbar>
            </header>
        </>
    );
};

export default Header;