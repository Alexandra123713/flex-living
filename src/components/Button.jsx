import styled from "styled-components";

export const Button = ({ text, className, ...rest }) => {
  return (
    <GreenButton className={className} type="button" {...rest}>
      {text}
    </GreenButton>
  );
};

const GreenButton = styled.button`
  border-radius: 40px;
  background: #064749;
  border: none;
  padding: 12px 40px;
  color: #fff !important;
  font-size: 18px;
  cursor: pointer;
`;
