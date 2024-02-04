import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  margin: 12px 0;
`;
const Logo = styled.div`
  width: 130px;
  height: 58px;
  background: url(../src/assets/logo.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const MenuList = styled.ul`
  display: flex;
  gap: 40px;
`;
const MenuItem = styled.li`
  list-style-type: none;
`;
const NavLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #181a18;
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Logo />
        <MenuList>
          <MenuItem>
            <NavLink href="">Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="">Landloards</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="">Blog</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="">Contacts</NavLink>
          </MenuItem>
        </MenuList>
      </Nav>
    </div>
  );
};

export default Navbar;
