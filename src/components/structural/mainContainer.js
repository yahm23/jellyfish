import React, { Component } from 'react'
import Landing from '../pages/landing'
import NavbarTop from './navbar'
import { Route, Switch} from "react-router-dom";
import Footer from './footer';
import Product from '../pages/product';
import Technology from '../pages/technology';
import Support from '../pages/support';
import Buy from '../pages/buy';

const MainContainer = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Switch>
                <Route path='/' exact component={Landing}></Route>
                <Route path='/products' component={Product}></Route>
                <Route path='/technology' component={Technology}></Route>
                <Route path='/buy-jellyfish' component={Buy}></Route>
                <Route path='/support' component={Support}></Route>
                <Route path='/page-not-found' component={Support}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default MainContainer
