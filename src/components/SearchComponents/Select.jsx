import styled from "styled-components";
import { locationData } from "../../constants";
import searchIcon from "../../assets/eva_search-outline.svg";
import { useState, useEffect, useRef } from "react";

export const Select = () => {
  const [value, setValue] = useState("");
  const resultsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (resultsRef.current && !resultsRef.current.contains(event.target)) {
      setValue("");
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
            <Results ref={resultsRef}>
              {filteredLocations.map((location, index) => {
                return (
                  <Result
                    key={index}
                    onClick={() => {
                      setValue(location.location);
                    }}
                  >
                    {location.location}
                  </Result>
                );
              })}
            </Results>
          ) : (
            <Results ref={resultsRef}>
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
  &::placeholder {
    font-size: 18px;
    font-weight: 700;
    color: #181a18;
    align-items: center;
  }
`;
const Results = styled.div`
  position: absolute;
  z-index: 2;
  background: white;
  border-radius: 12px;
  padding: 20px 40px;
  box-shadow: 2px 2px 6px 0 rgba(175, 175, 175, 0.25);
  top: 50px;
`;
const Result = styled.div`
  white-space: nowrap;
`;
