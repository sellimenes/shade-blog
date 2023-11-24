"use client";

import { Chrome, Github } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="relative w-full h-[calc(100vh-144px)]">
      <LoginForm />
    </div>
  );
};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    signIn("credentials", {
      email,
      password,
      redirect: false,
    })
      .then((callback: any) => {
        if (callback.error) {
          console.log(callback.error);
        }
      })
      .finally(() => {
        setIsLoading(false);
        router.push("/");
      });
  };
  return (
    <div className="w-[350px] border p-5 rounded-lg shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="mb-4 text-xl font-bold">Login</h2>
      <div className="flex flex-col gap-2">
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
          {isLoading ? "Loading..." : "Login"}
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
      <div>
        <p className="text-center mt-2 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
