import styled from "styled-components";

export const Styles = styled.div`
    .about-page {
        .about-us2-area {
            padding-top: 70px;

            @media only screen and (max-width: 575px) {
                padding-top: 35px;
            }
        }
        
        .faq-area {
            padding-bottom: 140px;

            @media only screen and (max-width: 1199px) {
                padding-bottom: 105px;
            }

            @media only screen and (max-width: 991px) {
                padding-bottom: 70px;
            }

            @media only screen and (max-width: 575px) {
                padding-bottom: 45px;
            }
        }

        .team-slider-area {
            padding-bottom: 70px;

            @media only screen and (max-width: 575px) {
                padding-bottom: 40px;
            }
        }
    }
`;