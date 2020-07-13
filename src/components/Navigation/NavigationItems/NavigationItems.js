import React from 'react'
import './NavigationItems.css'
import NavItem from './NavigationItem/NavItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavItem link="/" >Burger Builder</NavItem>
        {props.isAuthenticated ? <NavItem link="/orders">Orders</NavItem> : null}
        {!props.isAuthenticated
        ? <NavItem link="/auth">Sign In</NavItem>
        : <NavItem link="/logout">Log Out</NavItem>}
    </ul>
);

export default navigationItems;