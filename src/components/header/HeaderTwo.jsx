import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import PopupModal from '../common/PopupModal.jsx';
import Search from '../common/Search.jsx';
import Sidebar from '../common/Sidebar.jsx';
import StickyMenu from '../common/StickyMenu.jsx';
import MobileMenu from '../common/MobileMenu.jsx';
import { Styles } from "./styles/headerTwo.jsx";

const HeaderTwo = () => {
    return (
        <Styles>
            {/* Topbar */}
            <section className="topbar-two">
                <Container>
                    <Row>
                        <Col lg="8" md="10">
                            <div className="bar-left">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><i className="las la-phone"></i>연락처</li>
                                    <li className="list-inline-item"><i className="las la-envelope"></i>이메일</li>
                                    <li className="list-inline-item"><i className="las la-map-marker"></i>개최지</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="4" md="2">
                            <div className="bar-right d-flex justify-content-end">
                                <ul className="list-unstyled list-inline social">
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-instagram"></i></a></li>
                                </ul>
                                <div className="cleaner-booking">
                                    <PopupModal />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Logo Area */}
            <section className="logo2-area">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="logo2-area-box">
                                <Row>
                                    <Col md="3">
                                        <div className="logo">
                                            <Link to="/"><img src="/assets/images/f-logo.png" alt="" /></Link>
                                        </div>
                                    </Col>
                                    <Col md="9">
                                        <div className="menu-box d-flex justify-content-center">
                                            <ul className="nav menu-nav">
                                                <li className="nav-item dropdown active mx-3">
                                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">소개 <i className="bi bi-chevron-down"></i></Link>
                                                    <ul className="dropdown list-unstyled">
                                                        <li className="nav-item active"><Link className="nav-link" to="/board/About">인사말</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/board/About">비전</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown mx-3">
                                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">NGEF 2024 <i className="bi bi-chevron-down"></i></Link>
                                                    <ul className="dropdown list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to="/board/About">개요</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/board/Shedule">전체 일정표</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/board/About">기조 연설</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/board/Session">세부세션</Link></li>
                                                        {/* <li className="nav-item"><Link className="nav-link" to="/faq">Faq</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/error">404</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/coming-soon">Coming Soon</Link></li> */}
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown mx-3">
                                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">프로그램 <i className="bi bi-chevron-down"></i></Link>
                                                    <ul className="dropdown list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to="/board/Schedule">LIVE</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/board/About">리더스 포럼</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/">부대행사</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown mx-3">
                                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">참가신청 <i className="bi bi-chevron-down"></i></Link>
                                                    <ul className="dropdown list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to="/board/RegistForum">참가신청</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/project-two">참가신청확인</Link></li>
                                                        {/* <li className="nav-item"><Link className="nav-link" to="/project-details">Project Details</Link></li> */}
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown mx-3">
                                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">전시 <i className="bi bi-chevron-down"></i></Link>
                                                    <ul className="dropdown list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to="/board/Schedule">전체배치도</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/board/Schedule">참가기업</Link></li>
                                                        {/* <li className="nav-item"><Link className="nav-link" to="/blog-classic">Blog Classic</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/blog-grid">Blog Grid</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/blog-details">Blog Details</Link></li> */}
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/board/Schedule">지난 포럼</Link>
                                                </li>
                                                <li className="nav-item dropdown mx-3">
                                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">정보센터 <i className="bi bi-chevron-down"></i></Link>
                                                    <ul className="dropdown list-unstyled">
                                                        <li className="nav-item"><Link className="nav-link" to="/project-one">공지사항</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/project-two">E-브로셔</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/project-one">오시는 길</Link></li>
                                                        <li className="nav-item"><Link className="nav-link" to="/project-one">문의</Link></li>
                                                        {/* <li className="nav-item"><Link className="nav-link" to="/project-details">Project Details</Link></li> */}
                                                    </ul>
                                                </li>
                                                {/* <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li> */}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sticky Menu */}
            <StickyMenu />

            {/* Mobile Menu */}
            <MobileMenu />
        </Styles>
    )
}

export default HeaderTwo