import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: white;
  border-bottom: 1px solid black;
  .h1 {
    height: max-content;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
