import React, { Component } from 'react'
import JellyDevice from '../media/jellyDevice.png'

const WireDeviceAnimation = (value,threshold) => {
    if(value > threshold){
    return (
        <div>
            <div className="wires">
                {value > threshold? 
                
                <div className="wire" id="box1">
                    <svg viewBox="0 0 100 100" >
                    <g  className = "animation" transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)">
                        <path  d="M398 859 c-58 -29 -78 -44 -78 -59 0 -18 -7 -20 -76 -20 -90 0 -133
                                        -17 -172 -68 -24 -31 -27 -44 -27 -112 0 -68 3 -81 27 -112 50 -66 61 -68 395
                                        -68 164 0 316 -5 338 -10 25 -6 52 -22 73 -44 27 -30 32 -43 32 -86 0 -43 -5
                                        -56 -32 -86 -21 -22 -48 -38 -73 -44 -22 -5 -203 -10 -402 -10 -356 0 -363 0
                                        -363 -20 0 -20 7 -20 396 -20 441 0 440 0 492 68 24 31 27 44 27 112 0 68 -3
                                        81 -27 112 -50 66 -61 68 -395 68 -164 0 -316 5 -338 10 -25 6 -52 22 -72 44
                                        -28 30 -33 43 -33 86 0 89 68 139 188 140 35 0 42 -3 42 -20 0 -15 20 -30 80
                                        -60 l80 -40 150 0 150 0 0 40 0 40 78 0 c89 0 102 8 102 60 0 52 -13 60 -102
                                        60 l-78 0 0 40 0 40 -152 0 -153 -1 -77 -40z m222 -99 l0 -100 -48 0 c-65 0
                                        -212 69 -212 100 0 31 147 100 212 100 l48 0 0 -100z m120 0 l0 -100 -40 0
                                        -40 0 0 100 0 100 40 0 40 0 0 -100z" fill="transparent" />
                    </g>
                    </svg>
                    </div> 
                    :
                    <></>
                    
                }
                <img className="deviceAnim" width="100%" height="auto" src={JellyDevice}></img>
                {value > threshold? 
                
                    <div className="wire">
                    <svg viewBox="0 0 100 100" transform="scale(-1,1)">
                    <g  className = "animation" transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)">
                        <path  d="M398 859 c-58 -29 -78 -44 -78 -59 0 -18 -7 -20 -76 -20 -90 0 -133
                                        -17 -172 -68 -24 -31 -27 -44 -27 -112 0 -68 3 -81 27 -112 50 -66 61 -68 395
                                        -68 164 0 316 -5 338 -10 25 -6 52 -22 73 -44 27 -30 32 -43 32 -86 0 -43 -5
                                        -56 -32 -86 -21 -22 -48 -38 -73 -44 -22 -5 -203 -10 -402 -10 -356 0 -363 0
                                        -363 -20 0 -20 7 -20 396 -20 441 0 440 0 492 68 24 31 27 44 27 112 0 68 -3
                                        81 -27 112 -50 66 -61 68 -395 68 -164 0 -316 5 -338 10 -25 6 -52 22 -72 44
                                        -28 30 -33 43 -33 86 0 89 68 139 188 140 35 0 42 -3 42 -20 0 -15 20 -30 80
                                        -60 l80 -40 150 0 150 0 0 40 0 40 78 0 c89 0 102 8 102 60 0 52 -13 60 -102
                                        60 l-78 0 0 40 0 40 -152 0 -153 -1 -77 -40z m222 -99 l0 -100 -48 0 c-65 0
                                        -212 69 -212 100 0 31 147 100 212 100 l48 0 0 -100z m120 0 l0 -100 -40 0
                                        -40 0 0 100 0 100 40 0 40 0 0 -100z" fill="transparent" />
                    </g>
                    </svg>
                </div>
                    :
                    <></>
                    
                }


                
            </div>
        </div>
    )} else {
        return null
    }

}

// export default WireDeviceAnimation
