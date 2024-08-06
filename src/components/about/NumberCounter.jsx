import React from 'react';
import CountUp from 'react-countup';
import { Row, Col } from 'react-bootstrap';

const NumberCounter = () => {
    return (
        <div className="counter-boxes">
            <Row>
                <Col md="3" xs="6">
                    <div className="counter-box d-flex justify-content-center">
                        <div>
                            <i className="flaticon-layers"></i>
                        </div>
                        <div>
                            <h2><CountUp end={1370} duration={5} delay={1.5} /><small>+</small></h2>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                </Col>
                <Col md="3" xs="6">
                    <div className="counter-box d-flex justify-content-center">
                        <div>
                            <i className="flaticon-satisfied"></i>
                        </div>
                        <div>
                            <h2><CountUp end={993} duration={5} delay={1.5} /><small>+</small></h2>
                            <p>Statisfied Clients</p>
                        </div>
                    </div>
                </Col>
                <Col md="3" xs="6">
                    <div className="counter-box d-flex justify-content-center">
                        <div>
                            <i className="flaticon-customers"></i>
                        </div>
                        <div>
                            <h2><CountUp end={373} duration={5} delay={1.5} /><small>+</small></h2>
                            <p>Active Customers</p>
                        </div>
                    </div>
                </Col>
                <Col md="3" xs="6">
                    <div className="counter-box d-flex justify-content-center">
                        <div>
                            <i className="flaticon-coffee-cup"></i>
                        </div>
                        <div>
                            <h2><CountUp end={795} duration={5} delay={1.5} /><small>+</small></h2>
                            <p>Cup Of Coffee</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NumberCounter