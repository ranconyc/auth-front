import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ErrorNotice from "../../misc/ErrorNotice";
import {
  FormWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  ButtonLabel,
} from "../../style/FormStyle";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
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
      <h2>Log In</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <StyledForm onSubmit={submit}>
        <StyledLabel htmlFor="login-email">Email</StyledLabel>
        <StyledInput
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></StyledInput>

        <StyledLabel htmlFor="login-password">Password</StyledLabel>
        <StyledInput
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></StyledInput>

        <ButtonLabel type="submit" value="Log In"></ButtonLabel>
      </StyledForm>
    </FormWrapper>
  );
};

export default Login;
