import styled from "styled-components";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";

const CardContainer = styled.div`
  display: flex;
  width: 305px;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const Icon = styled.img``;
const Text1 = styled.div``;
const Text2 = styled.div``;

const Card = ({ imageSrc, text }) => {
  return (
    <CardContainer>
      <Icon src={imageSrc} alt="Icon" />
    </CardContainer>
  );
};
