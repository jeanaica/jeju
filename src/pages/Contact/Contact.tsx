import React from "react";
import WomanIcon from "@mui/icons-material/Woman";

import Title from "../../components/Title";

import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <div className={`${styles["contact"]}`}>
      <Title header={`Contact us`} />
      <div className={`${styles["content"]}`}>
        <div className={`${styles["info"]}`}>
          <WomanIcon />
          <a href="https://www.messenger.com/t/jean.aica.92">
            https://www.messenger.com/t/jean.aica.92
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
