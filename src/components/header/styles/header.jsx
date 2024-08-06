import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .top-bar {
        background: ${colors.bg1};
        height: 38px;
        padding-top: 9px;

        .topbar-menu {
            margin-right : 35px;
            ul {
                li {
                    a {
                        font-size : 14px;
                        color: ${colors.text1};
                        &:hover {
                            color: ${colors.blue};
                        }

                        @media only screen and (max-width: 991px) {
                            font-size: 13px;
                        }
                    }

                    &:first-child {
                        margin-right : 10px;

                        @media only screen and (max-width: 991px) {
                            margin-right : 5px;
                        }
                    }
                }
            }

            @media only screen and (max-width: 991px) {
                margin-right : 10px;
            }
        }

        .lag-box {
            margin-right : 25px;
            margin-top: -1px;
            .dropdown {
                a.dropdown-toggle {
                    font-size: 14px;
                    color    : ${colors.text1};
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

                    @media only screen and (max-width: 991px) {
                        font-size: 13px;
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
                margin-right: 10px;
            }
        }

        .topbar-social {
            margin-top: -1px;
            ul {
                li {
                    a {
                        font-size: 12px;
                        color: ${colors.text3};
                        border: 1px solid ${colors.text3};
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        text-align: center;
                        border-radius: 0 50%;
                        padding-top: 2px;
                        &:hover {
                            color: ${colors.blue};
                            border-color: ${colors.blue};
                        }

                        @media only screen and (max-width: 991px) {
                            width: 20px;
                            height: 20px;
                            padding-top: 1px;
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }

    .logo-area {
        height: 140px;
        padding-top: 20px;
        .logo {
            a {
                img {
                    margin-top: 5px;

                    @media only screen and (max-width: 991px) {
                        max-width: 100%;
                        margin-top: 10px;
                    }
                }
            }
        }

        .logo-icon-box {
            .icon-box {
                margin-right: 30px;
                .box-icon {
                    i {
                        font-size: 28px;
                        color: ${colors.blue};
                        margin-right: 12px;
                        display: inline-block;
                        margin-top: 6px;

                        @media only screen and (max-width: 991px) {
                            font-size: 24px;
                            margin-right: 5px;
                        }
                    }
                }
                .box-text {
                    p {
                        font-size: 14px;
                        color: ${colors.text3};
                        margin-bottom: -2px;
                        
                        @media only screen and (max-width: 991px) {
                            font-size: 13px;
                        }
                    }
                    span {
                        font-size: 15px;
                        color: ${colors.black2};
                        font-weight: 500;

                        @media only screen and (max-width: 991px) {
                            font-size: 13px;
                        }
                    }
                }

                @media only screen and (max-width: 1199px) {
                    margin-right: 20px;
                }

                @media only screen and (max-width: 991px) {
                    margin-right: 0;
                    margin-left: 10px;
                }
            }

            .search-box {
                padding-left: 10px;
                position: relative;
                &:before {
                    position : absolute;
                    content : '';
                    background : ${colors.border1};
                    width : 1px;
                    height: 25px;
                    top : 8px;
                    left: 0;
                }

                @media only screen and (max-width: 1199px) {
                    padding-left: 5px;
                }

                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
            .side-box {
                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }

    .main-menu-area {
        .menu-border {
            .main-menu {
                .menu-box {
                    ul.nav.menu-nav {
                        li.nav-item {
                            position: relative;
                            a.ts {
                                text-shadow: 0.5px 0.5px 2px ${colors.black2};
                            }
                            a.nav-link {
                                font-size     : 16px;
                                color         : ${colors.text1};
                                text-transform: uppercase;
                                font-weight   : 500;
                                padding       : 12px 25px 12px 0;
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
                                left      : -5px;
                                top       : 100%;
                                min-width : 190px;
                                background: #fff;
                                text-align: left;
                                padding   : 0;
                                border: 1px solid ${colors.border1};
                                border-radius : 0 0 5px 5px;
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
                                        margin-right  : 0;
                                        font-weight   : 400;
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

                    .cleaner-booking {
                        
                    }
                }
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
    }
`;