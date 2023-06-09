import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar' >
            <NavLink to="/">Home</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default Header;