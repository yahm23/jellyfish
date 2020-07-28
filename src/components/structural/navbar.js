import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import {Link} from "react-router-dom";
import Logo from '../media/jelly.svg'
import boiger from '../media/Hamburger_icon.svg'
import { useMediaQuery } from 'react-responsive'

const NavbarTop = () => {
    let isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div>{ isMobile? 
            <div className="entireNavbar">
                <Link to="/"><img className="logo" src={Logo}></img></Link>
                <img className="logo" src={boiger}></img>
            </div>
            
            :
            <div className="entireNavbar">
                    <Link to="/"><img className="logo" src={Logo}></img></Link>
                
                    <Navbar className = "navbar" expand="lg" variant="light" bg="light">
                        <NavbarBrand href="/products">Products</NavbarBrand>
                        <NavbarBrand href="/technology">Technology</NavbarBrand>
                        <NavbarBrand href="/support">Support</NavbarBrand>
                        {/* <NavbarBrand href="/selling">Selling</NavbarBrand> */}
                        <NavbarBrand id= "button" href="/buy-jellyfish">
                        <button  className="navbarButton">Buy Jellyfish</button>

                        </NavbarBrand>
                        
                    </Navbar>
                    
                    
            </div>}
        </div>
    )
}

export default NavbarTop
