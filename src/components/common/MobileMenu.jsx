import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import { Styles } from "./styles/mobileMenu.jsx";

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileBtn: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                mobileBtn: !prevState.mobileBtn,
            }
        });
    }

    render() {
        let mobileMenuBody = (this.state.mobileBtn ? ' visible' : '');
        let mobileMenuOverlay = (this.state.mobileBtn ? ' active' : '');

        return (
            <Styles>
                {/* Mobile Menu */}
                <section className="mobile-menu-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="mb-topbar d-flex justify-content-between">
                                    <div className="topbar-item">
                                    </div>
                                    <div className="topbar-item">
                                        <ul className="list-unstyled list-inline mb-social">
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-logo-area d-flex justify-content-between">
                                    <div className="mb-logo-box d-flex">
                                        <div className="mb-menu-btn">
                                            <a href="/" onClick={this.handleClick}>
                                                <i className="bi bi-list"></i>
                                            </a>
                                        </div>
                                        <div className="mb-logo">
                                            <Link to="/"><img src="./assets/images/f-logo.png" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Mobile Menu Sidebar */}
                <section className={`mb-sidebar${mobileMenuBody}`}>
                    <div className="mb-sidebar-heading d-flex justify-content-between">
                        <div><h5>Menu</h5></div>
                        <div><a href="/" onClick={this.handleClick}><i className="las la-times"></i></a></div>
                    </div>
                    <div className="mb-sidebar-menu">
                        <Accordion defaultActiveKey="intro">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="intro">소개<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="intro">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/board/About">인사말</Link></li>
                                            <li><Link to="/board/About">비전</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="ngef">NGEF 2024<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="ngef">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/board/About">개요</Link></li>
                                            <li><Link to="/board/Schedule">전체 일정표</Link></li>
                                            <li><Link to="/board/About">기조 연설</Link></li>
                                            <li><Link to="/board/Session">세부세션</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="program">프로그램<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="program">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/board/Schedule">LIVE</Link></li>
                                            <li><Link to="/board/About">리더스 포럼</Link></li>
                                            <li><Link to="/">부대행사</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="registForum">참가신청<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="registForum">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/board/RegistForum">참가신청</Link></li>
                                            <li><Link to="/board">참가신청 확인</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="exhibition">전시<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="exhibition">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/blog-classic">전체 배치도</Link></li>
                                            <li><Link to="/blog-grid">참가기업</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="prevForum">지난 포럼<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="exhibition">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/board/Schedule">지난 포럼</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="info">정보센터<i className="bi bi-plus-lg"></i></Accordion.Toggle>
                                <Accordion.Collapse eventKey="info">
                                    <Card.Body>
                                        <ul className="list-unstyled">
                                            <li><Link to="/">공지사항</Link></li>
                                            <li><Link to="/">E-브로셔</Link></li>
                                            <li><Link to="/">오시는 길</Link></li>
                                            <li><Link to="/">문의</Link></li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>
                    </div>
                </section>

                <div className={`mb-sidebar-overlay${mobileMenuOverlay}`} onClick={this.handleClick}></div>
            </Styles>
        )
    }
}

export default MobileMenu