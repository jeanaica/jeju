import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  let location = useLocation();

  const outletRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const backToTop = outletRef.current?.clientHeight > window.innerHeight;

    setShowBackToTop(backToTop);
  }, [location.pathname]);

  return (
    <div className={`${styles["layout"]}`}>
      <Header />
      <div ref={outletRef} className={`${styles["content"]}`}>
        <Outlet />
      </div>
      <Footer backToTop={showBackToTop} />
    </div>
  );
};

export default Layout;
