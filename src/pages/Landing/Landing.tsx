import React from "react";

import styles from "./Landing.module.scss";

const Landing: React.FC = (props) => {
  return (
    <div className={`${styles["landing"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h1 className="text--xxxl">Je | Ju</h1>
          <span>April 1, 2022</span>
        </div>
        <div className={`${styles["buttons"]} col-7 col-s-9`}>
          <button>We'll be there!</button>
          <button>Not sure.</button>
          <button>We can't come.</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
