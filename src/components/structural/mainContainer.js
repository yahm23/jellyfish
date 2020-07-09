import React, { Component } from 'react'
import Landing from '../pages/landing'
import NavbarTop from './navbar'
import { Route, Switch} from "react-router-dom";
import Footer from './footer';

const MainContainer = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Switch>
                <Route to='/' component={Landing}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default MainContainer
