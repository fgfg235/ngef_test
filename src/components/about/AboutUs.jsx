import React from 'react';
import Datas from '../../data/about/about-us.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/aboutUs.jsx";

class AboutUs extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us-area">
                    <Container>
                        <Row>
                            <Col lg="6" md="12">
                                <div className="about-image">
                                    <div className="about-shape1"></div>
                                    <div className="about-shape11"></div>
                                    <img src={`./assets/images/${this.state.Data.aboutImageOne}`} className="about-img1 img-fluid" alt="" />
                                    <img src={`./assets/images/${this.state.Data.aboutImageTwo}`} className="about-img2 img-fluid" alt="" />
                                    <div className="about-shape2"></div>
                                    <div className="about-shape22"></div>
                                </div>
                            </Col>
                            <Col lg="6" md="12">
                                <div className="about-content">
                                    <div className="about-title">
                                        <p>{this.state.Data.secTitle}</p>
                                    </div>
                                    <div className="about-subtitle">
                                        <h3>{this.state.Data.secSubtitle}</h3>
                                    </div>
                                    <div className="about-desc">
                                        <p>{this.state.Data.secDesc}</p>
                                    </div>
                                    <div className="about-iconbox">
                                        <Row>
                                            <Col md="6">
                                                <div className="box-item d-flex">
                                                    <div className="box-icon">
                                                        <i className="las la-check-circle"></i>
                                                    </div>
                                                    <div className="box-title">
                                                        <h6>House Cleaning</h6>
                                                        <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                                                    </div>
                                                </div>
                                                <div className="box-item d-flex">
                                                    <div className="box-icon">
                                                        <i className="las la-check-circle"></i>
                                                    </div>
                                                    <div className="box-title">
                                                        <h6>House Cleaning</h6>
                                                        <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="box-item d-flex">
                                                    <div className="box-icon">
                                                        <i className="las la-check-circle"></i>
                                                    </div>
                                                    <div className="box-title">
                                                        <h6>House Cleaning</h6>
                                                        <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                                                    </div>
                                                </div>
                                                <div className="box-item d-flex">
                                                    <div className="box-icon">
                                                        <i className="las la-check-circle"></i>
                                                    </div>
                                                    <div className="box-title">
                                                        <h6>House Cleaning</h6>
                                                        <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="about-morebtn d-flex">
                                        <div><Link to={"/"}>Learn More</Link></div>
                                        <div className="d-flex">
                                            <div className="phone-icon">
                                                <i className="las la-phone-volume"></i>
                                            </div>
                                            <div className="phone-number">
                                                <p>Call Us Anytime</p>
                                                <h5>(908) 875 7678</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >
            </Styles >
        )
    }
}

export default AboutUs