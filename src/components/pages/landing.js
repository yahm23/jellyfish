import React from 'react'
import IphoneScreen from '../media/phoneTemp.png'
import Chevron from '../media/chevvy.svg'
import AOS from 'aos'


const Landing = () => {
    AOS.init();
    const ArrowBounce = (id) => {
        return (
            <div className="arrow bounce">
                <a  href={id}><img width="80px" src={Chevron}></img></a>
            </div>
        )
    }
    return (
        <div>
            <div className = "landingPageContent">
                <div className= "bannerContainer">
                        <h1 className="bannerTitle" >Take </h1>
                        <h1 className="clipping bannerTitle" >control </h1>
                    <h1 className="bannerTitle" >of your energy use</h1>
                    <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                    {ArrowBounce('#preview')}
                </div>
                <div id="preview" className="phonePreviewContainer">
                    <img className="iphoneScreen"  src={IphoneScreen}></img>
                    {/* <div data-aos-anchor=".phonePreviewContainer"  data-aos-anchor-placement="top-top" data-aos="anim1"> */}
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className="animArrow">←</h1>
                    </div>
                    <h1 className="feature">Feature: bla bla monitor real time accuractely</h1>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className="animArrow">←</h1>
                    </div>
                    <h1 className="feature">Keep track of your highest energy used devices</h1>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className="animArrow">←</h1>
                    </div>
                    <h1 className="feature">Reduce your energy usage by tracking total</h1>

                </div>
            </div>
        </div>
    )
}

export default Landing
