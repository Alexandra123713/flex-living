import styled from "styled-components";

export const Title = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 847px;
  margin: 0 auto;
  margin-bottom: 60px;
`;

const Text = styled.h3`
  font-size: 48px;
  font-weight: 700;
  color: #181a18;
  margin: 0;
  text-align: center;
`;
