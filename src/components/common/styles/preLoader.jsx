import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    .preloader {
        background: #ffffff;
        display: block;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100000;
        .load-list {
            width: 50px;
            height: 50px;
            position: relative;
            top: 50%;
            left: 0;
            margin: 0 auto;
            transform: translateY(-50%);
            .load {
                position: absolute;
                background: ${colors.blue};
                width: 100%;
                height: 100%;
                opacity: 0.6;
                border-radius : 50%;
                animation: bounce 2s infinite ease-in-out;
            }
            .load2 {
                background: ${colors.blue};
                animation-delay: -1s;
            }
        }
    }

    @-webkit-keyframes bounce {
        0%, 100% {
            -webkit-transform: scale(0);
        }
        50% {
            -webkit-transform: scale(1);
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: scale(0);
            -webkit-transform: scale(0);
        }
        50% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
    }
`;