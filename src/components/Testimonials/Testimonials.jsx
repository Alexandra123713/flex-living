import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselSettings } from "./carouselSettings";
import "./carousel.css";
import "./buton";

const Container = styled.div`
  display: flex;
  gap: 60px;
  margin: 0 auto;
  margin-bottom: 140px;
  overflow: auto;
`;

export const Testimonials = () => {
  return (
    <Slider {...carouselSettings}>
      {testimonialData.map((data, index) => (
        <TestimonialCard
          key={index}
          photoSrc={data.photoSrc}
          name={data.name}
          text1={data.text1}
          text2={data.text2}
        />
      ))}
    </Slider>
  );
};
