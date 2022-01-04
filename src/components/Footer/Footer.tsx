import React from "react";
import { HashLink } from "react-router-hash-link";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import styles from "./Footer.module.scss";

type Props = {
  backToTop?: boolean;
};

const Footer: React.FC<Props> = ({ backToTop }) => {
  return (
    <div className={`${styles["footer"]}`}>
      {backToTop || true ? (
        <HashLink
          smooth
          to={"/story#top"}
          className={`${styles["back-to-top"]}`}
        >
          <KeyboardArrowUpIcon className={`${styles["icon"]}`} />
          <span className={`font-secondary text--sm`}>BACK TO TOP</span>
        </HashLink>
      ) : null}
      <span
        className={`font-secondary text--xs`}
      >{`© 2021 By Jeanaica & Junar.`}</span>
      <br />
      <span
        className={`font-secondary text--xs`}
      >{`Designed with Adobe XD.`}</span>
    </div>
  );
};

export default Footer;
