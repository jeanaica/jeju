import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import EventIcon from "@mui/icons-material/Event";
import LinkIcon from "@mui/icons-material/Link";

import Title from "../../components/Title";

import styles from "./Location.module.scss";

const Location: React.FC = (props) => {
  return (
    <div className={`${styles["location"]}`}>
      <Title header={`Ceremony/Reception`} />
      <div className={`${styles["content"]}`}>
        <div className={`${styles["info"]}`}>
          <EventIcon />
          <span>April 1, 2022</span>
        </div>
        <div className={`${styles["info"]}`}>
          <AccessTimeIcon />
          <span>5:30 PM</span>
        </div>
        <div className={`${styles["info"]}`}>
          <PlaceIcon />
          <div className={`${styles["place"]} `}>
            <span>
              <i>Monalisa Kitchen</i>
            </span>
            <span>
              98 East Dela Paz Street, Barangay San Roque 1801 Marikina City,
              Philippines
            </span>
          </div>
        </div>

        <div className={`${styles["info"]}`}>
          <LinkIcon />
          <a href="https://www.facebook.com/monalisakitchen.ph">
            facebook.com/monalisakitchen.ph
          </a>
        </div>
      </div>
      <div className={`${styles["map"]}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.51910594646!2d121.0955250148619!3d14.62644908036397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b95250cf2c87%3A0xb9f1e89e4b197c2e!2sMonalisa%20Kitchen!5e0!3m2!1sen!2sph!4v1641275595556!5m2!1sen!2sph"
          width="400"
          height="300"
          style={{ border: 0, marginTop: "2rem", marginBottom: "2rem" }}
          loading="lazy"
          title="Monalisa Kitchen"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
