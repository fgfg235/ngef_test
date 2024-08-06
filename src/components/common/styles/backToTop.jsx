import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    button.back-to-top { 
        background: ${colors.red};
        position: fixed;
        bottom: 1px;
        right: 30px;
        width: 45px;
        height: 45px;
        border-radius: 0 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        border: none;
        color: #ffffff;
        text-decoration: none;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease 0s;
        &:hover {
            background: ${colors.blue};
        }
    }

    button.back-to-top.active {
        bottom: 60px;
        opacity: 1;
        pointer-events: auto;
    }
`;