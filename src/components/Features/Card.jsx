import styled from "styled-components";

export const Card = ({ iconSrc, text1, text2 }) => {
  return (
    <CardContainer>
      <img src={iconSrc} alt="Icon" />
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  color: #181a18;
  display: flex;
  width: 100%;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: #e2f1e8;
  border-radius: 30px;
`;

const Text1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

const Text2 = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding-right: 29px;
`;
