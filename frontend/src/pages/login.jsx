import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../services/login.service";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isErr, setIsErr] = useState(false);

  const handleLogin = async () => {
    await login({ username, password })
      .then((res) => {
        localStorage.setItem("ACCESS_TOKEN", res.accessToken);
        navigate("/");
      })
      .catch((err) => {
        setIsErr(true);
      });
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={handleLogin}>
        Login
      </button>

      {isErr && <p>something went wrong!!</p>}
    </div>
  );
};

export default Login;
