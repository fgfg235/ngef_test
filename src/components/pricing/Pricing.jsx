import React from 'react';
import { SecTitle } from '../common/SecTitle.jsx';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/pricing.jsx";

const Pricing = () => {
    return (
        <Styles>
            {/* Pricing Area */}
            <section className="pricing-area">
                <Container>
                    <Row>
                        <Col md="12">
                            <SecTitle
                                title="Our Pricing Plan"
                                subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            />
                        </Col>
                        <Col md="12">
                            <Tab.Container defaultActiveKey="month">
                                <Row>
                                    <Col md="12">
                                        <Nav className="justify-content-center">
                                            <Nav.Item><Nav.Link className="month-link" eventKey="month">Month</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link className="year-link" eventKey="year">Year</Nav.Link></Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md="12">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="month">
                                                <Row>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box">
                                                            <h4>Starter</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>199</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box">
                                                            <h4>Average</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>299</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box tab-selected">
                                                            <h4>Professional</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>399</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box">
                                                            <h4>Enterprise</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>499</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="year">
                                                <Row>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box">
                                                            <h4>Starter</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>199</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box tab-selected">
                                                            <h4>Average</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>299</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box">
                                                            <h4>Professional</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>399</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" sm="6">
                                                        <div className="tab-box">
                                                            <h4>Enterprise</h4>
                                                            <ul className="list-unstyled">
                                                                <li><i className="las la-check-circle"></i>2 Cleaner Member</li>
                                                                <li><i className="las la-check-circle"></i>10 Hours/Week</li>
                                                                <li><i className="las la-check-circle"></i>Adv Cleaning Tools</li>
                                                                <li><i className="las la-check-circle"></i>Full House Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Roof Top Cleaning</li>
                                                                <li><i className="las la-check-circle"></i>Shop Cleaning</li>
                                                            </ul>
                                                            <p><span>$<strong>499</strong></span>/month</p>
                                                            <button type="button">Choose</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default Pricing