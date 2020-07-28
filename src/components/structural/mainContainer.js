import React, { Component } from 'react'
import Landing from '../pages/landing'
import NavbarTop from './navbar'
import { Route, Switch} from "react-router-dom";
import Footer from './footer';
import Product from '../pages/product';

const MainContainer = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Switch>
                <Route path='/' exact component={Landing}></Route>
                <Route path='/products' component={Product}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default MainContainer
