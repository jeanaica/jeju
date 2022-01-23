import React from "react";
import { faq, FaqType } from "./faq";
import FaqItem from "./FaqSection";
import styles from "./Faqs.module.scss";
import useAuth from "hooks/useAuth";
import { faqPublic } from "./faqPublic";

const Faqs: React.FC = () => {
  const { authenticated } = useAuth();

  const items: FaqType = authenticated ? faq : faqPublic;

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

export default Faqs;
