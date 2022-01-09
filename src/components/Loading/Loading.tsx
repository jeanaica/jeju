import React from "react";
import ReactLoading from "react-loading";

import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={`${styles["loading"]}`}>
      <ReactLoading type="cylon" color="#052441" />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
