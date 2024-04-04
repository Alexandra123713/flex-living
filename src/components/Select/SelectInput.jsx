import styled, { css } from "styled-components";
import React, { useState } from "react";
import { locationData } from "../../constants";
import Select, { components } from "react-select";
import arrowIcon from "../../assets/eva_arrow_down.svg";

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SelectArrow open={props.selectProps.menuIsOpen} src={arrowIcon} />
      </components.DropdownIndicator>
    )
  );
};

export const SelectInput = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        components={{ DropdownIndicator }}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Choose city"
        options={locationData.map((data) => ({
          value: data.location,
          label: data.location,
        }))}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "40px",
            padding: "12px 20px",
            background: "#064749",
            border: "none",
            fontWeight: 700,
            fontSize: "18px",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "white",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "white",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: "none",
          }),
          option: (baseStyles, { isSelected }) => ({
            ...baseStyles,
            backgroundColor: isSelected ? "#064749" : "initial",
          }),
        }}
      />
    </div>
  );
};

const SelectArrow = styled.img`
  transform: rotate(0deg);
  transition: transform 250ms ease-in-out;

  ${({ open }) =>
    open &&
    css`,
      transform: rotate(180deg);
    `}
`;
