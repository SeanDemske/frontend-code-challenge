import React from "react";
import "./ApplicationFooter.css";

const ApplicationFooter = () => {
    return (
        <div className="ApplicationFooter">

            <div className="top-half">
                <div className="links-copyright">
                    <p>
                        <a href="/">Home</a>
                        |
                        <a href="/">Terms and Conditions</a>
                        |
                        <a href="/">Privacy Policy</a>
                        |
                        <a href="/">Collection statement</a>
                        |
                        <a href="/">Help</a>
                        |
                        <a href="/">Manage Account</a>
                    </p>
                    <p>Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
                </div>
            </div>
            <div className="bottom-half">
                <div className="socials">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <div className="stores">
                    <img id="apple" src="/applestore.svg" alt="Download on the Apple store"/>
                    <img id="google" src="/googlestore.png" alt="Download on the Play store"/>
                    <img id="windows" src="/windowsstore.png" alt="Download on the Windows store"/>
                </div>
            </div>
        </div>
    );
}

export default ApplicationFooter;