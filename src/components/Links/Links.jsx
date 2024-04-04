import styled from "styled-components";
import { Title } from "../Title";
import { usefulLinks } from "../../constants";

export const Links = () => {
  return (
    <div
      style={{
        marginBottom: "140px",
      }}
    >
      <Title text="Useful links" />
      <Container>
        {usefulLinks.map((link) => (
          <div
            key={link.id}
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <Link href={link.url}>{link.title}</Link>
            <img
              src="src/assets/eva_arrow.svg"
              style={{
                width: "13.33px",
                height: "11.67",
              }}
            />
          </div>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-wrap: wrap;
  height: 168px;
  max-width: 1280px;
  margin: 0 auto;
`;
const Link = styled.a`
  font-weight: 700;
  font-size: 18px;
  color: #064749;
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.1em; /* Ajustează spațiul dintre text și linia de subliniere */
    width: 100%;
    height: 0.1em; /* Grosimea sublinierii */
    background-color: #000; /* Culoarea sublinierii */
    z-index: -1; /* Plasează sublinierea sub text */
  }

  &:hover {
    color: #036c59;
    &::after {
      background-color: #036c59; /* Schimbă culoarea sublinierii la hover */
    }
  }
`;
