import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import UserContext from "./context/UserContext";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";

const AppStyle = styled.div``;

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <AppStyle>
      <GlobalStyle />
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </AppStyle>
  );
};

export default App;
