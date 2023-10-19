import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';

const SingleRecipe = ({ recipe }) => {
    const cookingMethods = recipe.cookingMethods;
    const steps = cookingMethods?.map(steps => steps.step);
    const descriptions = cookingMethods?.map(method => <>{method.description}</>)

    return (
        <div className="">


            <div className="card h-full bg-slate-100 text-black " onClick={() => document.getElementById('my_modal_4').showModal()}>
                <div className="card-body flex ">
                    <h2 className="card-title">{recipe?.name}</h2>
                    <div className="text-left">
                        <p className='font-bold'> Cooking Method:{steps.map(step => <small>{step},</small>)}</p>
                        <br />
                        <p className='font-bold'><span>Ingradients:</span> <small>{recipe.ingredients + ","}</small></p>
                        <br />
                        <p className='flex align-middle'>{recipe.rating} <FaStarHalfAlt></FaStarHalfAlt> </p>
                       
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn">Details</button>
                    </div>
                </div>
            </div>

            

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-3xl">{recipe?.name}</h3>
                    <div className="py-4">

                        <div className="text-left">
                            <div>
                                <h2 className='text-xl'>Cooking Method:</h2>

                                <div className="my-3">
                                    {steps.map((step, i) =>  {return <div key={i} className='mt-4'>
                                        <p className='ps-4'>Step {i + 1}: {step},</p>
                                        <p className='ps-9'>{descriptions}</p>
                                    </div>})}
                                </div>
                            </div>
                            <br />
                            <h2 className='text-xl'>Ingradients:</h2>
                            <p className='ps-4'>{recipe.ingredients + ","}</p>
                        </div>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SingleRecipe;