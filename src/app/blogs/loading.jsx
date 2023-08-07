import Loader from "@/components/Loader/Loader";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div className={`container ${styles.loadContainer}`}>
      <div className={styles.loader}>
        <Loader />
      </div>
      <SideBar />
    </div>
  );
};

export default Loading;
