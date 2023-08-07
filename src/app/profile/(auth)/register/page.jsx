"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const apiUrl = process.env.NEXT_PUBLIC_APIURL;

    try {
      // const res = await fetch(`${apiUrl}/api/auth/register/`, {
      const res = await fetch(`/api/auth/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      // res.status === 201 && router.push(`${apiUrl}/profile/login`);
      res.status === 201 && router.push(`/profile/login`);
      res.status === 500 && setIsError(true);
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <div className={`container ${styles.registerCont}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" required placeholder="Username" />
        <label>E-mail</label>
        <input type="email" required placeholder="example@google.com" />
        <label>Password</label>
        <input type="password" required placeholder="Password" />
        <button className="btn1">Register</button>
      </form>
      <p style={{ color: "red", marginBottom: "10px" }}>
        {isError && "Username/Email already exists"}
      </p>
      <p>
        Already have an account?{" "}
        <Link style={{ color: "var(--purple)" }} href="/profile/login">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Register;
