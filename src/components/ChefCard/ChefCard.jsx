import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {

    return (
        <Link to={`chefs/${chef.id}`}>
            <div className="card  shadow-xl">
                <figure><img src={chef?.img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {chef?.name}
                        <div className="badge badge-secondary">{chef?.rating}</div>
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default ChefCard;