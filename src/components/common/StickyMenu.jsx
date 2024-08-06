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
                                    <Link to="/"><img src="/assets/images/f-logo.png" alt="" /></Link>
                                </div>
                            </Col>
                            <Col xl="9" md="10">
                                <div className="sticky-menu-box d-flex justify-content-center">
                                    <ul className="nav menu-nav">
                                        <li className="nav-item dropdown active mx-3">
                                            <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">소개 <i className="bi bi-chevron-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item active"><Link className="nav-link" to="/">인사말</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">비전</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mx-3">
                                            <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">NGEF 2024 <i className="bi bi-chevron-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to="/about">개요</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/appointment">전체 일정표</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/appointment">기조 연설</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/appointment">세부세션</Link></li>
                                                {/* <li className="nav-item"><Link className="nav-link" to="/faq">Faq</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/error">404</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/coming-soon">Coming Soon</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mx-3">
                                            <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">프로그램 <i className="bi bi-chevron-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to="/service-one">LIVE</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/service-two">리더스 포럼</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">부대행사</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mx-3">
                                            <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">참가신청 <i className="bi bi-chevron-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to="/project-one">참가신청</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/project-two">참가신청확인</Link></li>
                                                {/* <li className="nav-item"><Link className="nav-link" to="/project-details">Project Details</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mx-3">
                                            <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">전시 <i className="bi bi-chevron-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to="/">전체배치도</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">참가기업</Link></li>
                                                {/* <li className="nav-item"><Link className="nav-link" to="/blog-classic">Blog Classic</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/blog-grid">Blog Grid</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/blog-details">Blog Details</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">지난 포럼</Link>
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
                    </Container>
                </div>
            </Styles >
        )
    }
}

export default StickyMenu