import React from 'react';
import TextSlider from './TextSlider.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import MobileMenu from '../common/MobileMenu.jsx';
import { Styles } from "./styles/header.jsx";
import StickyMenu from '../common/StickyMenu.jsx';

const Header = () => {
    return (
        <Styles>
            {/* Topbar */}
            <section className="top-bar">
                <Container>
                    <Row>
                        <Col lg="5" md="6">
                            <TextSlider />
                        </Col>
                        <Col lg="7" md="6">
                            <div className="topbar-right d-flex justify-content-end">
                                <div className="topbar-menu text-right">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to= "/">Support</Link></li>
                                        <li className="list-inline-item"><Link to= "/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                                <div className="lag-box">
                                    <Dropdown>
                                        <Dropdown.Toggle as="a"><img src="./assets/images/kr.png" alt="" />Kor<i className="bi bi-chevron-down"></i></Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                            <Dropdown.Item as="li"><img src="./assets/images/kr.png" alt="" /> Kor</Dropdown.Item>
                                            <Dropdown.Item as="li"><img src="./assets/images/us.png" alt="" /> Eng</Dropdown.Item>
                                            <Dropdown.Item as="li"><img src="./assets/images/fra.png" alt="" /> Fre</Dropdown.Item>
                                            <Dropdown.Item as="li"><img src="./assets/images/ger.png" alt="" /> Ger</Dropdown.Item>
                                            <Dropdown.Item as="li"><img src="./assets/images/spa.png" alt="" /> Spa</Dropdown.Item>
                                            <Dropdown.Item as="li"><img src="./assets/images/bra.png" alt="" /> Bra</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="topbar-social">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="/"><i className="bi bi-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Logo Area */}
            <section className="logo-area p-0">
                <Container>
                    <Row>
                        <Col xl="12" md="2">
                            <div className="logo" align="center">
                                <Link to="/"><img width='260px' src="./assets/images/af_logo_kr.png" alt="" /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Menu Area */}
            <section className="main-menu-area g-0 p-0">
                <Container fluid>
                    <div className="menu-border g-0 px-0 font-deco">
                        <Row className='g-0 px-0'>
                            <Col md="12" className='px-0'>
                                <div className="main-menu">
                                    <div className="menu-box d-flex justify-content-center">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active mx-3">
                                                <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">소개 <i className="bi bi-chevron-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item active"><Link className="nav-link" to="/board/About">인사말</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to="/board/About">추진위원회</Link></li>
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
                                                <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">부대행사 <i className="bi bi-chevron-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to="/board/About">리더스 포럼</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to="/">연계프로그램</Link></li>
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
                                            <li className="nav-item dropdown mx-3">
                                                <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">아카이브_hidden 예정<i className="bi bi-chevron-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to="/board/Schedule">2024</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/board/Schedule">LIVE</Link>
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
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            {/* Sticky Menu */}
            <StickyMenu />

            {/* Mobile Menu */}
            <MobileMenu />
        </Styles>
    )
}

export default Header