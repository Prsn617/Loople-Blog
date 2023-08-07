import React from "react";
import styles from "./SideBar.module.css";
import Image from "next/image";

const apiUrl = process.env.NEXT_PUBLIC_APIURL;

async function getData() {
  // const res = await fetch(`${apiUrl}/api/posts`, {
  const res = await fetch(`/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }
  return res.json();
}

const SideBar = async () => {
  const data = await getData();

  return (
    <div className={styles.sideBar}>
      <h3>Recent Posts</h3>
      <div className={styles.recentBlogs}>
        {data
          ?.slice(0)
          .reverse()
          .slice(0, 4)
          .map((recent) => (
            <div className={styles.recentComp} key={recent._id}>
              <div className={styles.Img}>
                <Image fill={true} src={recent?.img} alt="Recent Blog" />
              </div>
              <h4>{recent?.pTitle}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
