import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 40px 16px;
  > h2 {
    font-size: 22px;
    text-align: center;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0.5rem;
  border: none;
  background: white;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  color: black;
  &::placeholder {
    color: black;
  }
`;
export const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const ButtonLabel = styled.input`
  background: black;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  outline: none;
  &:hover {
    background: white;
    color: black;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  > h3 {
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  > Button {
    width: 100%;
  }
`;
