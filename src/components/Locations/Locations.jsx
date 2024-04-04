import styled from "styled-components";
import { LocationCard } from "./LocationCard";
import { Button } from "../Button";
import { TitleSubtitle } from "../TitleSubtitle";
import { locationData } from "../../constants";

export const Locations = () => {
  return (
    <div>
      <TitleSubtitle text1="Choose your location" />
      <CardContainer>
        {locationData.map((data, index) => (
          <LocationCard
            key={index}
            location={data.location}
            imgSrc={data.imgSrc}
          />
        ))}
      </CardContainer>
      <View>
        <Button text="View all spaces" />
      </View>
    </div>
  );
};

const CardContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  align-items: end;
`;
const View = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 152px;
`;
