import React, { useState, useEffect } from 'react'

const ScrollPosition = () => {
    const[position,setPosition] = useState(0);
    const[section2y,setY] = useState();

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (winScroll / height)*100
        setPosition(scrolled);
        const yPos =document.getElementById("section2").getBoundingClientRect().y;
        setY(yPos)
        // console.log('Y of el is ' + yPos);
        // console.log(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, [position])

    return [position,section2y]

}

export default ScrollPosition
