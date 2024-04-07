import styled from "styled-components";

export const TitleSubtitleInsideBox = ({ text1, text2 }) => {
  return (
    <div>
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
    </div>
  );
};

const Text1 = styled.h3`
  font-weight: 700;
  font-size: 52px;
  margin: 0;
  margin-bottom: 24px;
`;

const Text2 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;
