import styled from "styled-components";
import { Card } from "../../../components/Features/Card";
import lockIcon from "../../../assets/eva_lock-fill.png";
import priceIcon from "../../../assets/eva_pricetags-fill.png";
import apartmentIcon from "../../../assets/ic_round-apartment.png";
import timeIcon from "../../../assets/fluent_access-time-24-filled.png";

export const Container = () => {
  return (
    <CardContainer>
      {featuresCardData.map((data, index) => (
        <StyledCard
          key={index}
          iconSrc={data.iconSrc}
          text1={data.text1}
          text2={data.text2}
          color="#f2f0f2"
        />
      ))}
    </CardContainer>
  );
};

const featuresCardData = [
  {
    iconSrc: lockIcon,
    text1: "Guaranteed rent",
    text2: "We do the searching for you",
  },
  {
    iconSrc: priceIcon,
    text1: "No fees",
    text2: "Preferred partner rates",
  },
  {
    iconSrc: apartmentIcon,
    text1: "No voids",
    text2: "Preferred partner rates",
  },
  {
    iconSrc: timeIcon,
    text1: "24/7 maintenance",
    text2: "Extend on short notice",
  },
];
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 140px;
`;
const StyledCard = styled(Card)`
  background-color: red;
`;
