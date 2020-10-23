import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import {
  FormWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  ButtonLabel,
  LoginContainer,
} from "../../style/FormStyle";
import Button from "../../components/Button";
import ErrorNotice from "../../misc/ErrorNotice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const login = () => history.push("/login");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        userName,
      };
      await axios.post("http://localhost:5000/users/signup", newUser);
      const loginRes = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <FormWrapper>
      <h2>Sign Up</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <StyledForm onSubmit={submit}>
        <StyledLabel htmlFor="signup-email">Email</StyledLabel>
        <StyledInput
          id="signup-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></StyledInput>

        <StyledLabel htmlFor="signup-password">Password</StyledLabel>
        <StyledInput
          id="signup-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></StyledInput>
        <StyledLabel htmlFor="signup-password-verify">
          Verify Password
        </StyledLabel>
        <StyledInput
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></StyledInput>

        <StyledLabel htmlFor="signup-user-name">User Name</StyledLabel>
        <StyledInput
          id="signup-user-name"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        ></StyledInput>

        <ButtonLabel type="submit" value="Sign Up" />
      </StyledForm>
      <LoginContainer>
        <h3>Allready have an account?</h3>
        <Button title={"Log In"} onClick={login} />
      </LoginContainer>
    </FormWrapper>
  );
};

export default Signup;
