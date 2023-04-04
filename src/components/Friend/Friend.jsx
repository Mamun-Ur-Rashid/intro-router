import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {name, id , phone, email} = friend;
    return (
        <div className='border  rounded-lg my-4'>
            <h3>Name: {name}</h3>
            <p>Id: {id}</p>
            <p>Phone: {phone}</p>
            <p>email: {email}</p>
            <Link to={`/friend/${id}`}>Show me Details</Link>
        </div>
    );
};

export default Friend;