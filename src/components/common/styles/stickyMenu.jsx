import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    .sticky-header-area {
        background: ${colors.black1};
        height: 75px;
        padding-top: 18px;
        display: none;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 11;
        animation: 300ms ease-in-out 0s 1 normal none running fadeInDown;
        box-shadow: rgb(225 225 225 / 20%) 0px 0px 30px -10px;
        .sticky-logo {
            a {
                img {
                    margin-top: 3px;
                }
            }
        }

        .sticky-menu-box {
            ul.nav.menu-nav {
                margin-right: 20px;
                li.nav-item {
                    position: relative;

                    a.nav-link {
                        font-size     : 14px;
                        color         : #ffffff;
                        text-transform: uppercase;
                        font-weight   : 400;
                        padding       : 10px 10px 15px;

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

    .sticky-header-area.sticky {
        display: block;
        z-index: 111111;

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }
`;