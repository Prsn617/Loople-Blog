import React from "react";
import styles from "./page.module.css";
import SideBar from "@/components/SideBar/SideBar";

const Loading = () => {
  return (
    <div className={`${styles.blogPostContainer} container`}>
      <div className={styles.blogPost}>
        <div className={styles.blogImg}></div>
        <span>
          <h1></h1>
          <p></p>
        </span>
        <pre></pre>
      </div>
      <SideBar />
    </div>
  );
};

export default Loading;
