import React, { useContext, useEffect, useState } from 'react';
import ChefDetail from '../components/Chefdetail/ChefDetail';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../components/Recipes/Recipes';
import { DataContext } from '../context/DataPovider';

const ChefDetails = () => {
    const [detailChef,setDetailChef] = useState({})
    const {recipes} = useContext(DataContext)
    const chefDetail =useLoaderData()
    useEffect(()=>{
        setDetailChef(chefDetail)
    },[chefDetail]);


    const chefRecipes = recipes?.find(cr => cr.id ==detailChef.id)
    
    return (
        <div>
            <ChefDetail detailChef={detailChef}></ChefDetail>
            {chefRecipes && <Recipes recipes={chefRecipes}></Recipes>}
        </div>
    );
};

export default ChefDetails;