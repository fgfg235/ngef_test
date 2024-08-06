import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from '../common/BackToTop.jsx';
import { Styles } from "./styles/footer.jsx";

const Footer = () => {
    return (
        <Styles>
            {/* Footer Area */}
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="footer-top">
                                <Row>
                                    <Col lg="3" md="0">
                                        <div className="logo">
                                            <Link to="/"><img src="/assets/images/f-logo.png" alt="" /></Link>
                                        </div>
                                    </Col>
                                    <Col md="6" sm="7">
                                        <div className="registration">
                                            footer content
                                        </div>
                                    </Col>
                                    <Col lg="3" md="6" sm="5">
                                        <div className="social text-right">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item"><a href="/"><i className="bi bi-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="/"><i className="bi bi-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="/"><i className="bi bi-linkedin"></i></a></li>
                                                <li className="list-inline-item"><a href="/"><i className="bi bi-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="copyright-area">
                                <Row>
                                    <Col md="6">
                                        <div className="copy-text">
                                            <p>Copyright &copy; 2024 | Designed With <i className="las la-heart"></i> by <a href="/" target="_blank" rel="noreferrer">GeonpyoKim</a></p>
                                        </div>
                                    </Col>
                                    <Col md="6" className="text-right">
                                        <ul className="copy-menu list-unstyled list-inline">
                                            <li className="list-inline-item"><a href="/">Terms & Condition</a>|</li>
                                            <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top */}
                <BackToTop scrollStepInPx="50" delayInMs="10" />
            </footer>
        </Styles >
    )
}

export default Footer