import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <nav>
        <NavLink activeClassName="navlink-active" exact to="/">Home</NavLink>
        <NavLink activeClassName="navlink-active" exact to="/create">Create new expense</NavLink>
        <NavLink activeClassName="navlink-active" exact to="/help">Help</NavLink>
    </nav>
);

export default Nav;
