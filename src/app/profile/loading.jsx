import Loader from "@/components/Loader/Loader";
import styles from "./page.module.css";
import React from "react";

const Loading = () => {
  return (
    <div className={`container ${styles.loadCont}`}>
      <Loader />
    </div>
  );
};

export default Loading;
