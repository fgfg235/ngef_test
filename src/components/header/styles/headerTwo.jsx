import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .topbar-two {
        background: ${colors.bg1};
        height: 50px;
        padding-top: 13px;
        .bar-left {
            ul {
                li {
                    font-size: 14px;
                    color: ${colors.text3};
                    margin-right: 20px;
                    display: inline-block;
                    i {
                        font-size: 18px;
                        color: ${colors.blue};
                        transform: translateY(10%);
                        margin-right: 5px;

                        @media only screen and (max-width: 991px) {
                            margin-right: 2px;
                        }
                    }

                    &:last-child {
                        margin-right: 0;
                    }

                    @media only screen and (max-width: 991px) {
                        margin-right: 5px;
                    }
                }
            }
        }
        .bar-right {
            ul.social {
                margin-right: 20px;
                margin-top: 2px;
                li {
                    a {
                        font-size: 13px;
                        color: ${colors.text3};
                        margin-right: 5px;
                        i {

                        }
                        &:hover {
                            color: ${colors.blue};
                        }
                    }
                }

                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
            .cleaner-booking {
                button.booking-btn {
                    margin-top: -6px;
                }
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }

    .logo2-area {
        position: relative;
        .logo2-area-box {
            position: absolute;
            width: calc(100% - 30px);
            z-index: 111;
            top: 0;
            left: 15px;
            padding-top: 15px;
            .logo {
                a {
                    img {
                        margin-top: 3px;
                    }
                }
            }

            div.menu-box {
                ul.nav.menu-nav {
                    margin-right: 20px;
                    li.nav-item {
                        position: relative;

                        a.nav-link {
                            font-size     : 14px;
                            color         : #ffffff;
                            text-transform: uppercase;
                            font-weight   : 400;
                            padding       : 10px;

                            i {
                                font-size: 12px;
                                transform: translateY(-8%);
                            }

                            &:after {
                                content: none;
                            }

                            &:hover {
                                color: ${colors.blue};
                            }

                            @media only screen and (max-width: 1199px) {
                                padding-right: 5px;
                            }
                        }

                        ul.dropdown {
                            position  : absolute;
                            left      : 0;
                            top       : 100%;
                            min-width : 190px;
                            background: #fff;
                            border    : 1px solid ${colors.border1};
                            text-align: left;
                            padding   : 0;
                            border-radius : 5px;
                            transition : 0.2s ease;
                            opacity         : 0;
                            transform       : scaleY(0);
                            visibility      : hidden;
                            z-index         : 999;
                            transform-origin: center top 0;

                            li.nav-item {
                                position: relative;

                                a.nav-link {
                                    font-size     : 13px;
                                    color         : ${colors.text1};
                                    padding       : 10px 20px;
                                    text-transform: capitalize;
                                    font-weight   : 400;
                                    margin-right  : 0;
                                    border-bottom : 1px solid ${colors.border1};

                                    &:hover {
                                        color: ${colors.blue};

                                        i {
                                            color: #fff;
                                        }
                                    }

                                    i {
                                        float     : right;
                                        margin-top: 4px;
                                    }
                                }

                                &:last-child {
                                    margin-left: 0;

                                    a.nav-link {
                                        border-bottom: none;
                                    }
                                }

                                ul.dropdown2 {
                                    position  : absolute;
                                    top       : 0;
                                    left      : 100%;
                                    min-width : 180px;
                                    background: #fff;
                                    border    : 1px solid ${colors.border1};
                                    transition : 0.2s ease;
                                    opacity         : 0;
                                    transform       : scaleY(0);
                                    visibility      : hidden;
                                    z-index         : 999;
                                    transform-origin: center top 0;
                                }

                                &:hover {
                                    ul.dropdown2 {
                                        opacity   : 1;
                                        transform : scaleY(1);
                                        visibility: visible;
                                    }
                                }
                            }
                        }

                        &:hover {
                            ul.dropdown {
                                opacity   : 1;
                                transform : scaleY(1);
                                visibility: visible;
                            }
                        }
                    }

                    @media only screen and (max-width: 991px) {
                        margin-right: 0;
                    }
                }

                .lang-box {
                    padding-left: 25px;
                    margin-top: 10px;
                    position: relative;
                    &:before {
                        position : absolute;
                        content : '';
                        background : ${colors.text3};
                        width : 1px;
                        height: 25px;
                        top : -2px;
                        left: 0;
                    }
                    .dropdown {
                        a.dropdown-toggle {
                            font-size: 14px;
                            color    : #ffffff;
                            text-transform: uppercase;

                            img {
                                margin-right: 5px;
                                transform: translateY(-6%);
                            }

                            i {
                                font-size  : 10px;
                                margin-left: 3px;
                                transform: translateY(-13%);
                            }

                            &::after {
                                display: none;
                            }

                            &:hover {
                                cursor: pointer;
                                color : ${colors.blue};
                            }
                        }

                        ul.dropdown-menu {
                            padding: 0;
                            margin : 0;
                            border : none;
                            background: #ffffff;
                            border-radius: 5px;
                            top       : 40% !important;
                            left      : -16px !important;
                            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                            li {
                                display      : block;
                                background: transparent;
                                border-bottom: 1px solid ${colors.border1};
                                padding      : 8px 16px;
                                color        : ${colors.text2};
                                text-transform: uppercase;
                                cursor       : pointer;
                                overflow    : hidden;
                                transition : all 0.2s ease;

                                img {
                                    transform: translateY(-6%);
                                    margin-right: 5px;
                                }

                                &:hover {
                                    color      : ${colors.blue};
                                    padding-left: 22px;
                                }

                                &:last-child {
                                    border-bottom: none;
                                }
                            }
                        }
                    }

                    @media only screen and (max-width: 991px) {
                        display: none;
                    }
                }

                .search-box {
                    padding-left: 10px;
                    a.nav-search {
                        i {
                            color: #ffffff;
                        }
                    }

                    @media only screen and (max-width: 991px) {
                        display: none;
                    }
                }

                .side-box {
                    a.nav-sidebar {
                        i {
                            color: #ffffff;
                        }
                    }

                    @media only screen and (max-width: 991px) {
                        display: none;
                    }
                }
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }
`;