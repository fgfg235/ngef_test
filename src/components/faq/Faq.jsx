import React from 'react';
import { SecTitle } from '../common/SecTitle.jsx';
import Accordion from './Accordion.jsx';
import Datas from '../../data/faq/faq.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/faq.jsx";

class Faq extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        return (
            <Styles>
                {/* Faq Area */}
                <section className="faq-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <SecTitle
                                    title={Datas.secTitle}
                                    subTitle={Datas.secHeading}
                                />
                            </Col>
                            <Col md="7">
                                <Accordion />
                            </Col>
                            <Col md="5">
                                <div className="chat-box text-center">
                                    <img src={`/assets/images/${this.state.Data.imgUrl}`} alt="" className="img-fluid" />
                                    <h5>Any Question?</h5>
                                    <p>You can ask anything you want to know about us.</p>
                                    <span>Write down your question</span>
                                    <form action="#" className="chat-form">
                                        <input type="text" placeholder="Enter your keyword" />
                                        <button type="submit">Send Query</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default Faq