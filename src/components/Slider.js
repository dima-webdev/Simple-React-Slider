import React, {Component} from 'react';
import Slide from '../components/Slide';

import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';

export default class Slider extends Component {
    constructor(props) {
        super (props);
        this.state = {
            images: [
                "https://picsum.photos/id/237/1600/900",
                "https://picsum.photos/id/111/1600/900",
                "https://picsum.photos/id/157/1600/900"
            ],
            currentIndex: 0,
            translateValue: 0,
        };
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
          return;
        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth()
        }))
      }

    goToNextSlide = () => {

        //если текущий слайд - последний в списке, то делаем первый слайд текущим
        if(this.state.currentIndex === this.state.images.length-1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
 
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    

    slideWidth = () => {
        return document.querySelector('.slideOn').clientWidth;
    }

    render() {
        const styles = {
            transition: 'transform ease-out 0.45s',
            transform: `translateX(${this.state.translateValue}px)`
        };
        return (
            <div className="wrap">
                <LeftArrow 
                    prevSlide={this.goToPrevSlide}
                />
                <div id="slider">
                    <div className="slider-wrapper" style={styles}>
                    {
                        this.state.images.map((image, counter) => (
                            <Slide key={counter} image={image} />
                        ))
                    }     
                    </div> 
                </div>
                <RightArrow 
                    nextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}