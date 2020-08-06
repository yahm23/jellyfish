import React from 'react'
import ReactVivus from 'react-vivus';
import devices from '../../media/animationMedia/devices.svg'
import graph from '../../media/animationMedia/bars.svg'

export default function Phone() {
    return (
        
       <div className = "iphoneMock" >
            <div className = "screen">
                
                <ReactVivus
                    id="phoneDraw"
                    option={{
                    file: devices,
                    duration: 150,
                    animTimingFunction: 'EASE',
                    type: 'delayed',
                    }}
                    style={{ width: '95%' }}
                />
                
                <ReactVivus
                    id="phoneDraw2"
                    option={{
                    file: graph,
                    duration: 50,
                    animTimingFunction: 'EASE',
                    type: 'delayed',
                    }}
                    style={{ width: '90%', margin:'0 auto' }}
                />
            </div>
            <div className ="homeButton"></div>
       
    </div>
    )
}
