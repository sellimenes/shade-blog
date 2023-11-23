"use client";
import { Chrome, Github } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

type Props = {};

const AuthForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/api/register", {
      email,
      password,
      name,
    });
    setIsLoading(false);
  };
  return (
    <div className="w-[350px] border p-5 rounded-lg shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="mb-4 text-xl font-bold">Register</h2>
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          disabled={isLoading}
          onClick={(e) => handleRegister(e)}
          className="mt-1"
        >
          Register
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2 my-2">
        <span className="border-b w-1/2"></span>
        <span className="text-gray-500">or</span>
        <span className="border-b w-1/2"></span>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="w-full border p-2 rounded flex items-center justify-center hover:bg-primary transition-all duration-300 group opacity-30"
          disabled
        >
          <Github className="group-hover:text-white" />
        </button>
        <button
          className="w-full border p-2 rounded flex items-center justify-center hover:bg-primary transition-all duration-300 group opacity-30"
          disabled
        >
          <Chrome className="group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
