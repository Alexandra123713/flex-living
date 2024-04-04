import styled from "styled-components";
import { Card } from "../Features/Card";

export const PartnershipContainer = () => {
  const cardData = [
    {
      iconSrc: "src/assets/eva_search-outline.svg",
      text1: "Booking manager",
      text2: "We do the searching for you",
    },

    {
      iconSrc: "src/assets/eva_person-fill.svg",
      text1: "Account manager",
      text2: "Preferred partner rates",
    },

    {
      iconSrc: "src/assets/eva_file-text-fill.svg",
      text1: "Flexible terms",
      text2: "Extend on short notice",
    },
  ];
  return (
    <Container>
      {cardData.map((data, index) => (
        <Card
          key={index}
          iconSrc={data.iconSrc}
          text1={data.text1}
          text2={data.text2}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
  margin-bottom: 140px;
`;
