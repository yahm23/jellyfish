import React, { Component } from 'react'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footerDiv">
                <h4 className="footerSubs">Jellyfish</h4>
                <ul>
                    <p className="footerLinks" >Products</p>
                    <p className="footerLinks" >Technology</p>
                    <p className="footerLinks" >Support</p>
                    <p className="footerLinks" >Buy Jellyfish</p>
                </ul>
            </div>
        
            <div className="footerDiv">
                <h4 className="footerSubs">Platforms</h4>
                <ul>
                    <p className="footerLinks" >iOS App</p>
                    <p className="footerLinks" >Android App</p>
                    <p className="footerLinks" >Web App</p>
                    <p className="footerLinks" >Support</p>
                </ul>
            </div>
        
            <div className="footerDiv">
                <h4 className="footerSubs">About</h4>
                <ul>
                    <p className="footerLinks" >Company</p>
                    <p className="footerLinks" >Careers</p>
                    <p className="footerLinks" >Contact Us</p>
                    <p className="footerLinks" >Security</p>
                </ul>
            </div>
                
        </div>
    )
}

export default Footer
