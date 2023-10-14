import React from 'react';


const TransBanner = () => {
    return (
        <div className="rounded-md hero max-h-[500px] overflow-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className=" text-5xl font-bold">Word's Best Chefs</h1>
                        <p className="mb-5">Welcome to our culinary paradise, where delectable inspiration meets your kitchen. Explore a world of chef-crafted recipes, expert tips, and food adventures that will tantalize your taste buds and elevate your cooking game. Whether you're a seasoned pro or a novice in the kitchen, we're here to empower you with the tools and flavors to create unforgettable dishes. Join us on this flavorful journey and turn every meal into a masterpiece</p>
                        
                    </div>

                </div>
                <div className="max-w-md">
                    <img src="https://i.ibb.co/KwGCGCZ/photo-1583394293214-28ded15ee548-removebg-preview.png" className='z-50 W-100' alt="" />
                </div>
            </div>
        </div>
    );
};

export default TransBanner;