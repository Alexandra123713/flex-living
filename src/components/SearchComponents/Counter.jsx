import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  gap: 8px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #181a18;
`;

const Counter = () => {
  const [count, setCount] = useState(1);

  const Plus = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };

  const Minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Div>
      <Icon onClick={Plus} src="../src/images/eva_plus-fill.svg" />
      <Span>{count}</Span>
      <Icon onClick={Minus} src="../src/images/eva_minus-fill.svg" />
    </Div>
  );
};

export default Counter;
