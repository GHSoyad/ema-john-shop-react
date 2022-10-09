import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                </div>
            </nav>
        </div>
    );
};

export default Header;