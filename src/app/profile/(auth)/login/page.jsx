"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  const currentPage = useSearchParams();
  let error = currentPage.get("error");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  if (session.status === "loading") {
    return <Loader />;
  }

  if (session.status === "authenticated") {
    router?.push("/");
    return;
  }

  return (
    <div className={`container ${styles.loginCont}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email" required placeholder="example@google.com" />
        <label>Password</label>
        <input type="password" required placeholder="Password" />
        <button className="btn1">Login</button>
      </form>
      {error !== null && <p className={styles.error}>{error}</p>}
      {/* <button className="btn2" onClick={() => signIn("google")}>
        Login with Google
      </button> */}
      <p>
        Don't have an account?{" "}
        <Link style={{ color: "var(--purple)" }} href="/profile/register">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
