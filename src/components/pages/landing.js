import React from 'react'
import IphoneScreen from '../media/jellyfishAppTemp.png'
import Chevron from '../media/chevvy.svg'
import leccy from '../media/icons/leccy.png'
import time from '../media/icons/time.png'
import tree from '../media/icons/tree.png'
import money from '../media/icons/money.png'
import JellyDevice from '../media/jellyDevice.png'

import AOS from 'aos'
import Animation from '../structural/animation.js'
import ScrollPosition from '../structural/scrollPosition.js'


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
                {ScrollPosition() > 61?
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
                    <h2 className = "techDescription"> hello hello this is our tech, ooh very nice</h2>
                    <img  width="450px"src={JellyDevice}/>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className = "landingPageContent">
                <BannerContainer></BannerContainer>
                <PhonePreviewContainer></PhonePreviewContainer>
                <Expect></Expect>
                <Technology></Technology>
            </div>
        </div>
    )
}

export default Landing
