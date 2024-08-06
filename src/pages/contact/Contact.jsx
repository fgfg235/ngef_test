import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/header/Header.jsx';
import { BreadcrumbBox } from '../../components/common/Breadcrumb.jsx';
import ContactForm from './components/ContectForm.jsx';
import GoogleMap from './components/GoogleMap.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { Styles } from "./styles/contact.jsx";

const Contact = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper contact-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Contact" />

                {/* Contact Area */}
                <section className="contact-area">
                    <Container>
                        <Row>
                            <Col md="5">
                                <div className="contact-details">
                                    <div className="contact-title">
                                        <h5>Contact Details</h5>
                                        <p>If you still have any question, please contact us any time following below.</p>
                                    </div>
                                    <div className="contact-box">
                                        <div className="icon-box d-flex">
                                            <div className="con-icon">
                                                <i className="las la-map-marker"></i>
                                            </div>
                                            <div className="icon-details">
                                                <h6>Address</h6>
                                                <p>795 South Park Avenue, CA 94107.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box d-flex">
                                            <div className="con-icon">
                                                <i className="las la-envelope"></i>
                                            </div>
                                            <div className="icon-details">
                                                <h6>Email</h6>
                                                <p>enquery@domain.com</p>
                                                <p>help@contact.com</p>
                                            </div>
                                        </div>
                                        <div className="icon-box d-flex">
                                            <div className="con-icon">
                                                <i className="las la-phone"></i>
                                            </div>
                                            <div className="icon-details">
                                                <h6>Phone</h6>
                                                <p>+1 (908) 875 7678<br />+1 (908) 875 2491</p>
                                            </div>
                                        </div>
                                        <div className="icon-box d-flex">
                                            <div className="con-icon">
                                                <i className="las la-clock"></i>
                                            </div>
                                            <div className="icon-details">
                                                <h6>Opening Hours</h6>
                                                <p>Sat - Tue (9:30pm - 5:30am)<br />Wed - Fri (11:30pm - 7:30am)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-social">
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li className="list-inline-item"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md="7">
                                <ContactForm />
                            </Col>
                        </Row>
                    </Container>

                    {/* Google Map */}
                    <GoogleMap />
                </section>

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Contact