import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const[chefs,setChefs] = useState(null)
    const[recipes,setRecipes] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(info =>setRecipes(info) )
    },[])
    const infos ={
        chefs,
        recipes,
    }
    return (
       <DataContext.Provider value={infos}>
        {children}
       </DataContext.Provider>
    );
};

export default DataProvider;