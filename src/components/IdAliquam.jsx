import styled from "styled-components";

const Text1 = styled.h3`
  font-size: 48px;
  font-weight: 700;
  color: #181a18;
  margin: 0;
  text-align: center;
  margin-bottom: 16px;
`;

const Text2 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  color: #181a18;
  margin: 0;
  text-align: center;
`;

const Container = styled.div`
  width: 847px;
  margin: 0 auto;
  margin-bottom: 60px;
`;

const IdAliquam = () => {
  return (
    <Container>
      <Text1>Id aliquam molestie nunc quis turpis imperdiet quis</Text1>
      <Text2>
        Euismod condimentum tempus quis nibh. Accumsan imperdiet non vulputate
        venenatis, lorem amet, purus amet, sagittis. Cum orci quam enim
        adipiscing interdum purus.
      </Text2>
    </Container>
  );
};

export default IdAliquam;
