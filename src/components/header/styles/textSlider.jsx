import styled from "styled-components";
import { colors } from "../../common/element/elements.jsx";

export const Styles = styled.div`
    .welcome-text {
        margin-top: -1px;
        .slider-item {
            p {
                font-size : 14px;
                color: ${colors.text1};

                @media only screen and (max-width: 991px) {
                    font-size: 13px;
                }
            }
        }
    }
`;