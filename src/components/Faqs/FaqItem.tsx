import { FC, useState } from "react";

import styles from "./Faqs.module.scss";

type Props = {
  item: Record<string, string>;
};

const FaqItem: FC<Props> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`${styles["faq-container"]}`}>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${styles["faq-question"]}`}
      >
        {item.question}
      </div>
      <div
        className={`${styles["faq-answer"]} ${
          isExpanded ? styles["is-hidden"] : ""
        }`}
      >
        {item.answer}
      </div>
    </div>
  );
};

export default FaqItem;
