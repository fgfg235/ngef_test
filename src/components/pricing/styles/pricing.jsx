import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .pricing-area {
        background: ${colors.bg1};
        padding: 65px 0 70px;
        
        .nav {
            margin-bottom: 40px;
            .nav-item {
                a.nav-link {
                    font-size: 15px;
                    color: #ffffff;
                    background : ${colors.black1};
                    width: 95px;
                    text-align: center;
                    padding: 10px;
                    font-weight: 500;
                }
                a.nav-link.month-link {
                    border-radius: 30px 0 0 30px;
                }
                a.nav-link.year-link {
                    border-radius: 0 30px 30px 0;
                }
                a.nav-link.active {
                    background : ${colors.red};
                }
            }
        }
        .tab-content {
            .tab-pane {
                .tab-box {
                    background: #ffffff;
                    padding: 30px 30px 35px;
                    border-radius: 0 30px;
                    box-shadow: rgba(0,0,0,0.06) 0px 8px 20px;
                    h4 {
                        color: ${colors.black1};
                        font-weight: 700;
                        margin-bottom: 20px;
                    }
                    ul {
                        margin-bottom: 15px;
                        li {
                            font-size: 14px;
                            color: ${colors.text2};
                            line-height: 28px;
                            i {
                                font-size: 16px;
                                color: ${colors.blue};
                                margin-right: 8px;
                            }
                        }
                    }
                    p {
                        color: ${colors.text3};
                        font-weight: 500;
                        margin-bottom: 20px;
                        span {
                            font-size: 16px;
                            color: ${colors.black1};
                            strong {
                                font-size: 28px;
                            }
                        }
                    }
                    button {
                        font-size: 15px;
                        color: #fff;
                        background: ${colors.red};
                        border: none;
                        font-weight: 500;
                        border-radius: 0 25px;
                        width: 100%;
                        height: 40px;
                        &:hover {
                            background: ${colors.blue};
                        }
                    }

                    &:hover {
                        box-shadow: rgba(0,0,0,0.09) 0px 10px 20px;
                    }

                    @media only screen and (max-width: 1199px) {
                        padding: 20px 20px 25px;
                    }

                    @media only screen and (max-width: 991px) {
                        margin-bottom: 30px;
                    }

                    @media only screen and (max-width: 575px) {
                        padding: 30px 30px 35px;
                    }
                }

                .tab-box.tab-selected {
                    background : ${colors.black1};
                    h4 {
                        color : #ffffff;
                    }
                    ul {
                        li {
                            color : ${colors.border3};
                        }
                    }
                    p {
                        span {
                            color : #ffffff;
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 991px) {
            padding: 65px 0 40px;
        }

        @media only screen and (max-width: 575px) {
            padding: 40px 0 10px;
        }
    }
`;