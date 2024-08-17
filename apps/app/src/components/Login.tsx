import React, { useState } from "react";
import "../styles/Login.css";
import { account } from "../api/appwrite";
import { useAccount } from "../utils/useAccount";
import { useNavigate } from "@tanstack/react-router";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAccount();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    await login({ username, password });
    navigate({
      to: "/",
    });
  };

  const resetSession = () => {
    account.deleteSession("current");
  };

  return (
    <div className="form">
      <div className="login-input">
        <label htmlFor="username">Email :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="login-input">
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      <button onClick={resetSession}>Reset session</button>
    </div>
  );
};
