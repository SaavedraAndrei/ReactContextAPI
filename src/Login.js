import React from "react";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const addLogin = () => {
    dispatch({
      type: "SET_USER",
      user: "React",
    });
  };

  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={addLogin}>Login</button>
    </div>
  );
}

export default Login;
