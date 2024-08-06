import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    .breadcrumb-area {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        padding-top: 170px;
        height: 300px;
        position           : relative;

        &:before {
            position  : absolute;
            content   : '';
            background: ${colors.acefairBlue};
            opacity   : 0.6;
            width     : 100%;
            height    : 100%;
            top       : 0;
            left      : 0;
        }

        .breadcrumb-box {
            .breadcrumb-title {
                p.page-desc {
                    font-size : 14px;
                    color : ${colors.border3};
                }
                h1.page-title {
                    color : ${colors.border1};
                    font-weight: 600;
                }
            }

            nav {
                margin-top: 6px;
                ol.breadcrumb {
                    background: ${colors.blue};
                    border-radius: 15px;
                    min-width: 180px;
                    height: 50px;
                    text-align: center;
                    padding: 15px 25px;
                    justify-content: center!important;

                    li.breadcrumb-item {
                        font-size: 14px;
                        color: #fff;
                        font-weight: 500;
                        a {
                            color: #ffffff;

                            &:hover {
                                color: ${colors.red};
                            }
                        }

                        @media only screen and (max-width: 575px) {
                            font-size: 13px;
                        }
                    }

                    li.breadcrumb-item.active {
                        color: ${colors.border3};
                        font-weight: 400;

                        &::before {
                            color: ${colors.border3};
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        min-width: 150px;
                        height: 45px;
                        padding: 13px 18px;
                    }

                    @media only screen and (max-width: 575px) {
                        min-width: 130px;
                        height: 40px;
                        padding: 11px 12px;
                    }
                }
            }
        }

        @media only screen and (max-width: 767px) {
            height: 200px;
            padding-top: 70px;
        }

        @media only screen and (max-width: 575px) {
            height: 130px;
            padding-top: 40px;
        }
    }
`;