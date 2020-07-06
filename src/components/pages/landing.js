import React from 'react'
import IphoneScreen from '../media/phoneTemp.png'
import Chevron from '../media/chevvy.svg'


const Landing = () => {
    return (
        <div>
            <div className = "landingPageContent">
                <div className= "bannerContainer">
                        <h1 className="bannerTitle" >Take </h1>
                        <h1 className="clipping bannerTitle" >control </h1>
                    <h1 className="bannerTitle" >of your energy use</h1>
                    <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                    <div class="arrow bounce">
                        <a  href="#preview"><img width="100px" src={Chevron}></img></a>
                    </div>
                
                </div>
                <div id="preview" className="phonePreviewContainer">
                    <img className="iphoneScreen"  src={IphoneScreen}></img>
                </div>
            </div>
        </div>
    )
}

export default Landing
