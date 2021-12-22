import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

type Props = {
  showMenu: boolean;
  marginTop: number;
};

const SideBar: React.FC<Props> = ({ showMenu, marginTop }) => {
  const [isInitialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (showMenu !== isInitialLoad) {
      setInitialLoad(true);
    }
  }, [showMenu]);

  return (
    <div
      style={!isInitialLoad ? { display: "none" } : { display: "flex" }}
      className={`${styles["nav-link"]} 
      ${showMenu ? styles["visible"] : styles["hidden"]}`}
    >
      <div style={{ height: marginTop }}></div>
      <Link to="/story" className={`${styles["link"]}`}>
        <span>Our Story</span>
      </Link>
      <Link to="/location" className={`${styles["link"]}`}>
        <span>Location</span>
      </Link>
      <Link to="/rsvp" className={`${styles["link"]}`}>
        <span>Confirmation</span>
      </Link>
      <Link to="/attire" className={`${styles["link"]}`}>
        <span>Attire</span>
      </Link>
      <Link to="/faq" className={`${styles["link"]}`}>
        <span>FAQs</span>
      </Link>
      <Link to="/contact" className={`${styles["link"]}`}>
        <span>Contact Us</span>
      </Link>
    </div>
  );
};

export default SideBar;
