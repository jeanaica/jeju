import Alert from "components/Alert";
import Button from "components/Button";
import Title from "components/Title";
import { FC, useCallback, useEffect, useState } from "react";

import styles from "./Confirmation.module.scss";
import ConfirmationBox from "./ConfirmationBox";

const ConfirmationSection: FC = () => {
  const [guestList, setGuestList] = useState<
    Record<string, Record<string, boolean>>
  >({});

  const [isSent, setIsSent] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    // TODO: Put get API call here
    setGuestList({
      "Joel Silang": { isGoing: false },
      "Aira Aron-Silang": { isGoing: false },
      "Asher Sky Silang": { isGoing: false },
      "Gideon Samuel Silang": { isGoing: false },
    });
  }, []);

  const handleBoxClick = useCallback(
    (e) => {
      if (isSent) {
        setIsSent(false);
      }

      if (hasErrors) {
        setHasErrors(false);
      }

      setGuestList({
        ...guestList,
        [e.target.name]: { isGoing: e.target.checked },
      });
    },
    [guestList, hasErrors, isSent, setGuestList]
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const goingGuestArray = Object.keys(formProps);

    console.log(goingGuestArray);
    setIsSent(true);
    // setHasErrors(true);
    // TODO: send to db
  }, []);

  return (
    <div className={`${styles["confirmation"]}`}>
      <Title header={`Confirmation`} />

      <Alert className={`${styles["instructions"]}`}>
        <p>
          * We would like to see you there on our special day. Please check the
          names of the guests who would be joining us and click on SUBMIT
        </p>
      </Alert>

      {(isSent || hasErrors) && (
        <Alert type={hasErrors ? "error" : "success"}>
          {hasErrors ? (
            <span>Something went wrong, please try again later</span>
          ) : (
            <span>Successfully updated your confirmation! See you there!</span>
          )}
        </Alert>
      )}

      <div className={`${styles["confirmation-section"]}`}>
        <h6 className={`${styles["information"]}`}>*Yes, we'll be there</h6>
        <form name="confirmationForm" onSubmit={handleSubmit}>
          {Object.keys(guestList).length > 0 ? (
            Object.keys(guestList).map((name) => (
              <ConfirmationBox
                key={name}
                onClick={handleBoxClick}
                name={name}
                isGoing={guestList[name].isGoing}
              />
            ))
          ) : (
            <div></div>
          )}

          <Button type="submit" className={`${styles["confirmation-button"]}`}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationSection;
