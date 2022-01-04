import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";

import Title from "../../../components/Title";

import styles from "./Location.module.scss";

const Location: React.FC = (props) => {
  return (
    <div className={`${styles["location"]}`}>
      <Title header={`Location`} />
      <div className={`${styles["content"]}`}>
        <div className={`${styles["info"]}`}>
          <AccessTimeIcon />
          <span>April 1, 2022</span>
        </div>
        <div className={`${styles["info"]}`}>
          <PlaceIcon />
          <div className={`${styles["place"]} `}>
            <p>Monalisa Kitchen</p>
            <span>
              98 East Dela Paz Street, Barangay San Roque 1801 Marikina City,
              Philippines
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
