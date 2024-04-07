import { Fragment } from "react";
import styled from "styled-components";
import { HowItWorksCard } from "./how-it-works-card";
import emailIcon from "../../../assets/eva_email-fill.svg";
import peopleIcon from "../../../assets/eva_people-fill.svg";
import eyeIcon from "../../../assets/eva_eye-fill.svg";
import pantoneIcon from "../../../assets/eva_pantone-fill.svg";
import briefcaseIcon from "../../../assets/eva_briefcase-fill.svg";
import sunIcon from "../../../assets/eva_sun-fill.svg";

export const HowItWorks = () => {
  return (
    <Container>
      <Title>How it Works</Title>
      <CardContainer>
        {howItWorksData.map((data, index) => (
          <Fragment key={index}>
            <HowItWorksCard
              iconSrc={data.iconSrc}
              text1={data.text1}
              text2={data.text2}
              isLast={index === howItWorksData.length - 1}
            />
            <div></div>
            <div></div>
          </Fragment>
        ))}
        {/* <Line /> */}
      </CardContainer>
    </Container>
  );
};

const howItWorksData = [
  {
    iconSrc: emailIcon,
    text1: "Get in touch",
    text2:
      "Ut id cras malesuada dolor. Consectetur eget malesuada enim massa viverra mauris",
  },
  {
    iconSrc: peopleIcon,
    text1: "Let’s chat",
    text2:
      "Euismod commodo feugiat purus egestas diam. Facilisi sed senectus consequat risus. Porta purus nec dui odio vehicula.",
  },
  {
    iconSrc: eyeIcon,
    text1: "Property viewing",
    text2:
      "Sit lectus parturient diam ac congue elementum praesent blandit. Tristique ut ut venenatis tortor, id elementum. Integer tristique viverra enim libero.",
  },
  {
    iconSrc: pantoneIcon,
    text1: "Time to decorate",
    text2:
      "Adipiscing magna ut justo, et. Sem pellentesque eu risus euismod et. Sapien est tellus dapibus sed varius lorem tellus, turpis nisl. Elementum scelerisque elit in nibh aliquet phasellus.",
  },
  {
    iconSrc: briefcaseIcon,
    text1: "Moving in & Moving up!",
    text2:
      "Sit lectus parturient diam ac congue elementum praesent blandit. Tristique ut ut venenatis tortor, id elementum. Integer tristique viverra enim libero.",
  },
  {
    iconSrc: sunIcon,
    text1: "Sit back & Relax",
    text2:
      "Euismod commodo feugiat purus egestas diam. Facilisi sed senectus consequat risus. Porta purus nec dui odio vehicula.",
  },
];
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  justify-content: center;
`;
const Container = styled.div`
  background: #e2f1e8;
  padding: 100px 188px;
  margin-bottom: 140px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  margin-bottom: 60px;
`;

const Line = styled.div`
  position: absolute;
  top: 32px;
  bottom: 210px;
  left: 50%;
  width: 0;
  height: auto;
  border: 1px solid #181a18;
`;
