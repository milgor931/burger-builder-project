import React from 'react';
import './NavItem.css';

import { NavLink } from 'react-router-dom';

const navItem = (props) => (
        <li className="NavItem">
            <NavLink
             to={props.link}
             exact
             >{props.children}</NavLink>
        </li>
);

export default navItem;