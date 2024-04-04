import styled from "styled-components";

export const WeRent = () => {
  return (
    <Card>
      <Text1>We rent your property</Text1>
      <Text2>
        Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin
        fermentum, consectetur cursus.
      </Text2>
    </Card>
  );
};

const Card = styled.div`
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 0px 60px 60px 0px;
  position: absolute;
  top: 140px;
  background: #fff;
`;

const Text1 = styled.h2`
  font-size: 52px;
  margin: 0;
  width: 325px;
  font-weight: 700;
  color: #181a18;
`;

const Text2 = styled.h5`
  font-size: 18px;
  margin: 0;
  width: 325px;
  font-weight: 400;
  color: #181a18;
`;
