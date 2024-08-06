import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.jsx"

export const Styles = styled.div`
    .contact-page {
        .contact-area {
            padding: 65px 0 0;
            .contact-details {
                .contact-title {
                    margin-bottom: 20px;
                    h5 {
                        color: ${colors.black1};
                        font-weight: 600;
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
                            bottom: -8px;
                            left: 0;
                        }
                    }
                    p {
                        font-size: 16px;
                        color: ${colors.text1};
                        line-height: 25px;
                    }
                }

                .contact-box {
                    margin-bottom: 25px;
                    .icon-box {
                        margin-bottom: 20px;
                        .con-icon {
                            i {
                                font-size: 20px;
                                color: ${colors.blue};
                                margin-right: 12px;
                            }
                        }
                        .icon-details {
                            h6 {
                                color: ${colors.black1};
                                font-weight: 600;
                                margin-bottom: 10px;
                            }
                            p {
                                font-size: 14px;
                                color: ${colors.text2};
                                line-height: 25px;
                            }
                        }
                    }
                }

                .contact-social {
                    ul {
                        li {
                            a {
                                i {
                                    font-size: 14px;
                                    color: #ffffff;
                                    display: inline-block;
                                    width: 33px;
                                    height: 33px;
                                    text-align: center;
                                    padding-top: 10px;
                                    border-radius: 0 12px 0;
                                    &:hover {
                                        background: ${colors.red} !important;
                                    }
                                }
                                
                                i.fa-facebook-f {
                                    background: #4267b2;
                                }
                                i.fa-twitter {
                                    background: #1da1f2;
                                }
                                i.fa-linkedin-in {
                                    background: #2867b2;
                                }
                                i.fa-instagram {
                                    background: #3f729b;
                                }
                                i.fa-pinterest-p {
                                    background: #E60023 ;
                                }
                            }
                        }
                    }
                }
            }

            .google-map-area {
                @media only screen and (max-width: 575px) {
                    margin-top: 40px;
                }

                @media only screen and (max-width: 480px) {
                    height: 350px;
                }
            }

            @media only screen and (max-width: 575px) {
                padding: 35px 0 0;
            }
        }
    }
`;