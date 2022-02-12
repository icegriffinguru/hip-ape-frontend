import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

const items = [
    { image: "PicsArt_01-20-04.44.33.png" },
    { image: "PicsArt_01-20-07.34.08.png" },
    { image: "PicsArt_01-20-07.36.19.jpg" },
    { image: "PicsArt_01-20-07.41.50.png" },
    { image: "PicsArt_01-20-07.42.28.png" },
    { image: "PicsArt_01-20-07.42.56.png" },
    { image: "PicsArt_01-20-07.43.29.jpg" },
    { image: "PicsArt_01-20-07.45.02.jpg" },
    { image: "PicsArt_01-20-07.50.04.png" },
    { image: "PicsArt_01-20-07.56.50.png" },
    { image: "PicsArt_01-20-08.00.26.jpg" },
]

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
            }
        }
    ]
};

function SneakPeek() {
    return (
        <Container>
            <div className="title text-center">
                <div className="title-big splitAnim" data-aos="fade-up" data-aos-duration="2000">Sneak Peek</div>
                <h2 className="splitAnim" data-aos="fade-up" data-aos-duration="2000">Sneak Peek</h2>
            </div>
            <div className="artist-list" data-aos="fade-up" data-aos-duration="2000">
                <Row className="js-artist-slider">
                    <Slider {...settings}>
                        {
                            items.map((item, index) =>
                                <div key={index} className="">
                                    <div className="artist-box">
                                        <div className="artist-image">
                                            <img src={'images/' + item.image} data-aos="fade-up" data-aos-duration="2000" alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </Row>
            </div>
        </Container>
    );
}

export default SneakPeek;