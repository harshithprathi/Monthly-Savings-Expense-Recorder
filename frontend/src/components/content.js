import React, { useState, useEffect } from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import '../../src/styles.css';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'font-awesome/css/font-awesome.min.css';
// import { faChevronRight, faChevronLeft } from '@fortawesome/fontawesome-free-solid'



function Content() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        // Fetch the image paths or import them locally
        const images = [
        require('../images/pic1.jpeg'),
        require('../images/pic2.webp'),
        require('../images/pic3.png'),
        require('../images/pic4.jpeg'),
        ];
        setImageList(images);
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === imageList.length - 1 ? 0 : prevSlide + 1));
          }, 2000);
      
          return () => clearInterval(interval);
        }, [imageList.length]);

    // const goToNextSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide === imageList.length - 1 ? 0 : prevSlide + 1));
    // };

    // const goToPreviousSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide === 0 ? imageList.length - 1 : prevSlide - 1));
    // };

    return (
    
        <div className="slideshow">
        {imageList.length > 0 && (
            <img src={imageList[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
        )}
        </div>
      );
};



export default Content;