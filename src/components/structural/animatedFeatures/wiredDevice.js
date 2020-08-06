import React from 'react'
import ReactVivus from 'react-vivus';
import Wires from '../../media/wiredAttempt.svg'

export default function WiredDevice() {
    return (
        <div>
            <div>

            <ReactVivus
                    id="phoneDraw"
                    option={{
                    file: Wires,
                    duration: 150,
                    animTimingFunction: 'EASE',
                    type: 'delayed',
                    }}
                    style={{ width: '95%' }}
                />
            </div>

        </div>
    )
}
