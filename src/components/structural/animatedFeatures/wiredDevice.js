import React from 'react'
import ReactVivus from 'react-vivus';
import Wires from '../../media/animationMedia/wiredAttempt2.svg'
import deviceMock from '../../media/animationMedia/device.png'



export default function WiredDevice() {
    return (
            <div className="wiredAnimation">
                <img className="deviceWired" src={deviceMock} />
                <ReactVivus
                        id="wires"
                        option={{
                        file: Wires,
                        duration: 250,
                        animTimingFunction: 'EASE_OUT',
                        type: 'sync',
                        // reverseStack:true
                        }}
                        style={{ width: '95%' }}
                    />
            </div>

    )
}
