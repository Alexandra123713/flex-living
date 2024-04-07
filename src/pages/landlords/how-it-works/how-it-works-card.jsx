import styled, { css } from "styled-components";

export const HowItWorksCard = ({ iconSrc, text1, text2, isLast }) => {
  return (
    <CardContainer isLast={isLast}>
      <Icon src={iconSrc} alt="Icon" />
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
      <Circle />
    </CardContainer>
  );
};

const Circle = styled.div`
  border-radius: 100%;
  background: #181a18;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: -11px;
`;
const Icon = styled.img`
  width: 80px;
  height: 80px;
`;
const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: flex-end;
  padding: 32px 70px;
  align-items: flex-end;
  text-align: right;

  &:nth-child(even) {
    border-left: 2px solid black;
    margin-left: -1px;
    align-items: flex-start;
    text-align: left;
    & ${Circle} {
      right: initial;
      left: -11px;
    }
  }
  &:nth-child(odd) {
    border-right: 2px solid black;
    margin-right: -1px;
  }
  ${({ isLast }) =>
    isLast &&
    css`
      border-left: 2px solid transparent !important;
    `}
`;
const Text1 = styled.div`
  font-weight: 700;
  font-size: 36px;
`;
const Text2 = styled.div`
  font-weight: 400;
  font-size: 16px;
  max-width: 462px;
`;
