import React from 'react';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const Recipes = ({recipes}) => {
    const chefRecipes = recipes.chefRecipes;
    return (
        <div>
            <p className='text-2xl'>All recipes here</p>
            <div className='grid grid-cols-3 grid-flow-col gap-4 my-12 '>
                {
                    chefRecipes?.map((recipe,index) => <SingleRecipe key={index} recipe={recipe}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;