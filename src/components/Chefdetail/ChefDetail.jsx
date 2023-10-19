import React from 'react';

const ChefDetail = ({ detailChef }) => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row">
                <img src={detailChef?.img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">{detailChef?.name}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                    <p>{detailChef?.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefDetail;