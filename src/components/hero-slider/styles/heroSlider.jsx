import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .hero-slider-area {
        .slick-slider {
            .slick-list {
                .slick-track {
                    .slick-slide {
                        .slider-item {
                            position: relative;
                            .image-container {
                                width   : 100%;
                                display : block;
                                overflow: hidden;
                                position: relative;
                                height  : 770px;

                                img.slider-image {
                                    width     : 100%;
                                    margin-top: 0;
                                }
                                &:before {
                                    position: absolute;
                                    content: "";
                                    background: #000000;
                                    opacity: 0.3;
                                    width: 100%;
                                    height: 100%;
                                    top: 0;
                                    left: 0;
                                }

                                @media only screen and (max-width: 767px) {
                                    height: 600px;
                                }

                                @media only screen and (max-width: 575px) {
                                    height: 500px;
                                }
                            }

                            .slider-table {
                                display : table;
                                width   : 100%;
                                height  : 100%;
                                position: absolute;
                                top     : 0;
                                left    : 0;
                                z-index : 9999;

                                .slider-tablecell {
                                    display       : table-cell;
                                    vertical-align: middle;

                                    .slider-box {
                                        .slider-subtitle {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            p {
                                                font-size     : 18px;
                                                color         : #ffffff;
                                                background    : ${colors.blue};
                                                display: inline-block;
                                                padding: 4px 15px;
                                                border-radius: 10px;
                                                margin-bottom : 20px;
                                            }
                                        }
                                        .slider-title {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            h1 {
                                                font-size: 52px;
                                                color: #ffffff;
                                                font-weight: 700;
                                                max-width: 700px;
                                                margin-bottom: 30px;
                                                position: relative;
                                                &:before {
                                                    position: absolute;
                                                    content: "";
                                                    background: ${colors.blue};
                                                    width: 60px;
                                                    height: 1px;
                                                    bottom: -15px;
                                                    left: 0;
                                                }
                                                &:after {
                                                    position: absolute;
                                                    content: "";
                                                    background: ${colors.blue};
                                                    width: 60px;
                                                    height: 1px;
                                                    bottom: -13px;
                                                    left: 0;
                                                }

                                                @media only screen and (max-width: 1199px) {
                                                    font-size: 44px;
                                                }

                                                @media only screen and (max-width: 767px) {
                                                    font-size: 38px;
                                                }

                                                @media only screen and (max-width: 575px) {
                                                    font-size: 30px;
                                                }
                                            }
                                        }

                                        .slider-desc {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            p {
                                                font-size: 18px;
                                                color: ${colors.border1};
                                                line-height: 32px;
                                                max-width: 685px;
                                                margin-bottom: 30px;
                                                font-weight: 300;

                                                @media only screen and (max-width: 1199px) {
                                                    max-width: 590px;
                                                }

                                                @media only screen and (max-width: 767px) {
                                                    font-size: 15px;
                                                }
                                            }
                                        }

                                        .slider-btn {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            a.slider-btn1 {
                                                font-size: 15px;
                                                color: #ffffff;
                                                background: ${colors.blue};
                                                display: inline-block;
                                                width: 145px;
                                                height: 50px;
                                                text-align: center;
                                                font-weight: 500;
                                                padding: 14px;
                                                border-radius: 0 25px;
                                                margin-right: 20px;

                                                &:hover {
                                                    background: ${colors.red};
                                                }
                                            }

                                            a.slider-btn2 {
                                                font-size: 15px;
                                                color: #ffffff;
                                                background: ${colors.black1};
                                                display: inline-block;
                                                width: 145px;
                                                height: 50px;
                                                text-align: center;
                                                font-weight: 500;
                                                padding: 14px;
                                                border-radius: 0 25px;

                                                &:hover {
                                                    background: ${colors.red};
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .slick-slide.slick-active.slick-current {
                        .slider-table {
                            .slider-tablecell {
                                .slider-subtitle {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }
                                .slider-title {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }

                                .slider-desc {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }

                                .slider-btn {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }
                            }
                        }
                    }
                }
            }
            .slick-dots {
                position: absolute;
                bottom: 15%;
                left: 0;
                width: 100%;
                ul {
                    li {
                        display: inline-block;
                        margin: 0 5px;
                        button {
                            border: none;
                            background: rgba(255, 255, 255, 0.3);
                            width: 20px;
                            height: 20px;
                            border-radius: 0 10px;
                            span {

                            }
                        }
                    }
                    li.slick-active {
                        button {
                            background: ${colors.red}; 
                        }
                    }
                }

                @media only screen and (max-width: 480px) {
                    display: none;
                }
            }
        }
    }
`;