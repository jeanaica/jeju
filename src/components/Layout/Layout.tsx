import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={`${styles["layout"]}`}>
      <Header />
      <Outlet />
      <div className={`${styles["footer"]}`}>Footer</div>
    </div>
  );
};

export default Layout;
