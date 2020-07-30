import React, {useEffect} from 'react'
// import Vivus from 'vivus';
import ReactVivus from 'react-vivus';
import devices from '../media/devices.svg'
import graph from '../media/bars.svg'

export default function Technology() {

    return (
        <div className= "productPage">
            <h1 className="productBannerText">Technology</h1>
           <div className = "iphoneMock" >
                <div className = "screen">
                    
                    <ReactVivus
                        id="phoneDraw"
                        option={{
                        file: devices,
                        duration: 200,
                        animTimingFunction: 'EASE',
                        type: 'delayed',
                        }}
                        style={{ width: '95%' }}
                    />
                    
                    <ReactVivus
                        id="phoneDraw2"
                        option={{
                        file: graph,
                        duration: 200,
                        animTimingFunction: 'EASE',
                        type: 'delayed',
                        }}
                        style={{ width: '90%', margin:'0 auto' }}
                    />
                </div>
                <div className ="homeButton"></div>
           </div>
        </div>
    )
}
