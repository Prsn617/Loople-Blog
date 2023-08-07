"use client";

import React from "react";
import styles from "./PostForm.module.css";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const PostForm = () => {
  const apiUrl = process.env.NEXT_PUBLIC_APIURL;
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate } = useSWR(
    `/api/posts?author=${session?.data?.user.name}`,
    fetcher
  );

  const blogTags = [
    { tag: "Technology", img: "https://source.unsplash.com/oyXis2kALVg" },
    { tag: "Art", img: "https://source.unsplash.com/D5nh6mCW52c" },
    { tag: "Science", img: "https://source.unsplash.com/Q1p7bh3SHj8" },
    { tag: "Photography", img: "https://source.unsplash.com/gVbOF8mdE3U" },
    { tag: "Design", img: "https://source.unsplash.com/qC2n6RQU4Vw" },
    { tag: "Coding", img: "https://source.unsplash.com/4hbJ-eymZ1o" },
    { tag: "Movie", img: "https://source.unsplash.com/AtPWnYNDJnM" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const tagItem = e.target[1].value;
    const desc = e.target[2].value;
    const img = e.target[3].value;
    const content = e.target[4].value;

    const altImg = blogTags.filter((i) => {
      if (i.tag === tagItem) return i;
    });

    try {
      // await fetch(`${apiUrl}/api/posts`, {
      await fetch(`/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pTitle: title,
          tag: tagItem,
          pDescs: desc,
          img: img === "" ? altImg[0].img : img,
          content,
          likes: 0,
          author: session.data.user.name,
          isFeatured: false,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {}
  };

  return (
    <div>
      <h2 className={styles.title}>A new thought awaits</h2>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" placeholder="Add your Title" />
        <label className={styles.tag}>Tags</label>
        <select id="">
          {blogTags.map((blogTag, index) => (
            <option key={index} value={blogTag.tag}>
              {blogTag.tag}
            </option>
          ))}
        </select>
        <label>Description</label>
        <textarea rows="2" placeholder="A short description about the blog" />
        <label>Image (optional)</label>
        <input type="text" placeholder="Add your image url" />
        <label>Content</label>
        <textarea placeholder="Blog Content" rows="10"></textarea>
        <button className="btn1">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
