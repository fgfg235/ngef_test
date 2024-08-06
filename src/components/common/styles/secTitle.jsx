import styled from "styled-components";
import { colors } from "../element/elements.jsx";

export const Styles = styled.div`
    .sec-title {
        p {
            font-size: 16px;
            color: ${colors.blue};
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        
        h3 {
            color: ${colors.black1};
            line-height: 35px;
            font-weight: 700;
            max-width: 750px;
            margin : auto;
            margin-bottom: 60px;
            position: relative;
            &:before {
                position: absolute;
                content: "";
                background: ${colors.blue};
                width: 60px;
                height: 1px;
                bottom: -20px;
                left: 50%;
                margin-left: -30px;
            }
            &:after {
                position: absolute;
                content: "";
                background: ${colors.blue};
                width: 60px;
                height: 1px;
                bottom: -18px;
                left: 50%;
                margin-left: -30px;
            }
        }
    }
`;