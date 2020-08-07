import React from 'react'
import Device from '../media/animationMedia/device.png'
export default function Buy() {
    return (
        <div  className="rawPage">
            <div className="buyPage">
                    <h1 style={{textAlign:"center"}}className="productBannerText">Get Jellyfish.</h1>
                    <div className="buyingGrid">
                        <div >
                            <img width="100%" src={Device} />
                            <h1></h1>
                        </div>
                        
                        <div className="buyDescription">
                            <h1>Jellyfish</h1>
                            <h4>Monitor your home’s energy use. Our base model, for non-Solar homes.</h4>
                            <h5 className="buyDescription">Monitor your home’s energy use. This is our base model, with full functioanlity described on the site*</h5>
                        
                        </div>
                        
                        
                    </div>
            </div>
        </div>
    )
}
