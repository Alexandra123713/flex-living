import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Nav>
        <Logo>
          <Img src={logo} />
        </Logo>
        <MenuList>
          <MenuItem>
            <NavLink onClick={() => navigate("/")}>Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink onClick={() => navigate("/landloards")}>
              Landloards
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink onClick={() => navigate("/")}>Blog</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink onClick={() => navigate("/")}>Contacts</NavLink>
          </MenuItem>
        </MenuList>
      </Nav>
    </div>
  );
};

const Img = styled.img`
  width: 190px;
`;
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuList = styled.ul`
  display: flex;
  gap: 40px;
`;
const MenuItem = styled.li`
  list-style-type: none;
`;
const NavLink = styled.div`
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
`;
