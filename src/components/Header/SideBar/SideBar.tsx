import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./SideBar.module.scss";

type Props = {
  showMenu: boolean;
  marginTop: number;
  onMenuClick(): void;
};

const SideBar: React.FC<Props> = ({ showMenu, marginTop, onMenuClick }) => {
  const [isInitialLoad, setInitialLoad] = useState(false);
  const [activePath, setActivePath] = useState("story");
  const location = useLocation();
  const { authenticated } = useAuth();

  useEffect(() => {
    const activePath = location.pathname.replace("/", "");
    setActivePath(activePath);
  }, [location.pathname]);

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
          ? { opacity: 0 }
          : { opacity: 1, height: `calc(100% - ${marginTop}px)` }
      }
      className={`${styles["nav-link"]} 
      ${showMenu ? styles["visible"] : styles["hidden"]}`}
    >
      <Link
        to="/story"
        className={`${styles["link"]} ${
          activePath === "story" ? styles["active"] : ""
        }`}
        onClick={onMenuClick}
      >
        <span>Our Story</span>
      </Link>
      {authenticated && (
        <Link
          to="/wedding"
          className={`${styles["link"]} ${
            activePath === "wedding" ? styles["active"] : ""
          }`}
          onClick={onMenuClick}
        >
          <span>{`Ceremony & Reception`}</span>
        </Link>
      )}
      {authenticated && (
        <Link
          to="/rsvp"
          className={`${styles["link"]} ${
            activePath === "rsvp" ? styles["active"] : ""
          }`}
          onClick={onMenuClick}
        >
          <span>RSVP</span>
        </Link>
      )}
      <Link
        to="/faq"
        className={`${styles["link"]} ${
          activePath === "faq" ? styles["active"] : ""
        }`}
        onClick={onMenuClick}
      >
        <span>FAQs</span>
      </Link>
      {authenticated && (
        <Link
          to="/contact-us"
          className={`${styles["link"]} ${
            activePath === "contact-us" ? styles["active"] : ""
          }`}
          onClick={onMenuClick}
        >
          <span>Contact Us</span>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
