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
                    <Link to="/"><img className="logo" src={Logo}></img></Link>
                
                    <Navbar className = "navbar" expand="lg" variant="light" bg="light">
                        <NavbarBrand href="/">Home</NavbarBrand>
                        <NavbarBrand href="/buying">Buying</NavbarBrand>
                        <NavbarBrand href="/renting">Renting</NavbarBrand>
                        {/* <NavbarBrand href="/selling">Selling</NavbarBrand> */}
                        <NavbarBrand href="/contact">Contact</NavbarBrand>
                        
                    </Navbar>
            </div>
        </div>
    )
}

export default NavbarTop
