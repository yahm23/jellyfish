import React, { useState, useEffect } from 'react'

const ScrollPosition = () => {
    const[position,setPosition] = useState(0);

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (winScroll / height)*100
        setPosition(scrolled);
        console.log(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, [position])

    return position

}

export default ScrollPosition
