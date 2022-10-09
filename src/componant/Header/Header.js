import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className='header_nav'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link>
                <Link to='order'>Order</Link>
                <Link to='invantory'>Invantory</Link>
                <Link to='about'>About</Link>
            </div>
        </div>
    );
};

export default Header;