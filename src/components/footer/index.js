import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Twitter = 'images/twitter.png';

function Footer() {
    return (
        <div>
            <Container>
                <div className="page-footer-top">
                    <div className="footer-logo" data-aos="fade-up" data-aos-duration="2000">
                        <Link to="/"><font style={{ fontSize: "50px" }}>HIP ASS APE</font></Link>
                    </div>
                    <div className="social-media">
                        <Link to="https://twitter.com/HipAssApe" target="_blank">
                            <img src={Twitter} className="img-fluid" data-aos="fade-up" data-aos-duration="2000" alt="" />
                        </Link>
                        <Link to="https://twitter.com/BoredJessi" target="_blank">
                            <img src={Twitter} className="img-fluid" data-aos="fade-up" data-aos-duration="2000" alt="" />
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="footer-bottom">
                <div className="container">
                    <p>Copyright © 2022 Hip Ass Ape - All Rights Reserved. Powered by GoDaddy</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;