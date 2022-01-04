import React, { RefObject } from "react";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

import styles from "./Nav.module.scss";

type Props = {
  onClick(): void;
  showMenu: boolean;
  headerRef: RefObject<HTMLElement>;
};

const Nav: React.FC<Props> = ({ onClick, showMenu, headerRef }) => {
  return (
    <nav className={`${styles["header"]}`} ref={headerRef}>
      <div className={`${styles["nav-menu"]}`}>
        <button
          className={`${styles["nav-button"]} ${
            showMenu ? styles["visible"] : styles["hidden"]
          }`}
          onClick={onClick}
        >
          <Close />
        </button>
        <button
          className={`${styles["nav-button"]} ${
            !showMenu ? styles["visible"] : styles["hidden"]
          }`}
          onClick={onClick}
        >
          <Menu />
        </button>
      </div>

      <div className={`${styles["title"]}`}>
        <h3 className={`${styles["title-text"]} font-secondary`}>Je | Ju</h3>
      </div>
    </nav>
  );
};

export default Nav;
