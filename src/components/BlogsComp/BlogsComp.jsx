"use client";

import React, { useState, useEffect } from "react";
import styles from "./BlogsComp.module.css";
import Image from "next/image";
import Link from "next/link";
import SideBar from "@/components/SideBar/SideBar";

const BlogsComp = ({ posts }) => {
  const blogTags = [
    { tag: "Technology", img: "https://source.unsplash.com/oyXis2kALVg" },
    { tag: "Art", img: "https://source.unsplash.com/D5nh6mCW52c" },
    { tag: "Science", img: "https://source.unsplash.com/Q1p7bh3SHj8" },
    { tag: "Photography", img: "https://source.unsplash.com/gVbOF8mdE3U" },
    { tag: "Design", img: "https://source.unsplash.com/qC2n6RQU4Vw" },
    { tag: "Coding", img: "https://source.unsplash.com/4hbJ-eymZ1o" },
    { tag: "Movies", img: "https://source.unsplash.com/AtPWnYNDJnM" },
    { tag: "Anime", img: "https://source.unsplash.com/Of2rc0KOfVU" },
    { tag: "Review", img: "https://source.unsplash.com/FlPc9_VocJ4" },
    { tag: "Business", img: "https://source.unsplash.com/3fPXt37X6UQ" },
    { tag: "Food", img: "https://source.unsplash.com/HlNcigvUi4Q" },
    { tag: "Fashion", img: "https://source.unsplash.com/_3Q3tsJ01nc" },
    { tag: "Video Game", img: "https://source.unsplash.com/eCktzGjC-iU" },
    { tag: "Sport", img: "https://source.unsplash.com/52p1K0d0euM" },
    { tag: "Book", img: "https://source.unsplash.com/nGrfKmtwv24" },
    { tag: "Education", img: "https://source.unsplash.com/lUaaKCUANVI" },
    { tag: "Health", img: "https://source.unsplash.com/hIgeoQjS_iE" },
    { tag: "Finance", img: "https://source.unsplash.com/N__BnvQ_w18" },
  ];

  const [selectedTag, setSelectedTag] = useState("Technology");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newData = posts?.filter(
      (filteredPost) => filteredPost.tag === selectedTag
    );
    setFilteredData(newData);
    console.log(filteredData);
  }, [selectedTag, setSelectedTag]);

  return (
    <div className={styles.blogComp}>
      <div className={styles.blogsBox}>
        {filteredData.length === 0 ||
        filteredData === undefined ||
        filteredData === null ? (
          <h1 style={{ color: "#555", marginTop: "64px" }}>
            No Blogs Available
          </h1>
        ) : (
          filteredData?.map((post) => (
            <Link href={`/blogs/${post?._id}`} key={post?._id}>
              <div className={styles.blogBox}>
                <div className={styles.blogImg}>
                  <Image
                    fill={true}
                    src={post?.img}
                    alt={`${post.tag}-image`}
                    placeholder="blur"
                    blurDataURL={post?.img}
                  />
                </div>
                <h3>{post.pTitle}</h3>
                <div className={styles.time}>
                  <span>
                    {post.createdAt === undefined
                      ? "Last Year"
                      : post?.createdAt?.slice(0, 10)}
                  </span>
                  <span>{post?.tag}</span>
                </div>
                <p>{post?.pDescs}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className={styles.sideBar}>
        <div className={styles.tagger}>
          <h5>Tag: </h5>
          <select
            id=""
            onChange={(e) => {
              setSelectedTag(e.target.value);
            }}
          >
            {blogTags?.map((blogTag, index) => (
              <option key={index} value={blogTag?.tag}>
                {blogTag?.tag}
              </option>
            ))}
          </select>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default BlogsComp;
