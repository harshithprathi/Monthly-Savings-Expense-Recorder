import React, { useState, useEffect } from 'react';
import '../../src/styles.css';

function ContentCard() {
  const [activeCard, setActiveCard] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prevCard) => (prevCard === 2 ? 0 : prevCard + 1));
    }, 1500);

    setIntervalId(interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index);
    clearInterval(intervalId);
    const interval = setInterval(() => {
      setActiveCard((prevCard) => (prevCard === 2 ? 0 : prevCard + 1));
    }, 10000);
    setIntervalId(interval);
  };

  return (
    <div className="sliding-content-cards">
      <div className={`card ${activeCard === 0 ? 'active' : ''}`} onClick={() => handleCardClick(0)}>
        <h3>Track Your Money...</h3>
        <br />
        <p>Effortlessly monitor and manage your monthly household income with our intuitive tracking system. Stay organized and make informed financial decisions with ease.</p>
        <br />
        <button class="beautiful-button">Get Started!</button>
      </div>
      <div className={`card ${activeCard === 1 ? 'active' : ''}`} onClick={() => handleCardClick(1)}>
        <h3>Optimise Your Expenses...</h3>
        <br />
        <p>Having difficulty in tracking expenses? Don't worry we help you by making an organised and categorised way of representing your monthly expenses.</p>
        <br />
        <button class="beautiful-button">Get Started!</button>
      </div>
      <div className={`card ${activeCard === 2 ? 'active' : ''}`} onClick={() => handleCardClick(2)}>
        <h3>Increase Your Savings...</h3>
        <br />
        <p>Want to increase your savings? We keep a track of your expenses to help you identify and reduce the unnecessary expenses thereby help in increasing your savings for a secure future.</p>
        <br />
        <button class="beautiful-button">Get Started!</button>
      </div>
    </div>
  );
};

export default ContentCard;

// import React, { useState, useEffect } from 'react';
// import './styles.css';

// function ContentCard() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [intervalId, setIntervalId] = useState(null);
//     const sliderData = [
//     {
//       title: 'Card 1',
//       text: 'Some text goes here...',
//     },
//     {
//       title: 'Card 2',
//       text: 'Some text goes here...',
//     },
//     {
//       title: 'Card 3',
//       text: 'Some text goes here...',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
//     }, 3000);

//     setIntervalId(interval);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const handleSlide = (index) => {
//     setActiveIndex(index);
//     clearInterval(intervalId);
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
//     }, 2000);
//     setIntervalId(interval);
//   };

//   return (
//     <div className="slider">
//       {sliderData.map((slide, index) => (
//         <div
//           className={`slide ${activeIndex === index ? 'active' : ''}`}
//           key={index}
//           onClick={() => handleSlide(index)}
//         >
//           <h3>{slide.title}</h3>
//           <p>{slide.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContentCard;
