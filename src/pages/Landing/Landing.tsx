import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "components/Button";

import styles from "./Landing.module.scss";
import useAuth from "hooks/useAuth";

const Landing: React.FC = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const { login } = useAuth();

  const handleAttend = () => {
    if (id) {
      login(id);
      navigate("/story");
    } else {
      navigate("/");
    }
  };

  return (
    <div className={`${styles["landing"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h1 className={`${styles["nav-header"]} text--xxxl`}>Je | Ju</h1>
          <span>April 1, 2022</span>
        </div>
        <div className={`${styles["buttons"]} col-7 col-s-9`}>
          <Button onClick={handleAttend}>We'll be there!</Button>
          <Button onClick={() => console.log("Hmmm")}>Not sure.</Button>
          <Button onClick={() => console.log("Noooo")}>We can't come</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
