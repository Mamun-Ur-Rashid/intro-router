import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate (`/post/${id}`);
    }
    return (
        <div className='border-blue-300 border rounded-2xl my-2 bg-lime-100 p-3'>
            <h2>This is post here!!</h2>
            <p>Id: {id}</p>
            <p>Title :{title}</p>
            <Link className='underline' to={`/post/${id}`}>Post Details</Link>
           <button className='border rounded-lg bg-slate-500 p-2 ml-2' onClick={handleNavigation}>Show details</button>
        </div>
    );
};

export default Post;