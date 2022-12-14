import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import ChatIcon from "@material-ui/icons/Chat";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="chat-logo">
          <ChatIcon></ChatIcon>
        </div>

        <div className="login-text"></div>

        <Button type="submit" onClick={signIn}>
          <p>Sign in with Google</p>
        </Button>
      </div>
    </div>
  );
}

export default Login;
