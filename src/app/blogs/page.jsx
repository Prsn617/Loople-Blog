import React from "react";
import styles from "./page.module.css";
import BlogsComp from "@/components/BlogsComp/BlogsComp";

const apiUrl = process.env.NEXT_PUBLIC_APIURL;

async function getData() {
  const res = await fetch(`${apiUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }
  return res.json();
}

const Blogs = async () => {
  const blogList = await getData();

  return (
    <div className={`container ${styles.blogContainer}`}>
      <BlogsComp posts={blogList} />
    </div>
  );
};

export default Blogs;
