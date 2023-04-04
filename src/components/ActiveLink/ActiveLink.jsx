import React from 'react';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>isActive? "active": ""}
        >
            {children}
            
        </NavLink>
    );
};

export default ActiveLink;