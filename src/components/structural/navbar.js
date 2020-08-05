import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import {Link} from "react-router-dom";
import Logo from '../media/jelly.svg'
import boiger from '../media/Hamburger_icon.svg'
import { useMediaQuery } from 'react-responsive'
import Button from 'react-bootstrap/Button';

const NavbarTop = () => {
    const[hamburgerActive,toggle] = useState(false)

    let isMobile = useMediaQuery({ maxWidth: 767 });

    const clickHandler = () =>{
        toggle(!hamburgerActive)

    }


    return (
        <div>{ isMobile? 
            <div>

                <div className="entireNavbar">
                    <Link to="/" onClick={()=>toggle(false)}><img className="logo" src={Logo}></img></Link>
                    <button onClick={clickHandler} className={  "hamburger hamburger--squeeze "  +(hamburgerActive? "is-active":"")} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>

                <>

                    <Modal show={hamburgerActive} onHide={clickHandler}>
                        
                        <Modal.Body>
                            <NavbarBrand href="/">Home</NavbarBrand>
                            <Modal.Footer></Modal.Footer>
                            <NavbarBrand href="/products">Products</NavbarBrand>
                            <Modal.Footer></Modal.Footer>
                            <NavbarBrand href="/technology">Technology</NavbarBrand>
                            <Modal.Footer></Modal.Footer>
                            <NavbarBrand href="/contact">Contact</NavbarBrand>
                            <Modal.Footer></Modal.Footer>
                        </Modal.Body>
                       
                    </Modal>
                </>


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
            
                    <button onClick={clickHandler} className={  "hamburger hamburger--squeeze "  +(hamburgerActive? "is-active":"")} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                

                
                    
            </div>}
        </div>
    )
}

export default NavbarTop
