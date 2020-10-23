import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f8d6d6;
  border: 1px solid #e07c7c;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  color: #df4343;
`;

const ErrorButton = styled.button`
  background: #df4343;
  color: white;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ErrorNotice = ({ message, clearError }) => {
  return (
    <StyledError>
      <aspn>{message}</aspn>
      <ErrorButton onClick={clearError}> X </ErrorButton>
    </StyledError>
  );
};

export default ErrorNotice;
