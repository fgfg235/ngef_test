import React from 'react';
import { Container } from 'react-bootstrap';
import SessionItem from './SessionItems.jsx';
import { Styles } from "./styles/session.jsx";

const Session = () => {
    return (
        <Styles>
            {/* Questions Area */}
            <section className="questions-area">
                <Container>
                    <div className="question-box">
                        <SessionItem />
                    </div>
                </Container>
            </section>
        </Styles>
    )
}

export default Session