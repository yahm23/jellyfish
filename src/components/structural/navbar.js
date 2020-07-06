import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import {Link} from "react-router-dom";
import Logo from '../media/jelly.svg'

const NavbarTop = () => {
    return (
        <div>
            <div className="entireNavbar">
                    <Link to="/"><img className="logo" height="150px" src={Logo}></img></Link>
                
                    <Navbar className = "" expand="lg" variant="light" bg="light">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Brand href="/buying">Buying</Navbar.Brand>
                        <Navbar.Brand href="/renting">Renting</Navbar.Brand>
                        {/* <Navbar.Brand href="/selling">Selling</Navbar.Brand> */}
                        <Navbar.Brand href="/contact">Contact</Navbar.Brand>
                        
                    </Navbar>
            </div>
        </div>
    )
}

export default NavbarTop
