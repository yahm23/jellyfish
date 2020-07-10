import React from 'react'
import Logo from '../media/jelly.svg'
import IphoneScreen from '../media/jellyfishAppTemp.png'
import Chevron from '../media/chevvy.svg'
import leccy from '../media/icons/leccy.png'
import time from '../media/icons/time.png'
import tree from '../media/icons/tree.png'
import money from '../media/icons/money.png'
import JellyDevice from '../media/jellyDevice.png'
import jellyInUse from '../media/jellyInUse.png'
import plug from '../media/plug.svg'
import { useMediaQuery } from 'react-responsive'

import anime from 'animejs'
import Anime from 'react-anime'

import AOS from 'aos'
import Animation from '../structural/animation.js'
import ScrollPosition from '../structural/scrollPosition.js'
import { getElementError } from '@testing-library/react'


const Landing = () => {
    AOS.init();
    let isMobile = useMediaQuery({ maxWidth: 767 });

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
                <div className="bannerItems">
                    <div className = "bannerText">
                        <h1 className="bannerTitle" >Take </h1>
                        <h1 className="clipping bannerTitle" >control </h1>
                        <h1 className="bannerTitle" >of your energy use</h1>
                        <h2 className="bannerBlurb">Installed in your electric box, Jellyfish can save you money by accurately monitioring your energy use</h2>
                    </div>
                    <div>
                        <img  src={JellyDevice} width= "100%" height="auto"/> 
                    </div>
                </div>
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
                    <img className="jellyInUse" width="450px"src={jellyInUse}/>
                    <h2 className = "box1"> The device is installed simply by clamping directly into your electric panel. </h2>
                    <h2 className = "box2"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                    <h2 className = "box1"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
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
                    <div className="bannerText">
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
                        <img className="jellyInUse2"src={jellyInUse}/>
                        <h2 className = "feature mobileText"> The device is installed simply by clamping directly into your electric panel. </h2>
                        <h2 className = "feature mobileText"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                        <h2 className = "feature mobileText"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                        <h2 className = "feature mobileText"> Jellyfish is capable of montioring your electric usage by taking accurate readings at a rate of 1,000,000/s.</h2>
                    </div>

                    {/* <div className = "svgwave" > */}
                        
                            {/* <img className="svgwave" src={plug}/>  */}
                            {/* <svg className = "path" width="502" height="502"><path stroke-width="3" stroke="white" fill="none" stroke-linejoin="round" stroke-linecap="round" d="M398 859 c-58 -29 -78 -44 -78 -59 0 -18 -7 -20 -76 -20 -90 0 -133 -17 -172 -68 -24 -31 -27 -44 -27 -112 0 -68 3 -81 27 -112 50 -66 61 -68 395 -68 164 0 316 -5 338 -10 25 -6 52 -22 73 -44 27 -30 32 -43 32 -86 0 -43 -5 -56 -32 -86 -21 -22 -48 -38 -73 -44 -22 -5 -203 -10 -402 -10 -356 0 -363 0 -363 -20 0 -20 7 -20 396 -20 441 0 440 0 492 68 24 31 27 44 27 112 0 68 -3 81 -27 112 -50 66 -61 68 -395 68 -164 0 -316 5 -338 10 -25 6 -52 22 -72 44 -28 30 -33 43 -33 86 0 89 68 139 188 140 35 0 42 -3 42 -20 0 -15 20 -30 80 -60 l80 -40 150 0 150 0 0 40 0 40 78 0 c89 0 102 8 102 60 0 52 -13 60 -102 60 l-78 0 0 40 0 40 -152 0 -153 -1 -77 -40z m222 -99 l0 -100 -48 0 c-65 0 -212 69 -212 100 0 31 147 100 212 100 l48 0 0 -100z m120 0 l0 -100 -40 0 -40 0 0 100 0 100 40 0 40 0 0 -100z"></path></svg> */}
                            
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
