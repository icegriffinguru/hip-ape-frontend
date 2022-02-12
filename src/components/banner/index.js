import React from 'react';
import { Container } from 'react-bootstrap';

const ScrollText = 'images/scroll-text.png';

function Banner() {
    return (
        <div className="masthead">
            <Container>
                <div className="masthead-content">
                    <h1 className="title-banner" data-aos="fade-up" data-aos-duration="1000">Are You HIP ?</h1>
                    <h3 data-aos="fade-up" data-aos-duration="1000">
                        Hip Ass Ape is a collection of 10,000 Generative Apes.
                    </h3>
                </div>
            </Container>
            <div className="masthead-container">
                <div className="masthead-container-content">
                    <a data-scroll href="#about" className="scroll-text" data-aos="fade-up" data-aos-duration="1000">
                        <img src={ScrollText} className="img-fluid" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;