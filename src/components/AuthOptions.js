import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Button from "./Button";

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const signup = () => history.push("/signup");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div>
      {userData.user ? (
        <Button primary onClick={logout} title="Log Out" />
      ) : (
        <>
          <Button primary onClick={signup} title="Sign Up" />
          <Button onClick={login} title="Log In" />
        </>
      )}
    </div>
  );
};

export default AuthOptions;
