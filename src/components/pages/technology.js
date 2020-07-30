import React, {useEffect} from 'react'
import Vivus from 'vivus';
import ReactVivus from 'react-vivus';
import Test from '../media/homeTest.svg'
import bed from '../media/bedframe.svg'
import bed1 from '../media/devices.svg'

export default function Technology() {

    return (
        <div className= "productPage">
            <h1 className="productBannerText">Technology</h1>
           <div className = "iphoneMock" >
                <div className = "screen">
                    {/* <ReactVivus
                        id="foo"
                        option={{
                        file: bed,
                        duration: 200,
                        animTimingFunction: 'EASE',
                        type: 'delayed',
                        }}
                        style={{ height: '200px', width: '200px' }}
                    /> */}
                    <ReactVivus
                        id="phoneDraw"
                        option={{
                        file: bed1,
                        duration: 200,
                        animTimingFunction: 'EASE',
                        type: 'delayed',
                        }}
                        style={{ width: '95%' }}
                    />
                </div>
                <div className ="homeButton"></div>
           </div>
        </div>
    )
}
