import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .accordion-box {
        margin : 30px 0px;
        .accordion-item {
            font-family : TheJamsil5Bold;
            margin-bottom: 12px;
            border : none;
            .accordion-header {
                margin-bottom: 15px;
                box-shadow: rgba(0,0,0,0.06) 0px 8px 20px;
                padding: 19px 25px;
                border-radius: 15px;
                cursor: pointer;
                position: relative;
                text-align : center;

                p {
                    font-size  : 16px;
                    color      : ${colors.black2};
                    font-weight: 600;
                    line-height: 18px;
                }

                .accordion-indicator {
                    i {
                        font-size : 16px;
                        color : ${colors.blue};
                        position : absolute;
                        right: 20px;
                        top: 22px;
                    }
                }
            }

            .accordion-body {
                background-color : ${colors.bg1};
                border-radius: 15px;
                font-size   : 15px;
                color       : ${colors.text2};
                line-height : 28px;
                padding: 13px 25px;
                    .accordion-division {
                        text-align: right;
                    }
                    .accordion-content {
                        text-align: left;  
                    }
            }

            &:last-child {
                margin-bottom : 0;
            }
        }

        @media only screen and (max-width: 767px) {
            margin-bottom: 40px;
        }
    }
`;