import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import {Link} from "react-router-dom";
import Logo from '../media/jelly.svg'
import Comment from '../media/icons/comment.png'
import Tech from '../media/icons/chodeCable.png'
import { useMediaQuery } from 'react-responsive'

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
                            
                            <NavbarBrand href="/">
                                <img height="25px" src= {Logo} style={{marginRight:10}} />
                                Home
                            </NavbarBrand>
                            <Modal.Footer></Modal.Footer>

                            <NavbarBrand href="/products">
                                <img height="25px" src= {Logo} style={{marginRight:10}} />
                                Products
                            </NavbarBrand>
                            <Modal.Footer></Modal.Footer>

                            <NavbarBrand href="/technology">
                                <img height="30px" src= {Tech} style={{marginRight:10}} />
                                 Technology
                            </NavbarBrand>
                            <Modal.Footer></Modal.Footer>

                            <NavbarBrand href="/support">
                                <img height="25px" src= {Comment} style={{marginRight:10}} />
                                Contact
                            </NavbarBrand>
                            <Modal.Footer></Modal.Footer>

                            <NavbarBrand href="/buy-jellyfish">
                                <img height="25px" src= {Logo} style={{marginRight:10}} />
                                Buy Jellyfish
                            </NavbarBrand>
                            <Modal.Footer></Modal.Footer>

                        </Modal.Body>
                       
                    </Modal>
                </>


            </div>
            
            :
            <div className="entireNavbar">
                    <Link to="/"><img className="logo" src={Logo}></img></Link>
                
                        <Navbar className = "navbar" expand="lg" variant="light" >
                            <NavbarBrand href="/products">Products</NavbarBrand>
                            <NavbarBrand href="/technology">Technology</NavbarBrand>
                            <NavbarBrand href="/support">Support</NavbarBrand>
                            <NavbarBrand id= "button" href="/buy-jellyfish">
                            <button  className="navbarButton">Buy Jellyfish</button>
                        </NavbarBrand>
                        
                    </Navbar>
    

                
                    
            </div>}
        </div>
    )
}

export default NavbarTop
