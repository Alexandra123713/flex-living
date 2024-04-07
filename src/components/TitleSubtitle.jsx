import styled from "styled-components";

export const TitleSubtitle = ({ text1, text2 }) => {
  return (
    <Container>
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
    </Container>
  );
};

const Text1 = styled.h3`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  margin-bottom: 16px;
`;

const Text2 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  text-align: center;
`;

const Container = styled.div`
  width: 847px;
  margin: 0 auto;
  margin-bottom: 60px;
`;
