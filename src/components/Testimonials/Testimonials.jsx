import { TestimonialCard } from "./TestimonialCard";
import { testimonialData } from "../../constants";
import { useState } from "react";
import Carousel from "react-simply-carousel";
import "./carousel.css";
import { ArrowRight } from "./Arrows";
import { ArrowLeft } from "./Arrows";

export const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Carousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "none",
        },
      }}
      preventScrollOnSwipe
      swipeTreshold={60}
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: <ArrowLeft />,
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
        },
      }}
      backwardBtnProps={{
        children: <ArrowRight />,
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
        },
      }}
      dotsNav={{
        show: false,
      }}
      itemsToShow={2}
      speed={400}
      centerMode
    >
      {testimonialData.map((data) => (
        <TestimonialCard
          key={data.id}
          photoSrc={data.photoSrc}
          name={data.name}
          text1={data.text1}
          text2={data.text2}
        />
      ))}
    </Carousel>
  );
};
