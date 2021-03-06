import useWindowDimensions from "hooks/useWindowDimensions";
import React, { useEffect, useRef, useState } from "react";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";

import styles from "./Header.module.scss";

import Nav from "./Nav";
import SideBar from "./SideBar";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const isClickedOutside = useDetectOutsideClick(wrapperRef);
  const { width } = useWindowDimensions();

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu && showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu, showSideBar]);

  useEffect(() => {
    if (width <= 768) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  }, [width]);

  useEffect(() => {
    if (headerRef.current) {
      // @ts-ignore
      setMarginTop(headerRef.current?.clientHeight);
    }
  }, [showMenu]);

  useEffect(() => {
    if (isClickedOutside) {
      setShowMenu(false);
    }
  }, [isClickedOutside]);

  return (
    <div ref={wrapperRef} className={`${styles["header-container"]}`}>
      <Nav
        onClick={onMenuClick}
        showSideBar={showSideBar}
        showMenu={showMenu}
        headerRef={headerRef}
      />
      {showSideBar && (
        <SideBar
          showMenu={showMenu}
          marginTop={marginTop}
          onMenuClick={onMenuClick}
        />
      )}
    </div>
  );
};

export default Header;
