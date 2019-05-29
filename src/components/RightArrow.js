import React, {Component} from 'react';
import Slider from '../components/Slider';

const RightArrow = (props) => {
    return (
        <div id="arrow-right" className="arrow" onClick={props.nextSlide}></div>
    );
}

export default RightArrow