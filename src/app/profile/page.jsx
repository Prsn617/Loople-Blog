"use client";

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PostForm from "@/components/PostForm/PostForm";
import Loader from "@/components/Loader/Loader";
import { signOut } from "next-auth/react";
import MyBlogs from "@/components/MyBlogs/MyBlogs";

const Profile = () => {
  const session = useSession();
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_APIURL;

  if (session.status === "loading") {
    return <Loader />;
  }
  if (session.status === "unauthenticated") {
    router.push(`/profile/login`);
  }
  if (session.status === "authenticated") {
    return (
      <div className={`container ${styles.profCont}`}>
        <div className={styles.user}>
          <h2>Welcome, {session?.data?.user.name}</h2>
          <button className="btn1" onClick={signOut}>
            Log Out
          </button>
        </div>
        <MyBlogs />
        <div className={styles.formCont}>
          <PostForm />
        </div>
      </div>
    );
  }
};

export default Profile;
