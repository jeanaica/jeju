import { FC } from "react";
import FaqItem from "./FaqItem";

import styles from "./Faqs.module.scss";

type Props = {
  data: Array<Record<string, string>>;
  section: string;
};

const FaqSection: FC<Props> = ({ data, section }) => {
  console.log(section);
  return (
    <div className={`${styles["section-container"]}`}>
      <div className={`${styles["section-header"]}`}>{section}</div>

      {data.length &&
        data.map((entry, id) => <FaqItem item={entry} key={id} />)}
    </div>
  );
};

export default FaqSection;
