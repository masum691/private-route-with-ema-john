import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    console.log(user)
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <span className="text-light ms-5 me-2">{user.displayName}</span>
                <img className="user-photo" src={user.photoURL} alt="" />
                {
                    user.email ?
                    <button onClick={logOut} className="btn btn-warning btn-sm fw-normal" >Log Out</button>
                    :
                    <NavLink to="/sign-in">Log In</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;