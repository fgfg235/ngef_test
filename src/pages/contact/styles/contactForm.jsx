import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.jsx"

export const Styles = styled.div`
    form.contact-form {
        margin-top: 60px;
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
                font-size: 14px;
                color      : ${colors.red};
                position   : absolute;
                top        : 100%;
                left       : 0;
                line-height: 20px;
            }

            textarea.form-control {
                width           : 100%;
                height          : 185px;
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
            font-size : 16px;
            color     : #fff;
            background: ${colors.blue};
            width     : 220px;
            height    : 48px;
            border    : none;
            font-weight: 500;
            border-radius : 0 30px;
            margin-top: 0;
            &:hover {
                background: ${colors.red};
            }
        }
    }
`;