import React from "react";
import { timeline } from "./timeline";
import TimelineItem from "./TimelineItem";

import styles from "./TimelineStory.module.scss";

const TimelineStory: React.FC = () => {
  const items = timeline;

  return (
    <div className={`${styles["timeline-container"]}`}>
      {items.length > 0 &&
        items.map((data, idx) => <TimelineItem data={data} key={idx} />)}
    </div>
  );
};

export default TimelineStory;
