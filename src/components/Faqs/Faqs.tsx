import React from "react";
import { faq, FaqType } from "./faq";
import FaqItem from "./FaqSection";
import styles from "./Faqs.module.scss";

const TimelineStory: React.FC = () => {
  const items: FaqType = faq;

  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["title"]}`}>FAQs</div>
      {Object.keys(items).length > 0 &&
        Object.keys(items).map((key) => (
          <FaqItem data={items[key]} section={key} key={key} />
        ))}
    </div>
  );
};

export default TimelineStory;
