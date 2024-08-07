import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Search from './Search.jsx';
import Sidebar from './Sidebar.jsx';
import { Styles } from "./styles/stickyMenu.jsx";

class StickyMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stickyMenu: false
        };

        this.onScroll = this.onScroll.bind(this);

    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const stickyMenu = window.scrollY > 180;
            if (stickyMenu !== this.state.stickyMenu) {
                this.setState({ stickyMenu: stickyMenu });
            }
        });
    }

    componentWillUnmount() {
        this.setState = () => {
            return;
        };
    }

    onScroll(stickyMenu) {
        this.setState({ stickyMenu: stickyMenu });
    }

    render() {
        let scrollClass = (this.state.stickyMenu ? ' sticky' : '');
        
        return (
            <Styles>
                {/* Sticky Menu */}
                <div className={`sticky-header-area${scrollClass}`}>
                    <Container>
                        <Row>
                            <Col xl="3" md="2">
                                <div className="sticky-logo">
                                    <Link to="/"><img src="./assets/images/f-logo.png" alt="" /></Link>
                                </div>
                            </Col>
                            <Col xl="9" md="10">
                                <div className="sticky-menu-box d-flex justify-content-center">
                                    frontend/src/components/header/Header.jsx
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Styles >
        )
    }
}

export default StickyMenu