import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  
    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuItemContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 10px;
  list-style: none;
`;

export const MenuLink = styled.a`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
      font-weight: bold;
      color: #5570a9;
    }
  }
`;