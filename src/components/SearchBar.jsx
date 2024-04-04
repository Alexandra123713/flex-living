import styled from "styled-components";
import { Select } from "./SearchComponents/Select";
import { Check } from "./SearchComponents/Check";
import { Guests } from "./SearchComponents/Guests";
import { Button } from "./Button";

export const Search = () => {
  return (
    <SearchContainer>
      <Select />
      <Line />
      <Check />
      <Line />
      <Guests />
      <Button text="Search" />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  width: 1064px;
  padding: 6px 6px 6px 40px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  border: 4px solid #064749;
  background: #fff;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
`;

const Line = styled.div`
  width: 1px;
  height: 48px;
  background: #49735a;
`;
