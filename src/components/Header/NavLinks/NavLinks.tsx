import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavLinks.module.scss";

const NavLinks: React.FC = () => {
  const [activePath, setActivePath] = useState("story");
  const location = useLocation();
  const { authenticated } = useAuth();

  useEffect(() => {
    const activePath = location.pathname.replace("/", "");
    setActivePath(activePath);
  }, [location.pathname]);

  return (
    <div className={`${styles["desktop-menu"]} text--sm`}>
      <Link
        to="/story"
        className={`${activePath === "story" ? styles["active"] : ""}`}
      >
        Our Story
      </Link>
      {authenticated && (
        <Link
          to="/wedding"
          className={`${activePath === "wedding" ? styles["active"] : ""}`}
        >
          {`Ceremony & Reception`}
        </Link>
      )}
      {authenticated && (
        <Link
          to="/rsvp"
          className={`${activePath === "rsvp" ? styles["active"] : ""}`}
        >
          RSVP
        </Link>
      )}
      <Link
        to="/faq"
        className={`${activePath === "faq" ? styles["active"] : ""}`}
      >
        FAQs
      </Link>
      {authenticated && (
        <Link
          to="/contact-us"
          className={`${activePath === "contact-us" ? styles["active"] : ""}`}
        >
          Contact Us
        </Link>
      )}
    </div>
  );
};

export default NavLinks;
