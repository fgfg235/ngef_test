import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.jsx"

export const Styles = styled.div`
    .question-page {
        .questions-area {
            padding: 70px 0 30px;
            .question-box {
                .accordion-box {
                    .accordion-item {
                        margin-bottom: 40px;
                        .accordion-header {
                            margin-bottom: 25px;
                        }
                    }
                }
            }

            .banner {
                a {
                    img {
                        border-radius: 20px;
                        border: 1px solid ${colors.border1};
                    }
                }

                @media only screen and (max-width: 767px) {
                    display: none;
                }
            }

            @media only screen and (max-width: 767px) {
                padding: 70px 0 40px;
            }

            @media only screen and (max-width: 575px) {
                padding: 40px 0 10px;
            }
        }
    }
`;