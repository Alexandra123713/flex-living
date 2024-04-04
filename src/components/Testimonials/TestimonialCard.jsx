import styled from "styled-components";

export const TestimonialCard = ({ photoSrc, name, text1, text2 }) => {
  return (
    <CardContainer>
      <PersonBox>
        <Photo src={photoSrc} alt="Photo" />
        <NameBox>
          <Name>{name}</Name>
          <Text1>{text1}</Text1>
        </NameBox>
      </PersonBox>
      <Text2>{text2}</Text2>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 60px;
  border-radius: 60px 60px 60px 12px;
  background: #f2f0f2;
  max-width: 847px;
`;
const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;
const PersonBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const NameBox = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Text1 = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 727px;
`;
const Text2 = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
