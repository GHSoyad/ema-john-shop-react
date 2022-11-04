import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='header'>
            <nav className='header-nav'>
                <NavLink to="/">
                    <img src="images/Logo.svg" alt="" />
                </NavLink>
                <div className='header-links'>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/orders">Orders</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <a href='/'>
                        {user?.uid && user.email}
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;