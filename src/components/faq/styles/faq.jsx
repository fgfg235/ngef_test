import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .faq-area {
        padding : 65px 0 70px;

        .chat-box {
            background : ${colors.bg1};
            padding : 30px;
            border-radius: 30px;
            img {
                max-width: 190px;
                border-radius: 0 35%;
                margin-bottom: 20px;
            }
            h5 {
                color: ${colors.black1};
                font-weight: 700;
                margin-bottom: 15px;
            }
            p {
                font-size: 15px;
                color: ${colors.text2};
                margin-bottom: 25px;
            }
            span {
                font-size: 13px;
                color: ${colors.text3};
                display: block;
                margin-bottom: 10px;
            }
            form.chat-form {
                input {
                    display: block;
                    width: 265px;
                    height: 40px;
                    background: transparent;
                    border: 1px solid ${colors.blue};
                    border-radius: 30px;
                    margin: auto;
                    padding-left: 20px;
                    margin-bottom: 20px;
                    &::placeholder {
                        color: ${colors.text2};
                        font-weight : 500;
                    }

                    @media only screen and (max-width: 991px) {
                        width: 100%;
                    }
                }
                button {
                    color: #fff;
                    background: ${colors.red};
                    border: none;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 0 25px;
                    width: 140px;
                    height: 40px;
                    &:hover {
                        background : ${colors.blue};
                    }
                }
            }
        }

        @media only screen and (max-width: 575px) {
            padding: 40px 0 45px;
        }
    }
`;