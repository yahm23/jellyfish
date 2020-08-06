import React from 'react'
import ReactVivus from 'react-vivus';
import Wires from '../../media/animationMedia/wiredAttempt.svg'

export default function WiredDevice() {
    return (
        <div>
            <div className="wiredAnimation">
                <img/>
                <ReactVivus
                        id="phoneDraw"
                        option={{
                        file: Wires,
                        duration: 450,
                        animTimingFunction: 'EASE',
                        type: 'delayed',
                        }}
                        style={{ width: '95%' }}
                    />
            </div>

        </div>
    )
}
