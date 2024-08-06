import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    .mobile-menu-area {
        background : ${colors.black1};
        display: none;
        .mb-topbar {
            border-bottom: 1px solid ${colors.black2};
            padding: 8px 0;
            .topbar-item {
                p {
                    font-size: 13px;
                    color: ${colors.text4};
                    padding-top: 3px;
                    i {
                        font-size: 16px;
                        color: ${colors.blue};
                        transform: translateY(5%);
                        margin-right: 5px;
                    }
                }
                ul.mb-social {
                    li {
                        a {
                            font-size: 12px;
                            color: ${colors.blue};
                            border: 1px solid ${colors.text2};
                            display: inline-block;
                            width: 22px;
                            height: 22px;
                            text-align: center;
                            border-radius: 0 40%;
                            padding-top: 2px;
                            &:hover {
                                color : #ffffff;
                                background: ${colors.red};
                                border-color: ${colors.red};
                            }
                        }
                    }
                }
            }
        }

        .mb-logo-area {
            padding : 18px 0;
            .mb-logo-box {
                .mb-menu-btn {
                    margin-top: 5px;
                    margin-right: 35px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content : "";
                        background : ${colors.text1};
                        width: 1px;
                        height: 25px;
                        top: -1px;
                        right: -16px;
                    }
                    a {
                        i {
                            font-size : 24px;
                            color : ${colors.blue};
                        }
                    }
                }
                .mb-logo {
                    a {
                        img {
                            max-width: 120px;
                        }
                    }
                }
            }
            .mb-search {
                a.nav-search {
                    padding: 0;
                    margin-top: 8px;
                    i {
                        font-size: 20px;
                        color : ${colors.blue};
                        &:hover {
                            color : ${colors.red};
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : block;
        }
    }

    /* Mobile Menu Sidebar */
    .mb-sidebar {
        background: #ffffff;
        height: 100%;
        width: 320px;
        position: fixed;
        top : 0;
        left: -320px;
        overflow-y: auto;
        z-index: 9999;
        transition: all 400ms cubic-bezier(0.785,0.135,0.15,0.86);
        display: none;
        .mb-sidebar-heading {
            background: ${colors.blue};
            padding: 25px;
            h5 {
                color: #ffffff;
                text-transform: uppercase;
            }
            a {
                i {
                    font-size : 22px;
                    color : #ffffff;
                }
            }
        }
        .mb-sidebar-menu {
            padding: 25px;
            .accordion {
                .card {
                    border: none;
                    .card-header {
                        font-size  : 15px;
                        color      : ${colors.black1};
                        background-color : #ffffff;
                        text-transform: uppercase;
                        border: none;
                        padding: 15px 0;
                        margin-bottom: 0;
                        border-bottom: 1px solid ${colors.border1};
                        cursor: pointer;
                        i {
                            font-size: 17px;
                            color: ${colors.blue};
                            float: right;
                            padding: 3px;
                        }
                        &:hover {
                            color      : ${colors.blue};
                            i {
                                border-color : ${colors.blue};
                            }
                        }
                    }
                    .collapse {
                        .card-body {
                            padding: 0;
                            ul {
                                li {
                                    border-bottom: 1px solid ${colors.border1};
                                    a {
                                        font-size  : 13px;
                                        color      : ${colors.text1};
                                        display    : block;
                                        padding    : 15px 0;
                                        padding-left: 20px;
                                        &:hover {
                                            color      : ${colors.blue};
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:first-child {
                        .card-header {
                            border-top: 1px solid ${colors.border1};
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : block;
        }

        @media(max-width: 480px) {
            max-width: 275px;
        }
    }

    .mb-sidebar.visible {
        left: 0 !important;
    }

    .mb-sidebar-overlay {
        position        : fixed;
        left            : 0;
        top             : 0;
        height          : 100%;
        width           : 100%;
        display         : none;
        background-color: rgba(0, 0, 0, 0.9);
        z-index         : 1111;
        visibility      : hidden;
        opacity         : 0;
        transition      : 0.3s ease;

        @media(max-width: 767px) {
            display : block;
        }
    }

    .mb-sidebar-overlay.active {
        visibility: visible;
        opacity   : 1;
    }
`;