import React, { useState, useEffect } from 'react'

import SplitFlapDisplay from 'react-split-flap-display';
import Phone from '../structural/phone';
import Graph from '../structural/animatedFeatures/graph';
import AI from '../structural/animatedFeatures/aiCogs';
import { useMediaQuery } from 'react-responsive';


export default function Product() {
    const[reading, setReading] = useState(90)

    useEffect(() => {
        
        let interval = setInterval(() => {
            setReading(reading => reading + 1)}, 1200);
   
    }, [])

    let isMobile = useMediaQuery({ maxWidth: 723 });


    return (
        <div className="productPage">
            <div className="productBanner">
                <div className ="leadingGridTextPhone">
                    <h1 className="productBannerText">Get a view into your home you can’t get anywhere else.</h1>
                    <h1 className="productBannerBlurb"> See when the garage door opened, the television turned on, or when the dryer finished its cycle.</h1>
                    {/* {isMobile? <h1 className="productMobileArrow" >↓</h1>:<></>} */}
                </div>
                <Phone></Phone>
            </div>

            {isMobile?
                <>
                    <div className="featuresGrid">
                        <div className="animatedFeature">
                            <AI></AI>
                            <div className="mobileFeatureText">
                                <h4 className="featuresGridText">AI</h4>
                                <h5 className="featuresGridText">Ask jellyfish anything, & let our AI do the leg work for you.</h5>
                            </div>
                        </div>


                        <div className="">
                            <Graph></Graph>   
                            <div className="mobileFeatureText">
                                <h4 className="featuresGridText">Personalised Goals</h4>
                                <h5 className="featuresGridText">Check you are routinely meeting your energy goals.</h5>
                            </div>         
                        </div>


                        <div className="">
                            <div className="graphAnimated"> 

                                <SplitFlapDisplay
                                    className="animatedFeature"
                                    characterSet={['0', '1', '2', '3', '4', '5','6','7','8', '9']}
                                    value={reading.toString()}
                                    background="#E7286C"
                                    borderColor = "#1B1B1B"
                                    textColor = "#1B1B1B"
                                    />
                            </div>
                            <div className="mobileFeatureText">
                                <h4 className="featuresGridText"> Real time tracking </h4>
                                <h5 className="featuresGridText"> Monitor energy usage in real-time; see what's being used and how much it's using.</h5>
                            </div>
                        </div>
                        
                    </div>
                </>
                
                :

                <div className="featuresGrid">
                    <div className="animatedFeature">
                        <AI></AI>
                    </div>
                    <div>
                        <h4 className="featuresGridText">AI</h4>
                        <h5 className="featuresGridText">Ask jellyfish anything, & let our AI do the leg work for you.</h5>
                    </div>


                    <div className="">
                        <Graph></Graph>            
                    </div>
                    <div>
                        <h4 className="featuresGridText">Personalised Goals</h4>
                        <h5 className="featuresGridText">Check you are routinely meeting your energy goals.</h5>
                    </div>


                    <div className="">
                        <div className="graphAnimated"> 

                            <SplitFlapDisplay
                                className="animatedFeature"
                                characterSet={['0', '1', '2', '3', '4', '5','6','7','8', '9']}
                                value={reading.toString()}
                                background="#E7286C"
                                borderColor = "#1B1B1B"
                                textColor = "#1B1B1B"
                                />
                        </div>
                    </div>
                    <div>
                        <h4 className="featuresGridText"> Real time tracking </h4>
                        <h5 className="featuresGridText"> Monitor energy usage in real-time; see what's being used and how much it's using.</h5>
                    </div>
                    
                </div>
            
            }
        </div>
    )
}
