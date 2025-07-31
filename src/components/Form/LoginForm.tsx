"use client";

import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { loginSchema } from "@/lib/validation";
import { useAuth } from "@/context/AuthProvider";

const LoginForm = () => {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setUser } = useAuth();
  const router = useRouter();
  const handleLogin = async () => {
    const result = loginSchema.safeParse({ phone });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user)
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Login error:", err);
      setError("خطا در دریافت اطلاعات. لطفاً اتصال اینترنت را بررسی کنید.");
    }
  };
  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <Input
        type="text"
        placeholder="شماره موبایل خود را وارد نمایید ..."
        value={phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPhone(e.target.value)
        }
        error={error}
      />
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
};

export default LoginForm;
