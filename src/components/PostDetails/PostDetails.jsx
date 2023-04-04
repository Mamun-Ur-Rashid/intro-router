import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post)
    const navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(-1);
    }
    return (
        <div className='w-3/6 bg-rose-200 p-4 border-solid rounded-2xl border-lime-600 m-auto mt-8'>
            <h2>Post details here!!</h2>
            <p>Id: {post.id}</p>
            <p>Title : {post.title}</p>
            <p>{post.body}</p>
            <button className='border rounded-lg bg-slate-500 p-2' onClick={handleNavigation}>Go Back</button>
        </div>
    );
};

export default PostDetails;