import React from 'react';
import Datas from '../../data/header/text-slider.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/textSlider.jsx";

class TextSlider extends React.Component {
    state = {
        Data: Datas
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover: false,
        };
        return (
            <Styles>
                {/* Welcome Slider */}
                <div className="welcome-text">
                    <Slider {...settings}>
                        {
                            this.state.Data.map((data, i) => (
                                <div className="slider-item" key={i}>
                                    <p>{data.sliderText}</p>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Styles >
        )
    }
}

export default TextSlider