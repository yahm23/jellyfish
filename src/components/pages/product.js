import React from 'react'
import HandPhone from '../media/phoneApp-jelly.png'
import PhoneScreen from '../media/jellyfishWithIphone.png'

export default function Product() {
    console.log('hit the product page');
    return (
        <div className="productPage">
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
            <div className="productBanner">
                <div className="productBannerText">

                    <h1 className="smallerProductText">Get a view into your home you can’t get anywhere else.</h1>
                    <h1 className="smallerProductText"> See when the television turned on, or when the dryer finished its cycle. </h1>
                </div>
                <img className="handImg" src={PhoneScreen} height="25%"/>
            </div>
        </div>
    )
}
