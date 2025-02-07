import styled from "styled-components";
import { Counter } from "./Counter";

export const Guests = () => {
  return (
    <Div>
      <GuestsBox>
        <Icon src="../src/assets/eva_people-fill.svg" />
        <Text>Guests</Text>
      </GuestsBox>
      <Counter />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 8px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const GuestsBox = styled.div`
  display: flex;
  gap: 8px;
`;
const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
