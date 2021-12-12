import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
           
            <div className='text-center my-3'>
                <img src={logo} className='logo' alt="" />
            </div>
            <nav className='nav-bar'>
                    <a href="/shop">Shop</a>
                    <a href="/orderreview">Order Reviw</a>
                    <a href="/inventory">Manage Inventory here</a>
            </nav>
            <div>
            
            </div>    
        </div>
    );
};

export default Header;