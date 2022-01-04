import React from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import TimelineStory from "../../components/TimelineStory";

import styles from "./Story.module.scss";
import Title from "../../components/Title";

const Story: React.FC = () => {
  return (
    <div className={`${styles["story"]}`}>
      <Title
        header="Our oversimplified story"
        subheader="(because you probably already know it)"
      />
      <TimelineStory />
      <div className={`${styles["icon-container"]}`}>
        <AllInclusiveIcon className={`${styles["icon"]}`} />
        <span className={`text--md`}>
          <i>Lifetime as</i>
        </span>
        <h2 className={`${styles["name"]}`}>{`Mr. & Mrs. Alinsub`}</h2>
      </div>
    </div>
  );
};

export default Story;
