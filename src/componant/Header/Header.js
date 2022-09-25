import React from 'react';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className='header_nav'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/invantory">Invantory</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;