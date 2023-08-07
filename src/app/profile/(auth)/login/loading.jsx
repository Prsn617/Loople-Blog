import Loader from "@/components/Loader/Loader";
import React from "react";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div className={`container ${styles.loginCont}`}>
      <Loader />
    </div>
  );
};

export default Loading;
