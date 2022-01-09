import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "components/Button";

import styles from "./Landing.module.scss";
import useAuth from "hooks/useAuth";

const Landing: React.FC = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const { login } = useAuth();

  const handleAttend = (attend: "YES" | "MAYBE" | "NO") => {
    if (id) {
      login(id);
      navigate("/rsvp", { state: { attend } });
    }
  };

  return (
    <div className={`${styles["landing"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h1 className={`${styles["nav-header"]} text--xxxl`}>Je | Ju</h1>
          <span>April 1, 2022</span>
        </div>
        <div className={`${styles["buttons"]}`}>
          <Button onClick={() => handleAttend("YES")}>We'll be there!</Button>
          <Button onClick={() => handleAttend("MAYBE")}>Not sure.</Button>
          <Button onClick={() => handleAttend("NO")}>We can't come</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
