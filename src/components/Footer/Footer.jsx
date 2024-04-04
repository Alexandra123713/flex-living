import styled from "styled-components";
import logo from "../../assets/logo.png";
import { IconsCopyright } from "./IconsCopyright";
import { Menu } from "./Menu";
import { Subscribe } from "./Subscribe";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Logo>
          <Img src={logo} />
        </Logo>
        <IconsCopyright />
      </div>
      <Menu />
      <Subscribe />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  margin-bottom: 60px;
`;
const Img = styled.img`
  width: 190px;
`;
const Logo = styled.div`
  width: 85px;
  height: 58px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
`;
