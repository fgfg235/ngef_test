import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    footer.footer {
        background : ${colors.black1};
        padding : 50px 0 45px;
        .footer-top {
            padding-bottom: 43px;
            .logo {
                a {
                    img {

                    }
                }

                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
            .registration {
                color: ${colors.acefairWhite}
                form {
                    position: relative;
                    margin-top: -7px;
                    border-radius: 25px;
                    overflow: hidden;
                    input {
                        width: 100%;
                        height: 48px;
                        background-color: rgba(255, 255, 255, 0.08);
                        font-size: 15px;
                        padding: 15px 25px;
                        color: #ffffff;
                        border: none;
                        &::placeholder {
                            color: ${colors.border3};
                        }

                        @media only screen and (max-width: 575px) {
                            height: 40px;
                        }
                    }
                    button {
                        background: ${colors.red};
                        border: none;
                        font-size: 16px;
                        color: #ffffff;
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 130px;
                        height: 48px;
                        &:hover {
                            background: ${colors.blue};
                        }

                        @media only screen and (max-width: 575px) {
                            height: 40px;
                        }
                    }

                    @media only screen and (max-width: 575px) {
                        max-width: 400px;
                        margin: auto;
                        margin-bottom: 20px;
                    }
                }
            }
            .social {
                ul {
                    li {
                        a {
                            font-size: 15px;
                            color: ${colors.red};
                            display: inline-block;
                            background: rgba(255, 255, 255, 0.08);
                            width: 32px;
                            height: 32px;
                            text-align: center;
                            border-radius: 0 50%;
                            padding-top: 6px;
                            i {

                            }
                            &:hover {
                                background: ${colors.blue};
                                color: #ffffff;
                            }
                        }
                    }
                }

                @media only screen and (max-width: 575px) {
                    text-align: center !important;
                }
            }
        }
        .footr-main {
            padding: 65px 0 45px;
            .ft-about {
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 35px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                p {
                    font-size: 14px;
                    color: ${colors.text3};
                    line-height: 28px;
                    margin-bottom: 20px;
                }
                ul {
                    li {
                        color: ${colors.text3};
                        margin-bottom: 12px;
                        i {
                            font-size: 18px;
                            color: ${colors.red};
                            width: 30px;
                            vertical-align: top;
                        }
                    }
                }

                @media only screen and (max-width: 991px) {
                    margin-bottom: 30px;
                }
            }
            .ft-link {
                padding-left: 25px;
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 30px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                ul {
                    li {
                        a {
                            font-size: 14px;
                            color: ${colors.text3};
                            line-height: 33px;
                            i {
                                font-size: 12px;
                                color: ${colors.red};
                                margin-right: 10px;
                            }
                            &:hover {
                                color: ${colors.blue};
                                i {
                                    color: ${colors.blue};
                                }
                            }
                        }
                    }
                }

                @media only screen and (max-width: 991px) {
                    padding-left: 0;
                }

                @media only screen and (max-width: 767px) {
                    margin-bottom: 30px;
                }
            }
            .ft-post {
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 43px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                .post-box {
                    margin-bottom: 25px;
                    .post-img {
                        img {
                            max-width: 75px;
                            margin-right: 15px;
                            border-radius: 10px;
                        }
                    }
                    .post-content {
                        span {
                            display: block;
                            color: ${colors.red};
                            margin-bottom: 5px;
                        }
                        a {
                            font-size: 14px;
                            color: ${colors.text3};
                            &:hover {
                                color: ${colors.blue};
                            }
                        }
                    }
                }

                @media only screen and (max-width: 767px) {
                    margin-bottom: 40px;
                }
            }
            .ft-gallery {
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 43px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                .gallery-box {
                    img {
                        max-width: 75px;
                        margin-right: 10px;
                        margin-bottom: 12px;
                        border-radius: 10px;
                    }
                }
            }

            @media only screen and (max-width: 575px) {
                padding: 40px 0 30px;
            }
        }

        .copyright-area {
            background: rgba(255, 255, 255, 0.08);
            padding: 20px 25px;
            border-radius: 18px;
            .copy-text {
                p {
                    color: ${colors.text3};
                    i {
                        color: ${colors.blue};
                    }
                    a {
                        color: ${colors.blue};
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
            ul.copy-menu {
                li {
                    color: ${colors.text3};
                    a {
                        color: ${colors.text3};
                        font-weight: 500;
                        &:hover {
                            color: ${colors.blue};
                        }
                    }
                    &:first-child {
                        a {
                            padding-right: 5px;
                        }
                    }
                }
            }

            @media only screen and (max-width: 767px) {
                text-align: center;
                .text-right {
                    text-align: center !important;
                }
            }
        }
    }
`;