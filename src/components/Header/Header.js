import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='header-nav'>
                <img src="images/Logo.svg" alt="" />
                <div className='header-links'>
                    <a href="#">Shop</a>
                    <a href="#">Orders</a>
                    <a href="#">Inventory</a>
                    <a href="#">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;