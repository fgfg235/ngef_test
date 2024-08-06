import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .about-us-area {
        .about-image {
            position: relative;
            img.about-img1 {
                max-width : 65%;
            }
            img.about-img2 {
                position: absolute;
                max-width : 65%;
                right : 0;
                bottom : -145px;
                border-left : 8px solid #ffffff;
                border-top: 8px solid #ffffff;

                @media only screen and (max-width: 1199px) {
                    bottom: -185px;
                }
            }

            .about-shape1 {
                position: relative;
                &:before {
                    position: absolute;
                    content: '';
                    background : ${colors.blue};
                    width: 80px;
                    height: 8px;
                    top: 0;
                    right: 0;
                }
                &:after {
                    position: absolute;
                    content: '';
                    background : ${colors.blue};
                    width: 8px;
                    height: 80px;
                    top: 0;
                    right: 0;
                }
            }
            .about-shape11 {
                position: relative;
                &:before {
                    position: absolute;
                    content: '';
                    background : ${colors.black1};
                    width: 65px;
                    height: 8px;
                    top: 15px;
                    right: 15px;
                }
                &:after {
                    position: absolute;
                    content: '';
                    background : ${colors.black1};
                    width: 8px;
                    height: 65px;
                    top: 15px;
                    right: 15px;
                }
            }

            .about-shape2 {
                position: relative;
                &:before {
                    position: absolute;
                    content: '';
                    background : ${colors.blue};
                    width: 80px;
                    height: 8px;
                    bottom: -146px;
                    left: 0;
                    
                    @media only screen and (max-width: 1199px) {
                        bottom: -185px;
                    }
                }
                &:after {
                    position: absolute;
                    content: '';
                    background : ${colors.blue};
                    width: 8px;
                    height: 80px;
                    bottom: -146px;
                    left: 0;

                    @media only screen and (max-width: 1199px) {
                        bottom: -185px;
                    }
                }
            }
            .about-shape22 {
                position: relative;
                &:before {
                    position: absolute;
                    content: '';
                    background : ${colors.black1};
                    width: 65px;
                    height: 8px;
                    bottom: -131px;
                    left: 15px;

                    @media only screen and (max-width: 1199px) {
                        bottom: -170px;
                    }
                }
                &:after {
                    position: absolute;
                    content: '';
                    background : ${colors.black1};
                    width: 8px;
                    height: 65px;
                    bottom: -131px;
                    left: 15px;

                    @media only screen and (max-width: 1199px) {
                        bottom: -170px;
                    }
                }
            }

            @media only screen and (max-width: 991px) {
                display: none;
            }
        }

        .about-content {
            padding-left : 20px;
            .about-title {
                p {
                    font-size: 16px;
                    color : ${colors.blue};
                    font-weight : 500;
                    text-transform : uppercase;
                    margin-bottom: 5px;
                }
            }
            .about-subtitle {
                h3 {
                    color : ${colors.black1};
                    line-height : 35px;
                    font-weight : 700;
                    margin-bottom: 35px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -20px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -18px;
                        left: 0;
                    }
                }
            }
            .about-desc {
                p {
                    font-size : 15px;
                    color : ${colors.text2};
                    line-height: 25px;
                    margin-bottom: 25px;
                }
            }
            .about-iconbox {
                margin-bottom: 15px;
                .box-item {
                    margin-bottom: 20px;
                    .box-icon {
                        i {
                            font-size : 24px;
                            color : ${colors.blue};
                            margin-right: 8px;
                        }
                    }
                    .box-title {
                        h6 {
                            color : ${colors.black1};
                            font-weight : 600;
                            margin-bottom: 6px;
                        }
                        p {
                            font-size : 14px;
                            color : ${colors.text2};
                        }
                    }
                }
            }
            .about-morebtn {
                a {
                    color: #fff;
                    background-color: ${colors.red};
                    font-size: 16px;
                    font-weight: 500;
                    border-radius: 0 25px;
                    width: 145px;
                    height: 45px;
                    text-align: center;
                    display: inline-block;
                    padding-top: 11px;
                    margin-right: 30px;

                    &:hover {
                        background-color: ${colors.blue};
                    }

                    @media only screen and (max-width: 575px) {
                        font-size: 14px;
                        width: 123px;
                        height: 42px;
                    }
                }

                i {
                    font-size: 24px;
                    color : ${colors.blue};
                    border : 1px solid ${colors.border3};
                    border-radius: 50%;
                    width: 45px;
                    height: 45px;
                    text-align: center;
                    padding-top: 11px;
                    margin-right: 8px;

                    @media only screen and (max-width: 575px) {
                        font-size: 20px;
                        width: 42px;
                        height: 42px;
                    }
                }
                p {
                    font-size: 14px;
                    color: ${colors.text3};
                    font-weight: 500;
                }
                h5 {
                    color: ${colors.black1};
                    font-weight: 600;
                }
            }

            @media only screen and (max-width: 991px) {
                padding-left: 0;
            }
        }

        @media only screen and (max-width: 991px) {
            padding: 65px 0 70px;
        }

        @media only screen and (max-width: 575px) {
            padding: 40px 0 45px;
        }
    }
`;