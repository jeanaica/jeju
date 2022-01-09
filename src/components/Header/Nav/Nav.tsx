import React, { RefObject } from "react";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

import styles from "./Nav.module.scss";
import NavLinks from "../NavLinks";

type Props = {
  onClick(): void;
  showMenu: boolean;
  showSideBar: boolean;
  headerRef: RefObject<HTMLElement>;
};

const Nav: React.FC<Props> = ({
  onClick,
  showMenu,
  showSideBar,
  headerRef,
}) => {
  return (
    <nav
      className={`${styles["header"]} ${!showSideBar && styles["desktop"]}`}
      ref={headerRef}
    >
      {showSideBar ? (
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
      ) : (
        <NavLinks />
      )}

      <div
        className={`${styles["title"]} ${
          !showSideBar && styles["desktop-title"]
        }`}
      >
        <h3
          className={`${styles["title-text"]} ${
            !showSideBar && styles["desktop-title-text"]
          } font-secondary`}
        >
          Je | Ju
        </h3>
      </div>
    </nav>
  );
};

export default Nav;
