import React from 'react'
import HandPhone from '../media/phoneApp-jelly.png'
import PhoneScreen from '../media/jellyfishWithIphone.png'
import Phone from '../structural/phone';

export default function Product() {
    console.log('hit the product page');
    return (
        <div className="productPage">
            <div className="productBanner">
                <div className ="leadingGridTextPhone">
                    <h1 className="productBannerText">Get a view into your home you can’t get anywhere else.</h1>
                    <h1 className="bannerBlurb"> See when the garage door opened, the television turned on, or when the dryer finished its cycle.</h1>
                </div>
                
                    <Phone></Phone>
                
            </div>






            <div className="productBanner">
                <div className="handImg">
                    <img width="100%" src={HandPhone} />
                </div>
                <h1 className="productBannerText">Set personalised energy usage limits to save energy & money.</h1>
            </div>

            <div>
                
            </div>

            <div className="productBanner">
                <h1 className="productBannerText">Ask Jellyfish any questions; and let our AI do the work for you</h1>
                <img className="handImg" src={PhoneScreen} height="25%"/>
            </div>
        </div>
    )
}
