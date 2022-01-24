import React from "react";
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './a.jpg'
import pic2 from './b.jpg'


const slideImages = [
    pic1,
    pic2
  ];
  

const Slides = () => {
  return (
    <div className = 'slide' >
      <Slide easing="ease">
        <div className="each-slide">
          <div className = 'image' style={{ backgroundImage: `url(${slideImages[0]})`, width : '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})`,width : '100%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})`, width : '100%' , backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Slides;
