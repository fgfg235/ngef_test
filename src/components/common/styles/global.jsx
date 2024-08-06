/*===========================================
Template Name: Trixol - React Js Cleaning Service Template
Author: Md Tahmidur Rahman
Author URL: http://snazzytheme.com/
Version: 1.0
==============================================*/

import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../element/elements.jsx";

export const GlobalStyle = createGlobalStyle`
    html {
        color      : ${colors.bg1};
        font-size  : 13px;
        line-height: 1.4;
    }

    ::-moz-selection {
        background : #b3d4fc;
        text-shadow: none;
    }

    ::selection {
        background : #b3d4fc;
        text-shadow: none;
    }

    hr {
        display   : block;
        height    : 1px;
        border    : 0;
        border-top: 1px solid ${colors.border3};
        margin    : 1em 0;
        padding   : 0;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
        vertical-align: middle;
    }

    fieldset {
        border : 0;
        margin : 0;
        padding: 0;
    }

    textarea {
        resize: vertical;
    }

    body {
        font-size     : 13px;
        background    : #ffffff;
        color         : ${colors.text1};
        letter-spacing: 0.3px;
        font-family   : ${fonts.poppins};
        font-weight   : 400;
    } 
    
    h1,
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
        margin : 0;
    }

    h1,
    h1 a {
        font-size: 40px;

        @media only screen and (max-width: 767px) {
            font-size: 30px;
        }

        @media only screen and (max-width: 575px) {
            font-size: 26px;
        }
    }

    h2,
    h2 a {
        font-size: 32px;
    }

    h3,
    h3 a {
        font-size: 28px;

        @media only screen and (max-width: 767px) {
            font-size: 26px;
        }

        @media only screen and (max-width: 575px) {
            font-size: 24px;
        }
    }

    h4,
    h4 a {
        font-size: 24px;
    }

    h5,
    h5 a {
        font-size: 20px;

        @media only screen and (max-width: 575px) {
            font-size: 16px;
        }
    }

    h6,
    h6 a {
        font-size: 16px;
    }

    p {
        padding : 0;
        margin : 0;
    }

    ul {
        padding: 0;
        margin : 0;
    }

    a,
    a:active,
    a:focus,
    a:hover,
    button:focus,
    button:hover {
        text-decoration: none;
        outline        : none;
    }

    a,
    button {
        transition: all 0.2s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
    }

    .padding-fix {
        padding-left : 0;
        padding-right: 0;
    }

    .padding-fix-r {
        padding-right: 0;
    }

    .padding-fix-l {
        padding-left: 0;
    }

    .margin-fix {
        margin-left : 0;
        margin-right: 0;
    }

    a.close-search {
        position : absolute;
        top      : 25px;
        right    : 5px;
        font-size: 26px;
        color    : ${colors.red};
    }
`;