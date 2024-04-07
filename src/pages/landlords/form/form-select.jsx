import styled, { css } from "styled-components";
import Select, { components } from "react-select";
import React, { useState } from "react";
import { locationData } from "../../../constants";
import arrowIcon from "../../../assets/eva_arrow-down-fill.svg";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SelectArrow open={props.selectProps.menuIsOpen} src={arrowIcon} />
      </components.DropdownIndicator>
    )
  );
};

export const FormSelect = ({ placeholder, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <FormContainer>
      <Select
        components={{ DropdownIndicator }}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "12px",
            background: "#fff",
            border: "none",
            width: "100%",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            padding: "0",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#49735a",
            fontWeight: "400",
            fontSize: "18px",
            padding: "0",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#49735a",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: "none",
          }),
          option: (baseStyles, { isSelected }) => ({
            ...baseStyles,
            backgroundColor: isSelected ? "#064749" : "initial",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: "13px 20px",
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            padding: "0",
            margin: "0",
          }),
        }}
      />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
`;
const SelectArrow = styled.img`
  transform: rotate(0deg);
  transition: transform 250ms ease-in-out;
  ${({ open }) =>
    open &&
    css`,
      transform: rotate(180deg);
    `}
`;
