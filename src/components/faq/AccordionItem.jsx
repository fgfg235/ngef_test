import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AccordionItem = ({ title, chairman, keyNote, subTitle, panel }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <p>{title}</p>
                <div className="accordion-indicator">
                    {isOpen ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
                </div>
            </div>
            {isOpen && (
                <div className="accordion-body">
                    <Container>
                        <Row>
                            <Col className="accordion-division" md="2">
                                좌&nbsp;&nbsp;&nbsp;장 :
                            </Col>
                            <Col className="accordion-content" md="10">
                                {chairman}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="accordion-division" md="2">
                                키노트 스피커 :
                            </Col>
                            <Col className="accordion-content" md="10">
                                {keyNote}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="accordion-division" md="2">
                                주&nbsp;&nbsp;&nbsp;제 :
                            </Col>
                            <Col className="accordion-content" md="10">
                                {subTitle}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="accordion-division" md="2">
                                패&nbsp;&nbsp;&nbsp;널 :
                            </Col>
                            <Col className="accordion-content" md="10">
                                {panel}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    )
}

export default AccordionItem