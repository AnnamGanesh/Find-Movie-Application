import React from "react";
import { Carousel, CarouselIndicators, CarouselCaption } from "reactstrap";
import { CarouselItem, CarouselControl } from "reactstrap";
import { useState } from "react";

import "./carousel.css";

const items = [
  {
    src: "https://negaraviral.com/en1/wp-content/uploads/2021/10/Spider-Man-No-Way-Home-title-card-3.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "https://whatsondisneyplus.com/wp-content/uploads/2021/03/Iron-Man-2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/WonderWoman_4320x1080.jpeg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const CarouselCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="CarouselImage" />
        <CarouselCaption />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
export default CarouselCard;
