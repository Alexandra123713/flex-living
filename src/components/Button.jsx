import styled from "styled-components";

const GreenButton = styled.button`
  border-radius: 40px;
  background: #064749;
  border: none;
  padding: 12px 40px;
  color: #fff;
  font-size: 18px;
`;

const Button = ({ text }) => {
  return <GreenButton type="button">{text}</GreenButton>;
};

export default Button;
