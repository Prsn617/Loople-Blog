import React from "react";
import styles from "./page.module.css";
import SideBar from "@/components/SideBar/SideBar";

const Loading = () => {
  return (
    <div>
      <div className={styles.hero}></div>
      <div className={`${styles.blogSide} container`}>
        <div style={{ flex: "11" }}></div>
        <SideBar />
      </div>
    </div>
  );
};

export default Loading;
