import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const Layout = props => {
    
    const [sideDrawer, setSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawer(false)
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawer(!sideDrawer)
    }

        return (
            <Aux>
                <Toolbar
                 drawerToggleClicked={sideDrawerToggleHandler}
                 isAuth={props.isAuthenticated}/>
                <SideDrawer open={sideDrawer} closed={sideDrawerClosedHandler} isAuth={props.isAuthenticated}/>
                <main className="content">
                    {props.children}
                </main>
            </Aux>
        )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

export default connect(mapStateToProps)(Layout);