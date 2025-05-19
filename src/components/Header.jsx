import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-5 py-10'>
            <NavLink className='' to='/'>Home</NavLink>
            <NavLink className='' to='/users'>Users</NavLink>
            <NavLink className='' to='/signin'>SignIn</NavLink>
        </div>
    );
};

export default Header;