import React from "react";

import styles from "./Title.module.scss";

type Props = {
  header: string;
  subheader?: string;
};

const Title: React.FC<Props> = ({ header, subheader }) => {
  return (
    <div className={`${styles["header"]}`}>
      <h3>{header}</h3>
      <span className={`text--xs`}>{subheader}</span>
    </div>
  );
};

export default Title;
