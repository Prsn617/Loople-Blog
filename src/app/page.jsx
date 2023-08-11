import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import SideBar from "@/components/SideBar/SideBar";
import HomeBlog from "@/components/HomeBlog/HomeBlog";

const apiUrl = process.env.NEXT_PUBLIC_APIURL;
export const runtime = "edge";

async function getData() {
  const res = await fetch(`${apiUrl}/api/posts`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }
  return res.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <div>
      <div className={styles.hero}>
        <Image
          className={styles.img}
          fill={true}
          src="https://source.unsplash.com/roZgc7SXXmI"
          alt="Mount Cloud Landing Page"
          placeholder="blur"
          blurDataURL="https://source.unsplash.com/roZgc7SXXmI"
        />
        <h6 className={styles.title}>Welcome to Loople Blogs</h6>
      </div>
      <div className={`${styles.blogSide} container`}>
        <div className={styles.blogsList}>
          {data.slice(0, 5).map((post) => (
            <HomeBlog key={post?._id} blogData={post} />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
