import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .brand-area {
        background : ${colors.blue};
        padding : 60px 0 55px;
        .brand-slider {
            .slick-slider {
                .slick-list {
                    .slick-track {
                        .slick-slide {
                            .brand-item {
                                img {
                                    max-width: 130px;
                                    margin: auto;
                                }
                                
                                &:focus {
                                    outline: none;
                                }
                            }
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 575px) {
            padding: 40px 0 35px;
        }
    }
`;