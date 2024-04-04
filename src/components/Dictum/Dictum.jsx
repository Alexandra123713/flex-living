import styled from "styled-components";
import { TitleSubtitleInsideBox } from "../TitleSubtitleInsideBox";
import { SelectInput } from "../Select/SelectInput";

export const Dictum = () => {
  return (
    <Container>
      <Box>
        <TitleSubtitleInsideBox
          text1="Dictum nunc"
          text2="Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. "
        />
        <SelectInput />
      </Box>
    </Container>
  );
};

const Container = styled.div`
  background: url(src/assets/bcg_3.jpg);
  padding-top: 124px;
  padding-bottom: 124px;
  background-size: cover;
  background-position: center;
  margin-bottom: 140px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 60px 60px 60px 12px;
  padding: 60px 80px;
  width: 325px;
  margin: 0 auto;
  background: #fff;
`;
