import React from 'react';
import Datas from '../../data/about/about-us-two.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/aboutUsTwo.jsx";

class AboutUsTwo extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        return (
            <Styles>
                {/* About Us Area */}
                <section className="about-us2-area">
                    <Container>
                        <Row>
                            <Col lg="5" md="0">
                                <div className="about-images">
                                    <img className="about-img3 img-fluid" src={`./assets/images/${this.state.Data.aboutImageThree}`} alt="" />
                                </div>
                            </Col>
                            <Col lg="7" md="12">
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
                                            <Col md="8">
                                                <h6>{this.state.Data.iconHeading}</h6>
                                                <div className="about-desc">
                                                    <p>{this.state.Data.secDesc}</p>
                                                </div>
                                                <Link className="rmore-btn" to={"/"}>연동화면 링크</Link>
                                            </Col>
                                            <Col md="4">
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUsTwo