import React from 'react'
import IphoneScreen from '../media/jellyfishWithIphone.png'
import Chevron from '../media/chevvy.svg'
import leccy from '../media/icons/leccy.png'
import time from '../media/icons/time.png'
import tree from '../media/icons/tree.png'
import money from '../media/icons/money.png'
import JellyDevice from '../media/animationMedia/device.png'
import jellyInUse from '../media/animationMedia/device.png'
import { useMediaQuery } from 'react-responsive'


import AOS from 'aos'
import ScrollPosition from '../structural/scrollPosition.js'
import WiredDevice from '../structural/animatedFeatures/wiredDevice'


const Landing = () => {
    AOS.init();
    let isMobile = useMediaQuery({ maxWidth: 723 });

    const ArrowBounce = (id) => {
        return (
            <div className="arrow bounce">
                <a  href={id}><img width="25vw" src={Chevron}></img></a>
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
                
                <div className="">
                    <div className = "bannerText">
                        <div>
                            <h1 className="bannerTitle" >Take </h1>
                            <h1 className="clipping bannerTitle" >control </h1>
                            <h1 className="bannerTitle" >of your energy use</h1>
                        </div>
                    <div style = {{placeSelf:'center'}} >
                        <img  src={JellyDevice} width= "50%" height="auto"/> 
                    </div>
                        <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                    </div>
                </div>
                {/* <div className="bannerItems">
                    <div className = "bannerText">
                        <h1 className="bannerTitle" >Take </h1>
                        <h1 className="clipping bannerTitle" >control </h1>
                        <h1 className="bannerTitle" >of your energy use</h1>
                        <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                    </div>
                    <div style={{alignSelf:'center',width:"60%"}}>
                        <img  src={JellyDevice} width= "100%" height="auto"/> 
                    </div>
                </div> */}



                    {ArrowBounce('#section1')}
            </div>
        )
    }

    const PhonePreviewContainer = () => {
        return (
            <div id="section1" >
                <h2 className="subheading">A dedicated Jellyfish app. </h2>
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

    const Icon = (url,text) => {
        return(
            <div className="iconDescription" data-aos="zoom-in" data-aos-duration="500" >
                <div className="square"><img className="icons" src={url}></img></div>
        <h2 className="iconText">{text}</h2>
            </div>
        )
    }

    const Expect = () => {
        
        return(
            <div id="section2">
                <h2 className="subheading inline">With Jellyfish, you can expect </h2>
                {ScrollPosition()[0] > ScrollPosition()[1]?
                 <>
                    <s className="subheading inline">more.</s> 
                    <h2 data-aos-duration="3000" data-aos="zoom-in"  className="subheading inline animatedBetter">  better </h2></>
                 :
                 <h2 className="subheading inline"> more. </h2>}
                
                
                    <div className='squareIcons'>
                        {Icon(leccy,"Monitor your electric use at any time")}
                        {Icon(money,"Save money by reducing your electric bill")}
                        {Icon(tree,"Reduce your carbon footprint")}
                        {Icon(time,"Real-time readings of your electrical use")}
                    </div>
                    
                {ArrowBounce('#section3')}
            </div>
        )
    }
    
    const Technology = () => {
        return (
            <div id="section3">
                <h2 className="subheading">Our technology is unique.</h2>
                <div className="device">
                    <div className="jellyInUse">
                        <WiredDevice></WiredDevice>
                    </div>
                    {/* <img className="jellyInUse" width="55%"src={jellyInUse}/> */}
                    <h2 className = "box2"> The device is installed simply by clamping directly into your electric panel. </h2>
                    <h2 className = "box2"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                    <h2 className = "box2"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                </div>
                {ArrowBounce('#section4')}
            </div>
        )
    }

    const  GetStarted = () => {
        return (
            <div id="section4">
                <div className = "getStarted" >
                    <h1 className="subheadingStarted"> Get Started with Jellyfish.</h1>
                    <h1 className="box2"> Sign up to get started today. </h1>
                    <button id="biggerBuy" className="navbarButton">Buy Jellyfish</button>

                </div>
                {/* <h1> Get Started with Jellyfish</h1> */}
            </div>
        )
    }

    const NormalLanding = () => {
        return (
            <div className = "landingPageContent">
                <BannerContainer></BannerContainer>
                <PhonePreviewContainer></PhonePreviewContainer>
                <Expect></Expect>
                <Technology></Technology>
                <GetStarted></GetStarted>
            </div>
        )
    }
    const MobileLanding = () => {   

        const styles = {
            circle: {
              width: 64,
              height: 64,
              borderRadius: '100%',
              background: 'steelblue',
            },
          };
          
        return(
            <div>
                <div>
                    <img className="deviceMobile" src={JellyDevice}/> 
                    <div className="bannerTextMobile">
                        <h1 className="bannerTitle" >Take </h1>
                        <h1 className="clipping bannerTitle" >control </h1>
                        <h1 className="bannerTitle" >of your energy use</h1>
                        <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                        <button id="biggerBuy"  className="navbarButton">Buy Jellyfish</button>
                    </div>
                    <div>
                        <img className="iphoneScreen"  src={IphoneScreen}></img>
                        <h1 className="feature"> Feature: bla bla monitor real time accuractely</h1>
                        <h1 className="feature"> Keep track of your highest energy consuming devices</h1>
                        <h1 className="feature"> Reduce your energy usage by tracking total</h1>
                    </div>

                    <div id="section2"> 
                        <h2 className="subheading inline">With Jellyfish, you can expect </h2>
                        {ScrollPosition()[0] > ScrollPosition()[1]?
                        <>
                        <s className="subheading inline">more.</s> 
                        <h2 data-aos-duration="3000" data-aos="zoom-in"  className="subheading inline animatedBetter">  better </h2></>
                        :
                        <h2 className="subheading inline"> more. </h2>}
                        <div className='squareIcons'>
                            {Icon(leccy,"Monitor your electric use at any time")}
                            {Icon(money,"Save money by reducing your electric bill")}
                            {Icon(tree,"Reduce your carbon footprint")}
                            {Icon(time,"Real-time readings of your electrical use")}
                        </div>
                    </div>
                    
                    <div id="section2"> 
                        <h2 className="subheading">Our technology is unique.</h2>
{/*                         
                        <div className="jellyInUse2">
                            <WiredDevice></WiredDevice>
                        </div> */}
                            {/* <WiredDevice></WiredDevice> */}
                        <img className="jellyInUse2"src={jellyInUse}/>
                        <h2 className = "feature mobileText"> The device is installed simply by clamping directly into your electric panel. </h2>
                        <h2 className = "feature mobileText"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                        <h2 className = "feature mobileText"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                    </div>
                    <div className="bannerTextMobile">
                        <button id="biggerBuy"  className="navbarButton">Buy Jellyfish</button>
                    </div>

                    {/* Scroll vlaue to trigger animation should be passed in  */}
                    {/* {WireDeviceAnimation(9,8)} */}
                </div>

            </div>
        )

    }
    return (
        <div>
            
            {isMobile? 
            <MobileLanding></MobileLanding> :
            <NormalLanding></NormalLanding>}
        </div>
    )
}

export default Landing
