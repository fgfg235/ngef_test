import React from 'react';
import Datas from '../../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/heroSlider.jsx";

class HeroSlider extends React.Component {
    state = {
        Data: Datas
    }
    render() {
        const settings = {
            dots: true,
            arrows: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover: true,
            appendDots: dots =>
                <div>
                    <Container>
                        <Row>
                            <Col md="12">
                                <ul className="list-unstyled list-inline">{dots}</ul>
                            </Col>
                        </Row>
                    </Container>
                </div>,
            customPaging: i => (
                <button><span></span></button>
            )
        };

        return (
            <Styles>
                {/* Hero Slider */}
                <section className="hero-slider-area">
                    <Slider {...settings}>
                        {
                            this.state.Data.map((data, i) => (
                                <div className="slider-item" key={i}>
                                    <div className="image-container">
                                        <img src={`/assets/images/${data.backgroundImage}`} className="slider-image" alt={data.backgroundImage} />
                                    </div>
                                    <div className="slider-table">
                                        <div className="slider-tablecell">
                                            <Container>
                                                <Row>
                                                    <Col md="12">
                                                        <div className="slider-box">
                                                            <div className="slider-subtitle">
                                                                <p>{data.subTitle}</p>
                                                            </div>
                                                            <div className="slider-title">
                                                                <h1>{data.title}</h1>
                                                            </div>
                                                            <div className="slider-desc">
                                                                <p>{data.desc}</p>
                                                            </div>
                                                            <div className="slider-btn">
                                                                <Link className="slider-btn1" to={`/${data.btnOneLink}`}>About Us <i className="las la-arrow-circle-right"></i></Link>
                                                                <Link className="slider-btn2" to={`/${data.btnTwoLink}`}>Contact Us <i className="las la-arrow-circle-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </section>
            </Styles>
        )
    }
}

export default HeroSlider