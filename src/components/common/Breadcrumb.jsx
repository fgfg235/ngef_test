import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Styles } from "./styles/breadcrumb.jsx";
import { Link } from 'react-router-dom';

export class BreadcrumbBox extends React.Component {
    state = {
        backgroundImage: 'breadcrumb-bg.jpg',
    }

    render() {
        return (
            <Styles>
                <section className="breadcrumb-area" style={{ backgroundImage: `url(/assets/images/${this.state.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="breadcrumb-box d-flex justify-content-between">
                                    <div className="breadcrumb-title">
                                        <p className="page-desc">NGEF 2024</p>
                                        <h1 className="page-title">{this.props.title}</h1>
                                    </div>
                                    <Breadcrumb>
                                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                        <Breadcrumb.Item active>{this.props.title}</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}