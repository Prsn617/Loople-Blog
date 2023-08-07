import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import SideBar from "@/components/SideBar/SideBar";

const apiUrl = process.env.NEXT_PUBLIC_APIURL;

async function getData(id) {
  // const res = await fetch(`${apiUrl}/api/posts/${id}`, {
  const res = await fetch(`/api/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params?.id);
  return {
    title: post.pTitle,
    description: post.pDescs,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params?.id);
  return (
    <div className={`${styles.blogPostContainer} container`}>
      <div className={styles.blogPost}>
        <div className={styles.blogImg}>
          <Image
            fill={true}
            src={data?.img}
            alt={`${data.tag}-image`}
            placeholder="blur"
            blurDataURL={data?.img}
          />
        </div>
        <span>
          <h1>{data?.pTitle}</h1>
          <p>| By {data?.author}</p>
        </span>
        <pre>{data?.content}</pre>
      </div>
      <SideBar />
    </div>
  );
};

export default BlogPost;
