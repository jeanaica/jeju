import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

type Props = {
  showMenu: boolean;
  marginTop: number;
  onMenuClick(): void;
};

const SideBar: React.FC<Props> = ({ showMenu, marginTop, onMenuClick }) => {
  const [isInitialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (showMenu !== isInitialLoad) {
      setInitialLoad(true);
    }
  }, [isInitialLoad, showMenu]);

  return (
    <div
      style={
        !isInitialLoad
          ? { display: "none" }
          : { display: "flex", height: `calc(100% - ${marginTop}px)` }
      }
      className={`${styles["nav-link"]} 
      ${showMenu ? styles["visible"] : styles["hidden"]}`}
    >
      <Link to="/story" className={`${styles["link"]}`} onClick={onMenuClick}>
        <span>Our Story</span>
      </Link>
      <Link to="/wedding" className={`${styles["link"]}`} onClick={onMenuClick}>
        <span>{`Ceremony & Reception`}</span>
      </Link>
      <Link to="/rsvp" className={`${styles["link"]}`} onClick={onMenuClick}>
        <span>Confirmation</span>
      </Link>
      <Link to="/attire" className={`${styles["link"]}`} onClick={onMenuClick}>
        <span>Attire</span>
      </Link>
      <Link to="/faq" className={`${styles["link"]}`} onClick={onMenuClick}>
        <span>FAQs</span>
      </Link>
      <Link
        to="/contact-us"
        className={`${styles["link"]}`}
        onClick={onMenuClick}
      >
        <span>Contact Us</span>
      </Link>
    </div>
  );
};

export default SideBar;
