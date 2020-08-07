import React, { useState } from 'react'
import Device from '../media/animationMedia/device.png'

import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'



export default function Buy() {
    const[show, toggle] = useState(false);
    const clickHandler = () =>{
        toggle(!show)

    }
    return (
        <div  className="rawPage">
            <div className="buyPage">
                    <h1 style={{textAlign:"center"}}className="productBannerText">Get Jellyfish.</h1>
                    <div className="buyingGrid">
                        <div >
                            <img width="100%" src={Device} />
                            <div className="buyPagesButtons">
                                <Link to='/buy-jellyfish'>
                                    <Button id="biggerBuy" className="navbarButton cartButton">Buy Now</Button>
                                </Link>
                                <Link to='/buy-jellyfish'>
                                    <Button id="biggerBuy" className="navbarButton cartButton">Add to Cart</Button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="buyDescription">
                            <h1>Jellyfish</h1>
                            <h4 >Monitor your home’s energy use. This is our base model, with full functioanlity described on the site*</h4>
                            <ul>
                                <h5> - Real-time energy use</h5>
                                <h5> - Machine-learning device detection</h5>
                                <h5> - Historical usage and trends</h5>
                                <h5> - Bill tracking and goal-setting </h5>
                            </ul>

                            <a onClick={()=>clickHandler()}>{show?  "- Show Less":"+ Show More "} </a>
                                {show? 
                                    <div>
                                        <h3>Includes:</h3>
                                        <ul>
                                            <h5> - 1 Sense monitor</h5>
                                            <h5> - 1 set of 2 current sensors</h5>
                                            <h5> - 1 antenna</h5>
                                            <h5> - 1 power cable </h5>
                                        </ul>
                                    </div>
                                    :

                                    <></>
                                
                                }

                        </div>
                        
                        
                    </div>
            </div>
        </div>
    )
}
