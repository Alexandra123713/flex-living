import styled from "styled-components";
import { TitleSubtitle } from "../../../components/TitleSubtitle";
import { Container } from "./features-container";

export const Features = () => {
  return (
    <>
      <TitleSubtitle
        text1="Better than Property Management"
        text2="We work with 100+  companies to meet accommodation needs in London. Offer a dedicated
      booking manager that can help to find properties for your needs."
      />
      <Container />
    </>
  );
};
