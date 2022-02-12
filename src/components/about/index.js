import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const AboutImage = 'images/about-us.png';

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-content" data-aos="fade-up" data-aos-duration="2000">
                            <h2>About <span>us</span></h2>
                            <h3>The Hip Ass Ape’s</h3>
                            <p>After A Deadly Chemical Virus spread, Humans species started showing sign of Severe illness and slowly begin to Die.</p>
                            <p>Wildlife started showing signs of chemical mutations as a result there strength, Speed and Intellectual Abilities exceeded the Humans.</p>
                            <p>Ape’s were the One’s that were most infected by mutation and showed Adverse signs of Heightened Abilities and were named as Hip Ass Ape’s.</p>
                            <h3>Utility’s</h3>
                            <p>- Staking Your Hip Ass Ape and Earn $HAA Token</p>
                            <p>- $HAA Token Can be used to Redeem NFTs, Whitelists, Free Mints, Merchandise, ENS etc...</p>
                            <p>- Your NFT will act Access Pass To Dope Parties, Meet Ups and Hip Ass Community...</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-image" data-aos="fade-left" data-aos-duration="2000">
                            <img src={AboutImage} className="img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;