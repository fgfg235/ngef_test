import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .hero-image-area {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        height             : 700px;

        .hero-table {
            display : table;
            height  : 100%;
            position: relative;
            z-index : 2;
                
            .hero-tablecell {
                display       : table-cell;
                vertical-align: bottom;
                align         : center;
                .hero-box {
                    background: rgba(255, 255, 255, 0);
                    padding: 40px 50px 50px;
                    border-radius: 25px;

                    .hero-heading {
                        p {
                            font-size    : 20px;
                            color        : ${colors.black1};
                            margin-bottom: 12px;
                            font-weight  : 500;

                            @media only screen and (max-width: 767px) {
	                            font-size: 18px;
                            }
                        }
                    }

                    .hero-title {
                        h1 {
                            color         : ${colors.black1};
                            font-weight   : 700;
                            margin-bottom : 30px;
                            position : relative;

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
                        }
                    }

                    .hero-desc {
                        p {
                            font-size    : 15px;
                            color        : ${colors.black2};
                            line-height: 27px;
                            margin-bottom: 30px;
                            font-weight  : 400;
                        }
                    }

                    .hero-btn {
                        text-align  : center;

                        a.hero-btn {
                            font-family: yg-jalnan;
                            font-size : 15px;
                            color     : ${colors.acefairYellow};
                            display   : inline-block;
                            width     : 145px;
                            height    : 150px;
                            text-align: center;
                            font-weight: 500;
                            padding   : 14px;
                            border : thick solid ${colors.acefairYellow};
                            border-radius : 0 25px;
                            margin: 0px 10px;

                            i {
                                font-size: 18px;
                                transform: translateY(8%);
                                margin-left: 5px;
                            }

                            &:hover {
                                background: ${colors.red};
                            }

                            @media only screen and (max-width: 767px) {
                                font-size: 14px;
                                width: 130px;
                                height: 45px;
                                padding: 12px;
                            }
                        }

                        button.play-button {
                            position  : relative;
                            z-index   : 10;
                            transform : translateX(0) translateY(18%);
                            box-sizing: content-box;
                            display   : inline-block;
                            width     : 32px;
                            height    : 32px;
                            border-radius : 50%;

                            i {
                                position   : relative;
                                font-size  : 30px;
                                color      : #ffffff;
                                z-index    : 11;
                                padding-top: 2px;
                                margin-left: 2px;
                            }

                            span {
                                font-size: 13px;
                                color: ${colors.black1};
                                font-weight: 500;
                                position: absolute;
                                top: 7px;
                                right: -105px;
                            }

                            &::before {
                                content   : "";
                                position  : absolute;
                                z-index   : 0;
                                left      : 50%;
                                top       : 50%;
                                transform : translateX(0) translateY(18%);
                                display   : block;
                                width     : 60px;
                                height    : 60px;
                                background: ${colors.red};
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
                                width     : 50px;
                                height    : 50px;
                                background: ${colors.black1};
                                border-radius : 50%;
                                transition : all 200ms;
                            }

                            &:hover {
                                i, span {
                                    color: ${colors.red};
                                }
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

                            @media only screen and (max-width: 480px) {
                                display: none;
                            }
                        }
                    }

                    @media only screen and (max-width: 480px) {
                        padding: 15px 25px 23px;
                    }
                }
            }
        }

        @media only screen and (max-width: 767px) {
            height: 550px;
        }

        @media only screen and (max-width: 575px) {
            height: 470px;
        }
    }
`;