import React, { useContext } from 'react';
import { DataContext } from '../../context/DataPovider';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const { chefs } = useContext(DataContext)
    return (
        <div className="my-12">
            <div className="flex justify-center mb-12">
                    <hr className='flex w-1/4 border mt-5 mx-5  border-x-0 border-orange-400'></hr>
                    <div><p className="text-3xl">Our Chefs</p></div>
                    <hr className='flex w-1/4 border mt-5 mx-5  border-x-0 border-orange-400'></hr>
                </div>
            <div className='grid grid-rows-3 grid-flow-col gap-4 my-12'>
                {chefs ?
                    <>{chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}</> :
                    <h2>Loading</h2>
                }
            </div>
        </div>
    );
};

export default Chefs;