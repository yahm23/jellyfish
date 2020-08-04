import React, { useState, useEffect } from 'react'

import SplitFlapDisplay from 'react-split-flap-display';
import Phone from '../structural/phone';
import Graph from '../structural/animatedFeatures/graph';
import AI from '../structural/animatedFeatures/aiCogs';

export default function Product() {
    const[reading, setReading] = useState(90)

    useEffect(() => {
        
        let interval = setInterval(() => {
            setReading(reading => reading + 1)}, 1200);
   
    }, [])


    return (
        <div className="productPage">
            <div className="productBanner">
                <div className ="leadingGridTextPhone">
                    <h1 className="productBannerText">Get a view into your home you can’t get anywhere else.</h1>
                    <h1 className="productBannerBlurb"> See when the garage door opened, the television turned on, or when the dryer finished its cycle.</h1>
                </div>
                <Phone></Phone>
            </div>


            <div className="featuresGrid">
                <div className="animatedFeature">
                    <AI></AI>
                </div>
                <div>
                    <h1 className="featuresGridText">AI</h1>
                    <h2 className="featuresGridText">Ask jellyfish anything, & let our AI do the leg work for you.</h2>
                </div>


                <Graph></Graph>            
                <div>
                    <h1 className="featuresGridText">Personalised Goals</h1>
                    <h2 className="featuresGridText">Personalised Goals</h2>
                </div>


                <div className="animatedFeature">
                    <SplitFlapDisplay
                        className="animatedFeature"
                        characterSet={['0', '1', '2', '3', '4', '5','6','7','8', '9']}
                        value={reading.toString()}
                        background="#E7286C"
                        borderColor = "#1B1B1B"
                        textColor = "#1B1B1B"
                    />
                </div>
                <div>
                    <h1 className="featuresGridText">Real time tracking</h1>
                    <h2 className="featuresGridText">Real time tracking</h2>
                </div>
                
            </div>


        </div>
    )
}
