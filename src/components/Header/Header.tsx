import React, { useEffect, useRef, useState } from "react";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";

import styles from "./Header.module.scss";

import Nav from "./Nav";
import SideBar from "./SideBar";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const isClickedOutside = useDetectOutsideClick(wrapperRef);

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

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
      <Nav onClick={onMenuClick} showMenu={showMenu} headerRef={headerRef} />
      <SideBar showMenu={showMenu} marginTop={marginTop} />
    </div>
  );
};

export default Header;
