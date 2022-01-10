import useAuth from "hooks/useAuth";
import React from "react";
import { timeline } from "./timeline";
import { timelinePublic } from "./timelinePublic";

import TimelineItem from "./TimelineItem";

import styles from "./TimelineStory.module.scss";

const TimelineStory: React.FC = () => {
  const { authenticated } = useAuth();
  const items = authenticated ? timeline : timelinePublic;

  return (
    <div className={`${styles["timeline-container"]}`}>
      {items.length > 0 &&
        items.map((data, idx) => <TimelineItem data={data} key={idx} />)}
    </div>
  );
};

export default TimelineStory;
