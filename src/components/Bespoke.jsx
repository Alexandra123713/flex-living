import styled from "styled-components";
import { Button } from "./Button";

export const Bespoke = () => {
  return (
    <Bcg>
      <Container>
        <Text1>Bespoke spaces</Text1>
        <Text2>
          Expertly designed to create extraordinary spaces with the flexible
          renter in mind
        </Text2>
        <Button text="Start booking" />
      </Container>
    </Bcg>
  );
};

const Bcg = styled.div`
  background: url("../src/assets/bcg_2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 140px 80px;
  position: relative;
  margin-bottom: 140px;
  &::before {
    content: "";
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;
const Text1 = styled.h3`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 16px;
`;
const Text2 = styled.h5`
  color: #fff;
  max-width: 522px;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 60px;
`;
