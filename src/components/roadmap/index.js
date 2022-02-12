import React from "react";
import { Container } from 'react-bootstrap';

function Roadmap() {
    return (
        <div>
            <Container>
                <div className="title text-center">
                    <div className="title-big splitAnim" data-aos="fade-up" data-aos-duration="2000">Roadmap</div>
                    <h2 className="splitAnim" data-aos="fade-up" data-aos-duration="1000">Roadmap</h2>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active show" id="Launch-Roadmap" role="tabpanel" aria-labelledby="Launch-Roadmap-tab">
                        <div className="road-map-content">
                            <div className="line-up">
                                <div className="line-up-content" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="line-up-content-circle" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="line-up-content-circle-inner"></div>
                                    </div>
                                    <div className="line-up-content-description" data-aos="fade-up" data-aos-duration="2000">
                                        <h3>TBA</h3>
                                        <p>Pre-Mint and Public Mint Begin</p>
                                    </div>
                                </div>
                                <div className="line-up-content" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="line-up-content-circle" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="line-up-content-circle-inner"></div>
                                    </div>
                                    <div className="line-up-content-description" data-aos="fade-up" data-aos-duration="2000">
                                        <h3>Feb - May</h3>
                                        <p>- Deploy Staking UI and Launch Store (Major)</p>
                                        <p>- Stake your Hip Ass Ape to passively earn $HAA Token, Which could be used to Redeem NFTs,
                                            ENS, Whitelist, Free mints, Merchandise etc.
                                        </p>
                                        <p>- Setting Up Transparent Community Fund ( 35% Initial Collection Revenue + 50% Secondary Sales )</p>
                                        <p>- Launch Store and Exclusive Merchandise</p>
                                    </div>
                                </div>
                                <div className="line-up-content" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="line-up-content-circle" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="line-up-content-circle-inner"></div>
                                    </div>
                                    <div className="line-up-content-description" data-aos="fade-up" data-aos-duration="2000">
                                        <h3>June - August</h3>
                                        <p>- Starting working on ways to Metaverse Integration</p>
                                        <p>- Dope Parties around the World hosted by Holder’s and Funded by Community Fund.</p>
                                        <p>- Weekly Voting for Selection of NFTs for Store.</p>
                                        <p>- Host NYC, LA Meet Up</p>
                                    </div>
                                </div>
                                <div className="line-up-content" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="line-up-content-circle" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="line-up-content-circle-inner"></div>
                                    </div>
                                    <div className="line-up-content-description" data-aos="fade-up" data-aos-duration="2000">
                                        <h3>End Of 2022</h3>
                                        <p>- A Big Surprise To End 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="section-seperater right"></div>
        </div>
    );
}

export default Roadmap;