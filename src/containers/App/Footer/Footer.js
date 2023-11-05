import React from "react";
import "./Footer.css";

import twitterIcon from "../../../Icons/twitter.png";
import facebookIcon from "../../../Icons/facebook.png";
import instagramIcon from "../../../Icons/instagram.png";
import linkedinIcon from "../../../Icons/linkedin.png";
import youtubeIcon from "../../../Icons/youtube.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_top">
                    <p>2023 IoT © Copyright all rights reserved, bla bla</p>
                </div>
                <hr />
                <ul className="social_media">
                    <li>
                        <a href=""><img src={twitterIcon} alt="Twitter" /></a>
                    </li>
                    <li>
                        <a href=""><img src={facebookIcon} alt="Facebook" /></a>
                    </li>
                    <li>
                        <a href=""><img src={instagramIcon} alt="Instagram" /></a>
                    </li>
                    <li>
                        <a href=""><img src={linkedinIcon} alt="LinkedIn" /></a>
                    </li>
                    <li>
                        <a href=""><img src={youtubeIcon} alt="YouTube" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
