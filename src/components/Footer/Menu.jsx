import styled from "styled-components";

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem href="#">Company</MenuItem>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About us</MenuItem>
        <MenuItem href="#">Our team</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem href="#">Guests</MenuItem>
        <MenuItem href="#">Blog</MenuItem>
        <MenuItem href="#">FAQ</MenuItem>
        <MenuItem href="#">Career</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem href="#">Privacy</MenuItem>
        <MenuItem href="#">Terms of Service</MenuItem>
        <MenuItem href="#">Privacy Policy</MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-around;
`;
const MenuItem = styled.a`
  color: #181a18;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  &:first-child {
    font-weight: 700;
  }
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
