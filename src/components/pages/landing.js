import React from 'react'
import Iphone from '../media/iphoneTemplate.png'
import IphoneScreen from '../media/phoneTemp.png'


const Landing = () => {
    return (
        <div>
            <div className = "landingPageContent">
                <div className= "bannerContainer">
                        <h1 className="bannerTitle" >Take </h1>
                        <h1 className="clipping bannerTitle" >control </h1>
                    <h1 className="bannerTitle" >of your energy use</h1>
                </div>
                <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                    {/* <img className="iphone" src={Iphone}></img> */}
                    <img className="iphoneScreen"  src={IphoneScreen}></img>
            </div>
        </div>
    )
}

export default Landing
