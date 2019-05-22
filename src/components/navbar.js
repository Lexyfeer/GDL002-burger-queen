import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
    <nav>
        <h2 className="logo">BURGUER QUEEN</h2>
        <ul className="navMenu">
            <li><NavLink className="navMenuLink" exact to="/" >LogIn</NavLink></li>
            <li><NavLink className="navMenuLink" to="/register" >LogOut</NavLink></li>
            <li><NavLink className="navMenuLink" to="/breakfast" >Desayuno</NavLink></li>
            <li><NavLink className="navMenuLink" to="/orderslist" >Orders list</NavLink></li>
        </ul>
    </nav>
);

export default NavBar;