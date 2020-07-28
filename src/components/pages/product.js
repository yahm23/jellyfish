import React from 'react'
import HandPhone from '../media/phoneApp-jelly.png'
import PhoneScreen from '../media/jellyfishWithIphone.png'

export default function Product() {
    console.log('hit the product page');
    return (
        <div className="productPage">
            <div className="productBanner">
                <img className="handImg" src={HandPhone} width="35%"/>
                <h1 className="productBannerText">Set personalised energy usage limits to save energy & money.</h1>
            </div>
            <div className="productBanner">
                <h1 className="productBannerText">Ask Jellyfish any questions; and let the AI do the work for you</h1>
                <img className="handImg" src={PhoneScreen} height="25%"/>
            </div>
        </div>
    )
}
