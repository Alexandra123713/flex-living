import styled from "styled-components";
import "./Select.css";

const Div = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 97px;
`;

const Select = () => {
  return (
    <Div>
      <Icon src="../src/images/eva_search-outline.svg" />
      <Input type="text" placeholder="Select a city" />
    </Div>
  );
};

export default Select;
