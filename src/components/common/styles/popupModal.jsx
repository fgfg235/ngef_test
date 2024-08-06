import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    .booking-btn {
        color : #fff;
        background-color: ${colors.red};
        border: none;
        font-size: 14px;
        font-weight: 500;
        border-radius : 0 20px 0;
        width: 145px;
        height: 35px;
        margin-top: 4px;
        
        &:hover {
            background-color: ${colors.blue};
        }
        &:active, &:focus {
            box-shadow : none;
        }
    }

    .popup-modal {
        display: none;
        overflow: auto;
        padding-top: 150px;
        .modal-overlay {
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            display: block;
            background-color: rgba(0,0,0,0.8);
            z-index: 1111;
            transition: 0.3s ease;
        }
        .modal-box {
            padding: 30px 35px 35px;
            background : #fff;
            max-width : 500px;
            height: auto;
            margin : auto;
            position: fixed;
            top : 50%;
            left : 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            border-radius : 5px;
            .modal-title {
                position: relative;
                h4 {
                    color : ${colors.black2};
                    font-weight: 700;
                    margin-bottom: 40px;
                    position: relative;

                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -15px;
                        left: 50%;
                        margin-left: -30px;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -13px;
                        left: 50%;
                        margin-left: -30px;
                    }
                }
                button {
                    font-size : 24px;
                    color : ${colors.text3};
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    border: none;
                    background: transparent;
                    padding: 0;
                    &:hover {
                        color : ${colors.red};
                    }
                    i {

                    }
                }
            }
            .modal-form {
                form.appointment-form {
                    p.form-box {
                        padding   : 0;
                        width     : auto;
                        height    : auto;
                        background: transparent;
                        border    : none;
                        margin-bottom : 30px;
                        position  : relative;

                        input.form-control {
                            width           : 100%;
                            height          : 40px;
                            background      : transparent;
                            border          : 1px solid ${colors.border3};
                            font-size       : 14px;
                            padding         : 10px 15px;
                            color           : ${colors.text2};
                            border-radius   : 12px;

                            &:focus {
                                border-color: ${colors.blue};
                                outline: none;
                                box-shadow: none;
                            }

                            &::placeholder {
                                font-size  : 14px;
                                color      : ${colors.text2};
                            }
                        }

                        label.error {
                            font-size: 13px;
                            color      : ${colors.red};
                            position   : absolute;
                            top        : 100%;
                            left       : 0;
                            font-weight: 300;
                            line-height: 14px;
                            letter-spacing: 0;
                        }

                        select.form-control {
                            width           : 100%;
                            height          : 40px;
                            background      : transparent;
                            border          : 1px solid ${colors.border3};
                            font-size       : 14px;
                            padding         : 8px 10px;
                            color           : ${colors.text2};
                            border-radius   : 12px;
                            &:focus {
                                box-shadow : none;
                                border-color: ${colors.blue};
                            }
                        }

                        textarea {
                            width           : 100%;
                            height          : 130px;
                            background      : transparent;
                            border          : 1px solid ${colors.border3};
                            font-size       : 14px;
                            padding         : 10px 15px;
                            color           : ${colors.black2};
                            border-radius   : 12px;

                            &:focus {
                                border-color: ${colors.blue};
                                box-shadow : none;
                                outline: none;
                            }

                            &::placeholder {
                                font-size  : 14px;
                                color      : ${colors.text2};
                            }
                        }
                    }

                    button {
                        font-size : 15px;
                        color     : #fff;
                        background: ${colors.blue};
                        width     : 100%;
                        height    : 45px;
                        border    : none;
                        font-weight: 500;
                        border-radius : 0 30px;
                        margin-top: 0;
                        &:hover {
                            background: ${colors.red};
                        }
                    }
                }
            }
        }
    }

    .popup-modal.active {
        display: block;
    }
`;