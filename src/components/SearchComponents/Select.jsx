import styled from "styled-components";
import { locationData } from "../../constants";
import "./Select.css";
import searchIcon from "../../assets/eva_search-outline.svg";
import { useState } from "react";

export const Select = () => {
  const [value, setValue] = useState("");

  const filteredLocations = locationData.filter((location) => {
    return location.location.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <Container>
      <Form>
        <Icon src={searchIcon} alt="searchIcon" />
        <Input
          type="text"
          placeholder="Select a city"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </Form>
      {Boolean(value) && (
        <>
          {filteredLocations.length > 0 ? (
            <Results>
              {filteredLocations.map((location, index) => {
                return (
                  <Result
                    key={index}
                    onClick={() => setValue(location.location)}
                  >
                    {location.location}
                  </Result>
                );
              })}
            </Results>
          ) : (
            <Results>
              <Result>No data</Result>
            </Results>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Form = styled.div`
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
const Results = styled.div`
  position: absolute;
  z-index: 2;
  background: white;
  border-radius: 12px;
  padding: 20px 40px;
`;
const Result = styled.div`
  white-space: nowrap;
`;
