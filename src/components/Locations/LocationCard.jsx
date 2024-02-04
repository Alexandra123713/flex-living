import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`;
const Location = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
`;
const ImageContainer = styled.div`
  width: 196px;
  height: 196px;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
`;
const Image = styled.img`
  max-width: 196px;
  min-height: 196px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LocationCard = ({ location, imgSrc }) => {
  return (
    <Container>
      <Location>{location}</Location>
      <ImageContainer>
        <Image src={imgSrc} alt="Image" />
      </ImageContainer>
    </Container>
  );
};

export default LocationCard;
