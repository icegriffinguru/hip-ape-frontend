import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Damon = 'images/PicsArt_01-20-07.45.02.jpg';
const Jessi = 'images/PicsArt_01-20-07.42.56.png'

function Contact() {
    return (
        <div>
            <Container>
                <div className="title text-center">
                    <div className="title-big splitAnim">Meet Our Founder’s</div>
                    <h2 className="splitAnim">Meet Our Founder’s</h2>
                </div>
                <Row>
                    <Col lg={6}>
                        <div className="about-image wow animate__animated animate__fadeInRight" data-wow-duration="1s">
                            <img src={Damon} className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-content wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                            <h3>Damon</h3>
                            <p>Founder & Lead Artist</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="about-content wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                            <h3>Jessi</h3>
                            <p>Co-Founder & Lead Developer</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-image wow animate__animated animate__fadeInRight" data-wow-duration="1s">
                            <img src={Jessi} className="img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;