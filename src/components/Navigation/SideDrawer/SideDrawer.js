import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {

    let style = {
        position: 'fixed',
        width: '280px',
        maxWidth: '70%',
        height: '100%',
        left: '0',
        top: '0',
        zIndex: '200',
        backgroundColor: 'white',
        padding: '32px 16px',
        boxShadow: 'border-box',
        transition: 'transform 0.3s ease-out'
    }

    props.open ? style['transform'] = "translateX(0)" : style['transform'] = "translateX(-100%)"

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div
            onClick={props.closed}
                style={style} className="SideDrawer">
                <div style={{height: "11%"}}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
    );
    
}

export default sideDrawer;