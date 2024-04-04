import { blogData } from "../../constants";
import { BlogCard } from "./BlogCard";
import Carousel from "react-simply-carousel";
import { useState } from "react";
import "../Testimonials/carousel.css";

export const BlogCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Carousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "none",
          overscrollBehavior: "contain",
          marginBottom: "60px",
        },
      }}
      preventScrollOnSwipe={true}
      swipeTreshold={250}
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        style: {
          width: "50%",
          height: "604px",
          alignSelf: "center",
        },
      }}
      backwardBtnProps={{
        style: {
          width: "50%",
          height: "604px",
          alignSelf: "center",
        },
      }}
      dotsNav={{
        show: false,
      }}
      itemsToShow={5}
      speed={400}
      centerMode
    >
      {blogData.map((data) => (
        <BlogCard
          key={data.id}
          photoSrc={data.photoSrc}
          title={data.title}
          text={data.text}
          time={data.time}
        />
      ))}
    </Carousel>
  );
};
