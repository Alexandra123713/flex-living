import styled from "styled-components";

export const BlogCard = ({ photoSrc, title, text, time }) => {
  return (
    <CardContainer>
      <Image>
        <img
          src={photoSrc}
          alt="Image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            userSelect: "none",
          }}
        />
      </Image>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "0 24px",
          marginBottom: "20px",
        }}
      >
        <Title>{title}</Title>
        <Text>{text}</Text>
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          padding: "0 32px",
          marginBottom: "60px",
        }}
      >
        <Icon src="src/assets/eva_clock_fill.svg" />
        <Time>{time}</Time>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 60px;
  width: 413px;
  height: 604px;
  background-color: #f2f0f2;
`;

const Image = styled.div`
  width: 413px;
  height: 300px;
  overflow: hidden;
  border-radius: 60px 60px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: #181a18;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #181a18;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Time = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #181a18;
`;
