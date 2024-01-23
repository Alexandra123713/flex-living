import styled from "styled-components";
import LocationCard from "./LocationCard";
import Button from "../Button";

const Text = styled.h3`
    font-size: 48px;
    font-weight: 700;
    color: #181a18;
    margin: 0;
    text-align: center;
    margin-bottom: 60px;
`
const CardContainer = styled.div`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    align-items: end;
`
const View = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 152px;
`

const Locations = () => {
    const locationData = [
        {
         location: 'Shoreditch',
         imgSrc: '../src/images/Shoreditch.jpg'
        },

        {
         location: 'City of London',
         imgSrc: '../src/images/City_of_London.jpg'
        },

        {
         location: 'The West End',
         imgSrc: '../src/images/The_West_End.jpg'
        },

        {
         location: 'Kensington',
         imgSrc: '../src/images/Kensington.jpg'
        },

        {
         location: 'Kingston-Upon-Thamesh',
         imgSrc: '../src/images/Kingston-Upon-Thames.jpg'
        },
        
        {
         location: 'Hammersmith',
         imgSrc: '../src/images/Hammersmith.jpg'
        },
    ]

    return (
        <div>
        <Text>Choose your location</Text>
        <CardContainer>
            {locationData.map((data, index) => (
            <LocationCard key={index} location={data.location} imgSrc={data.imgSrc} />
            ))}
        </CardContainer> 
        <View>  
      <Button text="View all spaces" />
      </View>
        </div>
    )
}

export default Locations