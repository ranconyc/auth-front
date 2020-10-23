import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  outline: none;
  margin: 0 5px;
  &:hover {
    background: ${(props) => (props.primary ? "white" : "black")};
    color: ${(props) => (props.primary ? "black" : "white")};
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;

const Button = ({ primary, title, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
