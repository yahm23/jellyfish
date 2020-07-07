import React from 'react'
import IphoneScreen from '../media/phoneTemp.png'
import Chevron from '../media/chevvy.svg'
import leccy from '../media/icons/leccy.png'
import time from '../media/icons/time.png'
import tree from '../media/icons2/treep.png'
import money from '../media/icons/money.png'
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

    const AnimatedArrow = () => {
        return(
        <div className="animArrow" data-aos="zoom-in" data-aos-duration="4000">
            <h1 >←</h1>
        </div>
    )
    }

    const BannerContainer = () => {
        return(
            <div className= "bannerContainer">
                <h1 className="bannerTitle" >Take </h1>
                <h1 className="clipping bannerTitle" >control </h1>
                <h1 className="bannerTitle" >of your energy use</h1>
                <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                {ArrowBounce('#section1')}
            </div>
        )
    }

    const PhonePreviewContainer = () => {
        return (
            <div id="section1" >
                <div  className="phonePreviewContainer">
                    <img className="iphoneScreen"  src={IphoneScreen}></img>
                    <AnimatedArrow></AnimatedArrow>
                    <h1 className="feature">Feature: bla bla monitor real time accuractely</h1>
                    <AnimatedArrow></AnimatedArrow>
                    <h1 className="feature">Keep track of your highest energy consuming devices</h1>
                    <AnimatedArrow></AnimatedArrow>
                    <h1 className="feature">Reduce your energy usage by tracking total</h1>
                </div>
                {ArrowBounce('#section2')}
            </div>
        )
    }
    
    const Expect = () => {
        return(
            <div id="section2">
                <h2 className="subheading">With jellyfish, you can expect more </h2>
                <div className='squareIcons'>
                    <div className="square"><img className="icons" src={leccy}></img></div>
                    <div className="square"><img className="icons" src={money}></img></div>
                    <div className="square"><img className="icons" src={tree}></img></div>
                    <div className="square"><img className="icons" src={time}></img></div>
                </div>

                {ArrowBounce('#section2')}
            </div>
        )
    }
    return (
        <div>
            <div className = "landingPageContent">
                <BannerContainer></BannerContainer>
                <PhonePreviewContainer></PhonePreviewContainer>
                <Expect></Expect>
            </div>
        </div>
    )
}

export default Landing
