import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData()

    return (
        <div>
            <h1 className='text-2xl text-center my-10'>Blogs</h1>
            <hr />
            <br />
            {
                blogs?.map(blog => {
                    return <div key={blog.id} className="card bg-slate-400 text-black my-4">
                        <div className="card-body">
                        <span className="w-8 p-2 bg-red-300 rounded-full text-black"><FaUserAlt className="rounded-full  "></FaUserAlt></span>
                            <h2 className="card-title">{blog?.title}</h2>
                            <p>{blog.content}</p>
                            
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Blog;