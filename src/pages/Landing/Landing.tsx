import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from "react-loading";

import Button from "components/Button";

import styles from "./Landing.module.scss";
import useAuth from "hooks/useAuth";
import validateToken from "firebase/fetch";

const Landing: React.FC = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login, logout, token, authenticated } = useAuth();

  useEffect(() => {
    setIsLoading(true);

    if (id) {
      handleToken(id);
    } else if (token) {
      handleToken(token);
    }

    return () => {
      setIsLoading(false);
    };
  }, []);

  const handleToken = (argToken: string) => {
    validateToken(argToken)
      .then((res) => {
        if (res) {
          if (authenticated && res === token) {
            navigate("/rsvp");
          } else {
            logout();
          }

          setIsValid(true);
        } else {
          logout();
        }
      })
      .catch(() => {
        setIsValid(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAttend = (attend: "YES" | "MAYBE" | "NO") => {
    if (id) {
      login(id);
      navigate("/rsvp", { state: { attend } });
    } else {
      navigate("/story");
    }
  };

  const handleMoreInfo = () => {
    navigate("/story");
  };

  const renderText = () => {
    if (isValid) {
      return (
        <>
          <span>April 1, 2022 5:30PM (UTC +8)</span>
          <br />
          <span className={`text--xs`}>
            We are getting married and you are invited!
          </span>
        </>
      );
    }

    return (
      <>
        <span>April 1, 2022</span>
        <br />
        <span className={`text--xs`}>We are getting married!</span>
      </>
    );
  };

  const renderButtons = () => {
    if (isValid) {
      return (
        <div className={`${styles["buttons"]}`}>
          <Button onClick={() => handleAttend("YES")}>We'll be there!</Button>
          <Button onClick={() => handleAttend("MAYBE")}>Not sure.</Button>
          <Button onClick={() => handleAttend("NO")}>We can't come</Button>
        </div>
      );
    }

    return (
      <div className={`${styles["buttons"]}`}>
        <Button onClick={handleMoreInfo}>Our Story</Button>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className={`${styles["loading"]}`}>
        <ReactLoading type="cylon" color="#052441" />
      </div>
    );
  };

  return (
    <div className={`${styles["landing"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h1 className={`${styles["nav-header"]} text--xxxl`}>Je | Ju</h1>
          {isLoading ? renderLoading() : renderText()}
        </div>
        {isLoading ? renderLoading() : renderButtons()}
      </div>
    </div>
  );
};

export default Landing;
