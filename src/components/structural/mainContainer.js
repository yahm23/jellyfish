import React, { Component } from 'react'
import Landing from '../pages/landing'
import NavbarTop from './navbar'
import { Route, Switch} from "react-router-dom";

const MainContainer = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Switch>
                <Route to='/' component={Landing}></Route>
            </Switch>
        </div>
    )
}

export default MainContainer
