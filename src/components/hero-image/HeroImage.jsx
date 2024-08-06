import React from 'react';
import Datas from '../../data/hero/hero-image.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Styles } from "./styles/heroImage.jsx";

class HeroImage extends React.Component {
    state = {
        Data: Datas
    }
    
    constructor() {
        super()
        this.state = {
            isOpen: false,
            Data: Datas
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {

        const getImageUrl = (name) => {
            return `/assets/images/${name}`;
        };

        //document.getElementById('hero-img').style.background = `url("/assets/images/${this.state.Data.heroBackground}")`;

        return (
            <Styles>
                {/* Hero Image */}
                < section className="hero-image-area" style={{ backgroundImage: `url("/assets/images/${this.state.Data.heroBackground}")` }}>
                    {/* <div className="hero-table w-100">
                        <div className="hero-tablecell">
                            <Container className='px-5'>
                                <div className="hero-box">
                                    <Row>
                                        <Col md="3">
                                                <div className="hero-btn">
                                                    <Link className="hero-btn" to='/}'>About Us<i className="las la-arrow-circle-right"></i></Link>
                                                </div>
                                        </Col>
                                        <Col md="3">
                                                <div className="hero-btn">
                                                    <Link className="hero-btn" to='/}'>About Us<i className="las la-arrow-circle-right"></i></Link>
                                                </div>
                                        </Col>
                                        <Col md="3">
                                                <div className="hero-btn">
                                                    <Link className="hero-btn" to='/}'>About Us<i className="las la-arrow-circle-right"></i></Link>
                                                </div>
                                        </Col>
                                        <Col md="3">
                                                <div className="hero-btn">
                                                    <Link className="hero-btn" to='/}'>About Us<i className="las la-arrow-circle-right"></i></Link>
                                                </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    </div> */}
                </section >
            </Styles >
        )
    }
}

export default HeroImage