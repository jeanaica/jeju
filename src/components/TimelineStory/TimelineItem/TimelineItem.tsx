import React from "react";

import styles from "./TimelineItem.module.scss";

type Props = {
  data: {
    text: string;
    date?: string;
    category?: {
      tag: string;
      color: string;
    };
    link?: {
      url: string;
      text: string;
    };
    time?: number;
  };
};

const TimelineItem: React.FC<Props> = ({ data }) => {
  const time = data.time ? (data.time / 2) * 3 : 0;

  console.log(time, "time");

  return (
    <div
      className={`${styles["timeline-item"]}`}
      style={time ? { height: `${time * 10}px` } : {}}
    >
      <div className={`${styles["timeline-item-content"]}`}>
        {/* <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span> */}
        <time>{data.date}</time>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
        <span className={`${styles["circle"]}`} />
      </div>
    </div>
  );
};

export default TimelineItem;
