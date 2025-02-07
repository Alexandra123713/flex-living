import styled from "styled-components";
import { Card } from "./Card";

export const FeaturesContainer = () => {
  return (
    <Container>
      {cardData.map((data, index) => (
        <Card
          key={index}
          iconSrc={data.iconSrc}
          text1={data.text1}
          text2={data.text2}
          color="#e2f1e8"
        />
      ))}
    </Container>
  );
};

const cardData = [
  {
    iconSrc: "/src/assets/eva_calendar-fill.svg",
    text1: "Flexible living",
    text2:
      "Stay as Long or as little as you need with month-to-month contracts",
  },

  {
    iconSrc: "/src/assets/mdi_sofa.svg",
    text1: "Move-in ready",
    text2: "Ready to move in with everything you need",
  },

  {
    iconSrc: "src/assets/eva_wifi-fill.svg",
    text1: "High-speed Wi-Fi",
    text2: "Best in class internet speeds suitable for working from home",
  },

  {
    iconSrc: "src/assets/eva_message-circle-fill.svg",
    text1: "24/7 support",
    text2: "On hand team for any issues you have",
  },
];

const Container = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 140px;
`;
