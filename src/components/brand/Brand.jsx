import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Datas from '../../data/brand/brands.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/brand.jsx";
import {getImageUrl } from "../../utils/Image-util.jsx";

class Brand extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };

        return (
            <Styles>
                {/* Brand Area */}
                <section className="brand-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="brand-slider">
                                    <Slider {...settings}>
                                        {
                                            this.state.Data.map((data, i) => (
                                                <div className="brand-item text-center" key={i}>
                                                    <img src={getImageUrl(data.imgUrl)} alt="" className="img-fluid" />
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles >
        )
    }
}

export default Brand