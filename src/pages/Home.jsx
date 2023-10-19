import React, { useContext } from 'react';
import Hero from '../components/Hero/Hero';
import { DataContext } from '../context/DataPovider';
import { IoRestaurantSharp } from 'react-icons/io5';
import TransBanner from '../components/TransBanner/TransBanner';
import Chefs from '../components/Chefs/Chefs';

const Home = () => {
    const { recipes } = useContext(DataContext)
    let allRecipes = []

    if (recipes) {
        for (const recipe of recipes) {
            const arrayRercipe = recipe.chefRecipes
            const RecipesNames = arrayRercipe.map(r => allRecipes.push(r.name))
        }
    }
    return (
        <div>
            <Hero></Hero>
            <div>
                <div className="w-100 p-10">
                    <h3 className='text-3xl text-center mb-4'>Featured Recipes</h3>
                    <div className="flex justify-center mb-12">
                        <hr className='flex w-1/4 border mt-5 mx-5  border-x-0'></hr>
                        <span><IoRestaurantSharp className='text-4xl text-orange-400'></IoRestaurantSharp></span>
                        <hr className='flex w-1/4 border mt-5 mx-5  border-x-0'></hr>
                    </div>
                    {
                        allRecipes.map(singleRecipe => <p className="btn m-2">{singleRecipe}</p>)
                    }
                </div>
            </div>
            <TransBanner></TransBanner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;