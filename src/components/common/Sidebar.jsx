import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/sidebar.jsx";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarBtn: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return { 
                sidebarBtn: !prevState.sidebarBtn,
            }
        });
    }

    render() {
        let sidebarBody = (this.state.sidebarBtn ? ' opened' : '');
        let sidebarOverlay = (this.state.sidebarBtn ? ' visible' : '');

        return (
            <Styles>
                {/* Sidebar */}
                <a href="/" className="nav-link nav-sidebar" onClick={this.handleClick}>
                    <i className="las la-bars"></i>
                </a>

                <div className={`sidebar${sidebarBody}`}>
                    <div className="side-logo d-flex justify-content-between">
                        <div><Link to="/"><img src="/assets/images/logo.png" alt="" /></Link></div>
                        <div><a href="/" onClick={this.handleClick} className="close-btn"><i className="las la-times"></i></a></div>
                    </div>
                    <div className="side-content">
                        <h6>About Us</h6>
                        <p>Lorem ipsum dolor sit amet, consecte adipisicing elit. Mollitia modi, nostru rem sapiente. Excepturi
                         molestiae soluta quisquam officiis iure sunt.</p>
                    </div>
                    <div className="side-post">
                        <h6>Recent Post</h6>
                        <div className="post-box d-flex">
                            <div className="post-img">
                                <img src="/assets/images/post-01.jpg" alt="" />
                            </div>
                            <div className="post-title">
                                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                                <span>March 12, 2020</span>
                            </div>
                        </div>
                        <div className="post-box d-flex">
                            <div className="post-img">
                                <img src="/assets/images/post-02.jpg" alt="" />
                            </div>
                            <div className="post-title">
                                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                                <span>March 12, 2020</span>
                            </div>
                        </div>
                        <div className="post-box d-flex">
                            <div className="post-img">
                                <img src="/assets/images/post-03.jpg" alt="" />
                            </div>
                            <div className="post-title">
                                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                                <span>March 12, 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className="side-gallery">
                        <h6>Gallery</h6>
                        <img src="/assets/images/gallery-01.jpg" alt="" />
                        <img src="/assets/images/gallery-02.jpg" alt="" />
                        <img src="/assets/images/gallery-03.jpg" alt="" />
                        <img src="/assets/images/gallery-04.jpg" alt="" />
                        <img src="/assets/images/gallery-05.jpg" alt="" />
                        <img src="/assets/images/gallery-06.jpg" alt="" />
                    </div>
                    <div className="side-contact">
                        <h6>Contact Us</h6>
                        <ul className="list-unstyled">
                            <li><i className="las la-map-marker"></i>795 South Park Avenue, New York, NY USA 94107</li>
                            <li><i className="las la-phone"></i>+1 (396) 486 4709</li>
                            <li><i className="las la-envelope"></i>enquery@edulyb.com</li>
                        </ul>
                    </div>
                    <div className="side-social">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-google"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li className="list-inline-item"><a href="/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay${sidebarOverlay}`} onClick={this.handleClick}></div>
            </Styles>
        )
    }
}

export default Sidebar