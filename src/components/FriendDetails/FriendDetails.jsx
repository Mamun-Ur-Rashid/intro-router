import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>Show me friend details data</h1>
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p>UserName: {friend.username}</p>
        </div>
    );
};

export default FriendDetails;