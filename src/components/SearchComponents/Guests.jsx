import styled from "styled-components";
import Counter from "./Counter";

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
  color: #181a18;
`;

const Guests = () => {
  return (
    <Div>
      <GuestsBox>
        <Icon src="../src/images/eva_people-fill.svg" />
        <Text>Guests</Text>
      </GuestsBox>
      <Counter />
    </Div>
  );
};

export default Guests;
