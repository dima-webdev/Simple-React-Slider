import React, {Component} from 'react';
import Slider from '../components/Slider';

const ArrowLeft = (props) => {
    return (
        <div id="arrow-left" className="arrow" onClick={props.goToPrevSlide}></div>
    );
}

export default ArrowLeft