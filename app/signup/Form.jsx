"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //do the client side validations ->  /signup - post, with paylaod
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      console.log(res, "res");
      if (res.status === 200) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Form;
