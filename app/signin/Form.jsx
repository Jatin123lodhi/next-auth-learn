"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignIn();
  };
  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="m-2">
      <label>Username</label>
      <input
        className="p-1 border m-1 rounded"
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        className="p-1 border m-1 rounded"
        type="text"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">SignIn</button>
    </form>
  );
};

export default Form;
