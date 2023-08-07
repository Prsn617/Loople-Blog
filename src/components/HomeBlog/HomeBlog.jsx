import React from "react";
import styles from "./HomeBlog.module.css";
import Image from "next/image";
import Link from "next/link";

const HomeBlog = ({ blogData }) => {
  return (
    <div className={styles.blogs}>
      <div className={styles.blogDetail}>
        <h1>{blogData?.pTitle}</h1>
        <p>{blogData?.pDescs}</p>
        <Link href={`/blogs/${blogData?._id}`}>
          <button className="btn2">Read More</button>
        </Link>
      </div>
      <div className={styles.blogImg}>
        <Image
          src={blogData?.img}
          fill={true}
          alt={`${blogData?.tag} image`}
          placeholder="blur"
          blurDataURL={blogData?.img}
        />
      </div>
    </div>
  );
};

export default HomeBlog;
