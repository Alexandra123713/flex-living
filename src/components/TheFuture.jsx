import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 1280px;
  height: 378px;
  justify-content: space-between;
  border-radius: 60px;
  margin: auto;
  background: #f2f0f2;
  overflow: hidden;
  margin-bottom: 140px;
`;
const Images = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const Image = styled.div`
  width: 320px;
  height: 189px;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Text1 = styled.h3`
  font-size: 48px;
  font-weight: 700;
  color: #181a18;
  margin: 0;
`;
const Text2 = styled.h5`
  font-size: 16px;
  font-weight: 400;
  width: 470px;
  color: #181a18;
  margin: 0;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  gap: 24px;
`;

const TheFuture = () => {
  return (
    <Container>
      <Images>
        <Image background={"./src/assets/img_1.jpg"}></Image>
        <Image background={"./src/assets/img_2.jpg"}></Image>
        <Image background={"./src/assets/img_4.png"}></Image>
        <Image background={"./src/assets/img_3.jpg"}></Image>
      </Images>
      <TextBox>
        <Text1>The future is flexible</Text1>
        <Text2>
          We believe in a world where finding a home is just a click away.
          Whether you're selling your home, travelling for work or moving to a
          new city. Just bring your bags, and we'll handle the rest.
        </Text2>
      </TextBox>
    </Container>
  );
};

export default TheFuture;
