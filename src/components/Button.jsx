import styled from "styled-components";

export const Button = ({ text }) => {
  return (
    <GreenButton type="button">
      <div> {text}</div>
    </GreenButton>
  );
};

const GreenButton = styled.button`
  border-radius: 40px;
  background: #064749;
  border: none;
  padding: 12px 40px;
  color: #fff;
  font-size: 18px;
`;
