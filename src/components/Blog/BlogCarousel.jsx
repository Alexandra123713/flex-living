import { blogData } from "../../constants";
import { BlogCard } from "./BlogCard";
import Carousel from "react-simply-carousel";
import { useState } from "react";

export const BlogCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Carousel
      itemsListProps={{
        style: {
          gap: "20px",
        },
      }}
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
          display: "none",
        },
      }}
      backwardBtnProps={{
        style: {
          display: "none",
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
