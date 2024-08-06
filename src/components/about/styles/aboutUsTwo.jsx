import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .about-us2-area {
        padding : 145px 0 70px;
        .about-images {
            position : relative;
            border-radius: 30px;
            overflow : hidden;
            img {
                
            }
            &:before {
                position: absolute;
                content: '';
                width: 85%;
                height: 88%;
                top: 6%;
                left: 8%;
                border: 10px solid rgba(255, 255, 255, 0.5);
                border-radius: 25px;
                box-shadow: rgba(24, 43, 73, 0.3) 0 0 0 120px;
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
                    line-height: 27px;
                    margin-bottom: 25px;
                }
            }
            .about-iconbox {
                h6 {
                    color: ${colors.red};
                    font-weight: 600;
                    margin-bottom: 15px;
                    line-height: 25px;
                }
                ul {
                    margin-bottom: 25px;
                    li {
                        font-size: 14px;
                        color: ${colors.text2};
                        margin-bottom: 10px;
                        i {
                            font-size: 24px;
                            color: ${colors.blue};
                            margin-right: 8px;
                            float: left;
                            height: 35px;
                            transform: translateY(8%);

                            @media only screen and (max-width: 767px) {
                                transform: translateY(-6%);
                            }
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }

                        @media only screen and (max-width: 767px) {
                            margin-bottom: 15px;
                        }
                    }
                }
                a.rmore-btn {
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
                }
            }

            .video-player {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                border-radius: 20px;
                overflow: hidden;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.black1};
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    opacity: 0.8;
                }

                p {
                    font-size: 18px;
                    color: #ffffff;
                    position: relative;
                    z-index   :1;
                    text-align: center;
                    transform: translateX(0) translateY(240%);
                }
                button.play-btn {
                    position: absolute;
                    z-index: 10;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-7%);
                    box-sizing: content-box;
                    display: block;
                    width: 32px;
                    height: 44px;
                    border-radius: 50%;
                    i {
                        position   : relative;
                        font-size  : 42px;
                        color      : ${colors.black1};
                        z-index    : 11;
                        padding-top: 2px;
                        margin-left: -4px;
                    }

                    &::before {
                        content   : "";
                        position  : absolute;
                        z-index   : 0;
                        left      : 50%;
                        top       : 50%;
                        transform : translateX(0) translateY(18%);
                        display   : block;
                        width     : 75px;
                        height    : 75px;
                        background: ${colors.blue};
                        border-radius : 50%;
                        animation: pulse-border 1500ms ease-out infinite;
                    }

                    &:after {
                        content   : "";
                        position  : absolute;
                        z-index   : 1;
                        left      : 50%;
                        top       : 50%;
                        transform : translateX(-50%) translateY(-50%);
                        display   : block;
                        width     : 65px;
                        height    : 65px;
                        background: #ffffff;
                        border-radius : 50%;
                        transition : all 200ms;
                    }

                    @keyframes pulse-border {
                        0% {
                            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                            opacity  : 1;
                        }

                        100% {
                            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                            opacity  : 0;
                        }
                    }
                    &:hover {
                        i {
                            color: ${colors.blue};
                        }
                    }
                }
            }

            @media only screen and (max-width: 991px) {
                padding-left: 0;
            }
        }

        .counter-boxes {
            margin-top: 70px;
            .col-md-3 {
                border-right: 2px dashed ${colors.border1};
                .counter-box {
                    i {
                        font-size: 48px;
                        color: ${colors.border3};
                        display: inline-block;
                        margin-top: -2px;
                        margin-bottom: -8px;
                        margin-right: 15px;

                        @media only screen and (max-width: 991px) {
                            font-size: 40px;
                        }
                    }
                    h2 {
                        color: ${colors.black1};
                        font-weight: 700;
                        margin-top: -5px;
                        small {
                            font-size: 24px;
                            color: ${colors.red};
                            display: inline-block;
                            transform: translateY(8%);
                            margin-left: 3px;
                        }

                        @media only screen and (max-width: 991px) {
                            font-size: 26px;
                        }
                    }
                    p {
                        font-size: 14px;
                        color: ${colors.text2};
                        font-weight: 500;

                        @media only screen and (max-width: 991px) {
                            font-size: 13px;
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        margin-bottom: 25px;
                    }
                }
                &:last-child {
                    border-right: none;
                }
            }
        }

        @media only screen and (max-width: 991px) {
            padding: 125px 0 70px;
        }

        @media only screen and (max-width: 767px) {
            padding: 65px 0 70px;
        }

        @media only screen and (max-width: 575px) {
            padding: 30px 0 45px;
        }
    }
`;